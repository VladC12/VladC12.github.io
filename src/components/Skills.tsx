import styles from "./Skills.module.css"

const Skills = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src="/react-logo.svg" alt="React" loading="lazy" />
                <span>React</span>
            </div>
            <div>
                <img src="/ts-logo.svg" alt="TypeScript" loading="lazy" />
                <span>Typescript</span>
            </div>
            <div>
                <img src="/nextjs-logo.svg" alt="Next.js" loading="lazy" />
                <span>NextJS</span>
            </div>
            <div>
                <img src="/nodejs-logo.svg" alt="Node.js" loading="lazy" />
                <span>NodeJS</span>
            </div>
            <div>
                <img src="/python-logo.svg" alt="Python" loading="lazy" />
                <span>Python</span>
            </div>
        </div>
    )
}

export default Skills