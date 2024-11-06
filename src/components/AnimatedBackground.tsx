import * as THREE from 'three';
import { useRef, useMemo, useEffect } from 'react';
import { Canvas, useFrame, GroupProps } from '@react-three/fiber';
import styles from './AnimatedBackground.module.css';
import Delaunator from 'delaunator';

interface Props {
  darkMode: boolean;
}

interface TrianglesProps extends GroupProps {
  darkMode: boolean;
}

// Generate random points within a given width and height
export const generatePoints = (numPoints: number, width: number, height: number) => {
  const points = [];
  for (let i = 0; i < numPoints; i++) {
    points.push([Math.random() * width - width / 2, Math.random() * height - height / 2]);
  }
  return points;
};

// Generate a random color for the triangles based on theme
export const getRandomColor = (darkMode: boolean) => {
  const maxDark = 30;
  const maxLight = 200;

  const value = darkMode ?
    Math.floor(Math.random() * (43 - maxDark) + maxDark) :
    Math.floor(Math.random() * (255 - maxLight) + maxLight);
  const hex = value.toString(16).padStart(2, '0');
  return `#${hex}${hex}${hex}`;
};

const Triangles = (props: TrianglesProps) => {
  const ref = useRef<THREE.Group>(null);

  // Generate delaunay triangulation
  // https://ianthehenry.com/posts/delaunay/
  // https://github.com/mapbox/delaunator
  const points = useMemo(() => generatePoints(100, window.innerWidth, window.innerHeight), []);
  const delaunay = useMemo(() => Delaunator.from(points), [points]);

  // Extract triangles
  const triangles = useMemo(() => {
    const triangles = [];
    for (let i = 0; i < delaunay.triangles.length; i += 3) {
      const p0 = points[delaunay.triangles[i]];
      const p1 = points[delaunay.triangles[i + 1]];
      const p2 = points[delaunay.triangles[i + 2]];
      triangles.push([p0, p1, p2]);
    }
    return triangles;
  }, [delaunay, points]);

  // Add triangles to the scene
  useEffect(() => {
    if (ref.current) {
      const group = ref.current;
      triangles.forEach(triangle => {
        const geometry = new THREE.BufferGeometry();
        const vertices = new Float32Array([
          triangle[0][0], triangle[0][1], 0,
          triangle[1][0], triangle[1][1], 0,
          triangle[2][0], triangle[2][1], 0,
        ]);
        geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
        const material = new THREE.MeshBasicMaterial({ color: getRandomColor(props.darkMode), side: THREE.DoubleSide });
        const mesh = new THREE.Mesh(geometry, material);
        group.add(mesh);
      });
    }
    // Scene updates when theme changes
  }, [triangles, props.darkMode]);

  // Animate trinagles
  useFrame(({ clock }) => {
    if (ref.current) {
      const time = clock.getElapsedTime();
      ref.current.children.forEach((mesh) => {
        const geometry = (mesh as THREE.Mesh).geometry;
        const position = geometry.attributes.position;
        for (let i = 0; i < position.count; i++) {
          const y = position.getY(i);
          position.setZ(i, Math.sin(y * 0.1 + time) * 10);
        }
        position.needsUpdate = true;
      });
    }
  });

  return <group ref={ref} {...props} />;
};

const AnimatedBackground = ({ darkMode }: Props) => {
  return (
    <div className={styles.container}>
      <Canvas camera={{ position: [0, 0, 500], fov: 75 }}>
        <Triangles darkMode={darkMode} />
      </Canvas>
    </div>
  );
}

export default AnimatedBackground;