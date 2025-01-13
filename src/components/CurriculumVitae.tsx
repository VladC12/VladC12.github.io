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
                    <p>I am a <b>software engineer</b> with a passion for all things technology: software, hardware, electronics, and
                        artificial intelligence. My main professional focus is <b>web development</b>. Especially in <b>React</b> and <b>NextJS</b>.</p>
                </div>
                <h2>Skills</h2>
                <Skills />
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>09/2021 - {formattedDate}</h3>
                        <h3>SOFTWARE ENGINEER, SC Artificial Intelligence Visual Analytics SRL</h3>
                        <p>
                            Built and deployed multiple projects as a <b>full-stack developer</b>, 
                            including tools for internal use and client-facing products. Most of the work was focused on 
                            web development using <b>React</b>, <b>NodeJS</b>, and <b>NextJS</b>. Additionally, 
                            I worked on Synthetic Data Generation pipelines using <b>Python</b> and <b>Blender</b>, 
                            and contributed to creating realistic datasets through 3D modeling. 
                            Our solutions were deployed on <b>edge devices</b> and cloud infrastructure.
                        </p>

                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                            <li id="cradle" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Cradle</h3>
                                <p>
                                    This <b>Python</b>-based application processes <b>RTSP streams</b> from multiple sources, 
                                    performing real-time video inference using a machine learning model. 
                                    The results, such as people detection data and other analytical insights, 
                                    are packaged into payloads for use in scenarios like <b>surveillance systems</b>, 
                                    <b>traffic monitoring</b>, and other environments requiring real-time video analysis.
                                </p>

                                <div>
                                    <span>Python</span><span>OpenCV</span><span>Multiprocessing</span><span>Tensorflow</span><span>Kafka</span>
                                </div>
                            </li>
                            <li id="quartermaster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Quartermaster</h3>
                                <p>
                                    An internal tool developed for AiVA using <b>NextJS</b>, designed to help organize large datasets 
                                    by enabling mass uploads into a structured directory. It supported special use cases like managing 3D model 
                                    files with texture dependencies and allowed videos, images, and 3D models to be previewed directly in the browser. 
                                    Files were stored in a shared folder with the file structure displayed in the browser using links generated from <b>JSON</b> files. 
                                    Users could download entire folders or specific files as archives, preserving the file structure, 
                                    with options for immediate download or time-limited links.
                                </p>

                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>threejs</span>
                                </div>
                            </li>
                            <li id="caster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Caster</h3>
                                <p>
                                    An internal tool developed at AiVA using <b>NextJS</b> and <b>Flask</b>. Its main purpose was to simplify the process of visually 
                                    saving image coordinates. Users could save <b>RTSP video streams</b> with thumbnails generated from screenshots. 
                                    For each stream, they could create directional lines and polygons for regions of interest (ROI) using Canvas. 
                                    These annotations were then used by AI to detect when people passed specific lines or entered an ROI. 
                                    <b>Flask</b> handled RTSP streams and OpenCV-related APIs. Additional options, though less central, were also included to enhance functionality.
                                </p>
                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>Flask</span>
                                </div>
                            </li>
                            <li id="event-manager" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Manager</h3>
                                <p>A client-facing project built with <b>NextJS</b>. It visualizes various checkout events, 
                                    such as item-scanning fraud, by displaying a detailed, filterable table of data. 
                                    The application allows user creation with different permission levels, ensuring 
                                    flexible access control for administrators.</p>
                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="event-watcher" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Watcher</h3>
                                <p>A desktop app created using <b>Electron</b> and <b>React</b>, designed to notify users in real time 
                                    about checkout fraud. Users can review ~5-second videos of flagged events, along with information 
                                    such as the SKU barcode, price, and timestamp. It's accompanied by Event Watcher Buddy, which helps 
                                    manage user accounts, track app versions, and enable software updates. Buddy also supports user creation 
                                    and handles API integration.</p>
                                <div>
                                    <span>Electron</span><span>React</span><span>Typescript</span><span>MongoDB</span><span>NodeJS</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <h3>07/2018 - 09/2018</h3>
                        <h3>INTERN SOFTWARE DEVELOPER, SC Continental Automotive Systems SRL</h3>
                        <p>
                            Tested and worked with <b>electronic components</b>, contributing to an ATV prototype. 
                            Developed software for the prototype while working in a team environment.
                        </p>
                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                            <li id="continental" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Internship Project</h3>
                                <p>Developed software for a prototype electric ATV utilizing custom CAN drivers and Arduino. 
                                   Implemented communication protocols between the microcontroller and four motor drivers, 
                                   contributing to vehicle control system development.</p>
                                <a href="https://github.com/VladC12/CONTIMOBIL-2018" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/CONTIMOBIL-2018</a>
                                <div>
                                    <span>Arduino</span><span>C</span>
                                </div>
                            </li>
                            <li id="innovation-labs" onMouseEnter={handleHover} >
                                <h3>Innovation Labs 2018</h3>
                                <p>Developed an electric self-stabilizing cup-holder prototype with Arduino. 
                                   Implemented gyroscopic stabilization and motor control systems. Project advanced 
                                   to semi-finals at Innovation Labs Bucharest competition.</p>
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
                                <h3>Bachelor Thesis: Tacotron 2 DNN Text-To-Speech Web App</h3>
                                <p>Implemented a <b>Text-to-Speech</b> system using <b>Tacotron 2</b> architecture, training models in both Romanian and English. 
                                   Developed a <b>web interface</b> using <b>Flask</b> to demonstrate the model capabilities. The Romanian model was trained on the Mara Corpus, 
                                   while the English model utilized the <b>LJSpeech Dataset</b>.</p>
                                <div>
                                    <span>Python</span><span>Tensorflow</span><span>Flask</span><span>Bootstrap</span>
                                </div>
                            </li>
                            <li id="modbus" onMouseEnter={handleHover}>
                                <h3>IOT Modbus Monitor</h3>
                                <p>Developed a web application using <b>Python</b> and <b>Flask</b> to monitor and display data from 
                                   <b>Modbus</b> devices. Implemented data storage and retrieval using <b>MongoDB</b>. 
                                   Worked in a team of three to complete this university project.</p>
                                <a href="https://github.com/VladC12/IOT_Modbus_Monitor" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/IOT_Modbus_Monitor</a>
                                <div>
                                    <span>Python</span><span>Flask</span><span>Bootstrap</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="edge-detection" onMouseEnter={handleHover}>
                                <h3>Edge Detection with GUI</h3>
                                <p>Developed an edge detection application using <b>Python</b> and <b>OpenCV</b>. 
                                   Implemented various edge detection algorithms including Prewitt, Sobel, 
                                   and Nevatia-Babu operators. Created a simple graphical interface with <b>Tkinter</b>.</p>
                                <a href="https://github.com/VladC12/Edge-Detection-PNI" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/Edge-Detection-PNI</a>
                                <div>
                                    <span>Python</span><span>OpenCV</span><span>Tkinter</span>
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