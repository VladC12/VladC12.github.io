import { ThemeContext } from "../context/ThemeContext";
import styles from "./CurriculumVitae.module.css";
import Showcase from "./Showcase";
import Skills from "./Skills";

import { useState, useContext } from "react";

const CurriculumVitae: React.FC = () => {

    const [showcase, setShowcase] = useState<string>("landing");

    const handleHover = (e: React.MouseEvent<HTMLLIElement | HTMLDivElement, MouseEvent>) => {
        let hoverTimeout: ReturnType<typeof setTimeout>;
        const element = e.currentTarget;

        // Delay the showcase change to prevent flickering and
        // unintended showcase changes
        hoverTimeout = setTimeout(() => {
            if (element) {
                setShowcase(element.id);
            }
        }, 200);

        e.currentTarget.addEventListener('mouseleave', () => {
            clearTimeout(hoverTimeout);
        });
    }

    const handleLeave = () => {
        setShowcase("left");
    } 

    const { isMobile } = useContext(ThemeContext);

    const currentDate = new Date();
    const formattedDate = `${String(currentDate.getMonth() + 1).padStart(2, '0')}/${currentDate.getFullYear()}`;

    return (
        <div className={styles.container}>
            <div className={styles.cv}>
                <div className={styles.myself}>
                    <span>Crehul Vlad</span>
                    <p><b>Full-Stack Software Engineer</b>: 4+ years building production systems involving real-time video processing, AI integration, and cloud/edge deployments. Experienced in owning features end-to-end from frontend architecture to backend services and deployment.</p>
                </div>
                <h2>Skills</h2>
                <Skills />
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>09/2021 - Present</h3>
                        <h3><b>SOFTWARE ENGINEER</b>, <b>SC Artificial Intelligence Visual Analytics</b></h3>
                        <ul className="bullets" style={{ listStyleType: 'disc', paddingLeft: '1.2em' }}>
                            <li><b>Architected</b> the development of high-impact full-stack applications (<b>React</b>, <b>Next.js</b>, <b>Node.js</b>, <b>Python</b>) spanning <b>real-time AI</b> monitoring dashboards and internal data-annotation tools.</li>
                            <li><b>Engineered</b> a pilot <b>AI-assisted mathematics platform</b>, featuring a <b>"Human-in-the-Loop" validation workflow</b> that allowed educators to audit and ingest AI-generated question sets into production.</li>
                            <li><b>Built real-time video inference pipelines</b> (<b>Python</b>, <b>OpenCV</b>, <b>Kafka</b>) processing <b>multiple concurrent RTSP streams</b> for edge-device deployments in retail and traffic sectors.</li>
                            <li><b>Developed automated synthetic data pipelines</b> using <b>Python</b> and <b>Blender</b>, generating <b>high-fidelity 3D datasets</b> to accelerate the training of proprietary machine learning models.</li>
                            <li><b>Managed end-to-end deployment workflows</b> across <b>cloud infrastructure</b> and <b>edge devices</b>, configuring networking and remote monitoring solutions for client installations.</li>
                        </ul>

                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                            <li id="learning-platform" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Learning Platform</h3>
                                <p>
                                    <b>Architected</b> a "<b>Human-in-the-Loop</b>" <b>AI education system</b> featuring a <b>LeetCode-style</b> interactive interface for dynamic mathematics problem-solving.<br/>
                                    <b>Engineered dual-facing dashboards</b> for <b>real-time student performance</b> tracking and administrative tools for teachers to manage <b>class-level curriculum analytics</b>.<br/>
                                    <b>Streamlined AI content ingestion</b> by building an internal validation workflow, allowing educators to audit and approve pre-generated question sets for production.
                                </p>
                                <div>
                                    <span>React</span><span>TypeScript</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="cradle" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Cradle</h3>
                                <p>
                                    <b>Architected</b> a <b>real-time video inference pipeline</b> processing <b>multiple concurrent RTSP streams</b> for surveillance and people traffic monitoring.<br/>
                                    <b>Optimized multiprocessing workloads</b> to achieve <b>low-latency ML inference</b> in edge-computing environments.<br/>
                                    <b>Engineered high-throughput data payloads</b> to bridge the gap between backend AI detection and frontend monitoring dashboards.
                                </p>
                                <div>
                                    <span>Python</span><span>OpenCV</span><span>Kafka</span><span>Tensorflow</span><span>Multiprocessing</span>
                                </div>
                            </li>
                            <li id="caster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Caster</h3>
                                <p>
                                    <b>Developed</b> an internal <b>spatial data annotation tool</b> to define coordinates, directional lines, and <b>Polygons (ROI)</b> via <b>HTML5 Canvas</b>.<br/>
                                    <b>Integrated Flask-based APIs</b> to handle <b>RTSP stream synchronization</b> and <b>automated thumbnail generation</b> from live video.<br/>
                                    <b>Enabled precise AI triggering</b> for person-detection events based on user-defined geometric boundaries.
                                </p>
                                <div>
                                    <span>NextJS</span><span>TypeScript</span><span>Flask</span>
                                </div>
                            </li>
                            <li id="event-manager" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Manager</h3>
                                <p>
                                    <b>Delivered</b> a client-facing <b>analytics dashboard</b> to visualize <b>item-scanning fraud</b> through complex filterable data tables.<br/>
                                    <b>Implemented a robust Role-Based Access Control (RBAC)</b> system to manage administrative permissions and secure sensitive event data.
                                </p>
                                <div>
                                    <span>NextJS</span><span>TypeScript</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="event-watcher" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Watcher & Buddy</h3>
                                <p>
                                    <b>Built</b> a <b>cross-platform desktop application</b> for <b>real-time security alerts</b>, featuring <b>low-latency playback</b> of flagged fraud events.<br/>
                                    <b>Designed "Event Watcher Buddy"</b> to manage <b>automated software updates</b>, version control, and <b>secure user authentication</b>.<br/>
                                    <b>Implemented a local-first notification system</b> to alert users within seconds of an AI-flagged event.
                                </p>
                                <div>
                                    <span>Electron</span><span>React</span><span>NodeJS</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="quartermaster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Quartermaster</h3>
                                <p>
                                    <b>Created</b> a <b>high-capacity data management system</b> for organizing <b>large-scale datasets and 3D assets</b> with complex dependencies.<br/>
                                    <b>Implemented in-browser previews</b> for <b>3D models (Three.js)</b>, videos, and images, eliminating the need for local downloads during review.<br/>
                                    <b>Developed a dynamic file-structure generator</b> that supports batch uploads and <b>time-limited secure sharing links</b>.
                                </p>
                                <div>
                                    <span>NextJS</span><span>TypeScript</span><span>threeJS</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>07/2018 - 09/2018</h3>
                        <h3><b>INTERN SOFTWARE DEVELOPER</b>, <b>SC Continental Automotive Systems</b></h3>
                         <ul className="bullets" style={{ listStyleType: 'disc', paddingLeft: '1.2em' }}>
                            <li><b>Developed embedded software</b> for an ATV prototype, focusing on <b>real-time data acquisition</b> from electronic sensors.</li>
                            <li><b>Executed hardware-in-the-loop (HIL) testing</b> for electronic components to ensure system reliability under stress conditions.</li>
                        </ul>
                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                             <li id="continental" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Internship Project</h3>
                                <p><b>Developed software</b> for a prototype electric ATV utilizing <b>custom CAN drivers</b> and <b>Arduino</b>.<br/>
                                   <b>Implemented communication protocols</b> between the microcontroller and four motor drivers, contributing to vehicle control system development.</p>
                                <a href="https://github.com/VladC12/CONTIMOBIL-2018" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/CONTIMOBIL-2018</a>
                                <div>
                                    <span>Arduino</span><span>C</span>
                                </div>
                            </li>
                            <li id="innovation-labs" onMouseEnter={handleHover} >
                                <h3>Innovation Labs 2018 — <b>Semi-Finals</b></h3>
                                <p>
                                    <b>Co-engineered</b> an <b>electric self-stabilizing mechatronic prototype</b> within a multidisciplinary team of four, focusing on <b>hardware-software integration</b> using Arduino.<br/>
                                    <b>Developed the gyroscopic stabilization logic</b> and <b>closed-loop motor control systems</b> to maintain container equilibrium against multi-axis vehicle motion.<br/>
                                    <b>Contributed to the successful delivery</b> of a functional prototype, advancing the project to the competition semi-finals through rigorous technical iteration and testing.
                                </p>
                                <a href="https://github.com/VladC12/Omni-Holder" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/Omni-Holder</a>
                                <div>
                                    <span>Arduino</span><span>C</span><span>Electronics</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
                <h2>Education</h2>
                <ul>
                    <li>
                        <h3>06/2021</h3>
                        <h3>Bachelor of Engineeering, UTCN, Faculty of Electronics, Telecommunications and Technology Information</h3>
                        <p>Telecommunication Technologies and System specialization.</p>
                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                            <li id="thesis" onMouseEnter={handleHover}>
                                <h3>Bachelor Thesis: <b>Tacotron 2 DNN Text-To-Speech Web App</b></h3>
                                <p>
                                    <b>Engineered</b> a <b>high-fidelity TTS system</b> based on the <b>Tacotron 2</b> deep neural network architecture, implementing <b>custom training pipelines</b> for both English and Romanian phonetics.<br/>
                                    <b>Optimized model performance</b> through <b>specialized datasets</b>, utilizing the <b>LJSpeech Dataset</b> for English and the <b>Mara Corpus</b> for Romanian to achieve natural-sounding speech synthesis.<br/>
                                    <b>Developed a Flask-based web interface</b> to serve <b>real-time inference</b>, providing a seamless demonstration of the model's linguistic capabilities and neural processing.
                                </p>
                                <div>
                                    <span>Flask</span><span>Tensorflow</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>06/2017</h3>
                        <h3>Baccalaureate Diploma, Colegiul National Silvania</h3>
                        <p>Mathematics and Informatics</p>
                    </li>
                </ul>
            </div>
            {!isMobile && 
            <div id="showcase" onMouseEnter={handleHover} onMouseLeave={handleLeave} className={styles.showcase}>
                <Showcase showcase={showcase} />
            </div>}

        </div>
    );
};

export default CurriculumVitae;