import { ThemeContext } from "../context/ThemeContext";
import styles from "./CurriculumVitae.module.css";
import Showcase from "./Showcase";

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

    return (
        <div className={styles.container}>
            <div className={styles.cv}>
                <div className={styles.myself}>
                    <span>Crehul Vlad</span>
                    <p>I am a <b>software engineer</b> with a passion for all things technology: software, hardware, electronics, and
                        artificial intelligence. My main professional focus is <b>web development</b>. Especially in <b>React</b> and <b>NextJS</b>.</p>
                </div>
                <h2>Skills</h2>
                <p>TODO: Icons and whatnot for React, Python, Typescript, NextJS, NodeJS</p>
                <h2>Experience</h2>
                <ul>
                    <li>
                        <h3>09/2021 - 12/2024</h3>
                        <h3>SOFTWARE ENGINEER, SC Artificial Intelligence Visual Analytics SRL</h3>
                        <p>
                            My first job, and it was a start-up. Worked on multiple projects as a <b>full-stack developer</b>, some for internal use only and some to be used by
                            clients. Most of the work was focused on web development using <b>React</b> and <b>NodeJS</b>. Another
                            part of the work there was in Synthetic Data Generation with <b>Blender</b> and <b>Python</b> and 3D
                            modeling.
                        </p>
                        <h2>Projects</h2>
                        <ul className={styles.projects}>
                            <li id="cradle" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Cradle</h3>
                                <p>Written in <b>python</b>, this application ingests <b>RTSP streams</b> from one or more sources, 
                                performing real-time inference on the video frames using a machine learning model. 
                                The inference results are then packaged into analytical payloads, which can include people detection data and other insights. 
                                This tool is designed for use in surveillance systems, traffic monitoring setups, and other scenarios where real-time video analysis can provide valuable insights.</p>
                                <div>
                                    <span>Python</span><span>OpenCV</span><span>Multiprocessing</span><span>Tensorflow</span><span>Kafka</span>
                                </div>
                            </li>
                            <li id="quartermaster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Quartermaster</h3>
                                <p>One of the internal tools developed for AiVA was created using <b>NextJS</b>. Its purpose was to assist
                                    in organizing stored dataset materials by allowing mass uploads of files in a specific directory
                                    structure while handling upload chunking. It also catered to special cases such as organizing 3D
                                    model files that had texture files in folders. Videos, images, and 3D models could be viewed directly in the browser.
                                    To prevent file duplication, all files were stored in a shared folder, with the file structure visible in
                                    the browser based on links from JSON files.
                                    Upon selecting a folder or file(s), users could request to download them in an archive while
                                    maintaining the file structure. Options to download immediately or use a time-limited link were
                                    also available.</p>
                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>threejs</span>
                                </div>
                            </li>
                            <li id="caster" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Caster</h3>
                                <p>Another internal tool developed for AiVA also created in <b>NextJS</b> and <b>Flask</b>. The web applications
                                    was meant to simplify the process of visually saving image coordinates. The main page of the web
                                    application allowed users to save <b>RTSP Video Streams</b> with a thumbnail based on a screen-shot
                                    from the stream.
                                    For each stream one could create lines for direction and passage and polygons for regions of
                                    interest (ROI), using Canvas. These lines and polygons were used by AI to detect when people
                                    pass the lines or are present in the ROI. Some additional options were also available, although
                                    less important.
                                    <b>Flask</b> was used to handle the RTSP streams and APIs related to <b>OpenCV</b>.</p>
                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>Flask</span>
                                </div>
                            </li>
                            <li id="event-manager" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Manager</h3>
                                <p>One of the projects meant for client-use. It is created in <b>NextJS</b>. It is meant to visualize different
                                    events that can happen at a checkout counter such as item scanning fraud.
                                    It shows a detailed table that can be filtered based on multiple factors.
                                    You can create users which have different limitations.</p>
                                <div>
                                    <span>NextJS</span><span>React</span><span>Typescript</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="event-watcher" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Event Watcher</h3>
                                <p>Another project for client-use. It was made with <b>Electron</b> and <b>React</b>. It's a desktop app that allows
                                    the user to be notified in <b>real-time</b> of item fraud at the checkout counter. Users can view a ~5
                                    second video of the event, along with the SKU barcode, price, and timestamp. Associated with it
                                    there is Event Watcher Buddy which allows to manage the users. The user system is similar to
                                    Event Manager.
                                    Buddy is also used to keep track of the app version and enable users to download updates, allows for
                                    user creation and handles the API.</p>
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
                            Participated at an internship organized by Continental where I developed software and did basic
                            <b>electronics</b> in a team of four people, for prototype devices.
                        </p>
                        <h2>Projects</h2>
                        <p>Most of the work was on the electronics side honestly.</p>
                        <ul className={styles.projects}>
                            <li id="continental" onMouseEnter={handleHover} onMouseLeave={() => setShowcase("left")}>
                                <h3>Internship Project</h3>
                                <p>The main project done during the internship was writing software for an electric ATV which used
                                    custom drivers created by them. The 4 drivers were controlled through and Arduino communicating to them via CAN.</p>
                                <a href="https://github.com/VladC12/CONTIMOBIL-2018" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/CONTIMOBIL-2018</a>
                                <div>
                                    <span>Arduino</span><span>C</span>
                                </div>
                            </li>
                            <li id="innovation-labs" onMouseEnter={handleHover} >
                                <h3>Innovation Labs 2018</h3>
                                <p>Part of the Calics team I helped write the code for an electric self-stabilizing cup-holder. This
                                    project continued partially at the Continental Internship. We reached the semi-finals at Bucharest.</p>
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
                        <p>The projects here might not be as impressive but I decided to add them nonetheless.</p>
                        <ul className={styles.projects}>
                            <li id="thesis" onMouseEnter={handleHover}>
                                <h3>Bachelor Thesis: Tacotron 2 DNN Text-To-Speech Web App</h3>
                                <p>My bachelor thesis project involved implementing a version of Tacotron 2 and training two
                                    models: one in Romanian using the Mara Corpus, which contains the audiobook "Mara", and
                                    another in English using the publicly available LJSpeech Dataset. Additionally, a web interface was
                                    developed using Flask to accompany the two models.</p>
                                <div>
                                    <span>Python</span><span>Tensorflow</span><span>Flask</span><span>Bootstrap</span>
                                </div>
                            </li>
                            <li id="modbus" onMouseEnter={handleHover}>
                                <h3>IOT Modbus Monitor</h3>
                                <p>As a university project, my team of three was tasked with retrieving and parsing data from a
                                    Modbus and displaying it in a web interface. We accomplished this using Python and rendering
                                    the web interface via Flask, a Python library. The data was organized and stored in a database
                                    using pymongo.</p>
                                <a href="https://github.com/VladC12/IOT_Modbus_Monitor" target="_blank" rel="noopener noreferrer">https://github.com/VladC12/IOT_Modbus_Monitor</a>
                                <div>
                                    <span>Python</span><span>Flask</span><span>Bootstrap</span><span>MongoDB</span>
                                </div>
                            </li>
                            <li id="edge-detection" onMouseEnter={handleHover}>
                                <h3>Edge Detection with GUI</h3>
                                <p>A project for year 4 semester 1 of the university for Digital Image Processing. We used Prewitt,
                                    Sobel, compass, Nevatia-Babu operators for edge detection with automated mask generation of
                                    any size. The GUI was made in the Python library Tkinter.</p>
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