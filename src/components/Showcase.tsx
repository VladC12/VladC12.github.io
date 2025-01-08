import styles from "./Showcase.module.css";
import ContentShowcase from "./showcases/ContentShowcase";
import ShowcaseCard from "./showcases/ShowcaseCard";
import TextShowcase from "./showcases/TextShowcase";

import { useEffect, useState, useCallback } from "react";

interface Props {
    showcase: string;
}

interface Project {
    imgSrc: string;
    text: string;
  }
  
interface ProjectData {
[key: string]: Project[];
}

const projectData: ProjectData = {
    cradle: [
      { imgSrc: "./Cradle1.png", text: "Based on the configuration from Caster run inference on multiple RTSP streams and send metadata and events to an endpoint or just display it." }
    ],
    quartermaster: [
      { imgSrc: "./Quartermaster1.png", text: "Organise and review large datasets. Create archives for quick dataset creation for specific needs." },
      { imgSrc: "./Quartermaster2.png", text: "Preview text, images, videos and 3D models. Review upload and download history!" }
    ],
    caster: [
      { imgSrc: "./Caster1.png", text: "Add or remove streams and export the configuration file." },
      { imgSrc: "./Caster2.png", text: "Create ROIs for AI model to utilise." },
      { imgSrc: "./Caster3.png", text: "Associate points on stream to a planogram for heatmap visualisation!" }
    ],
    'event-manager': [
      { imgSrc: "./EventManager1.png", text: "Visualise all the fraud attempts, review them and create reports." }
    ],
    'event-watcher': [
      { imgSrc: "./EventWatcher1.png", text: "Live notifications of fraud attempts or other events which can be customised." },
      { imgSrc: "./EventWatcher2.png", text: "View a 5 seconds video snippet of the event for review." }
    ],
    continental: [
      { imgSrc: "./Conti1.jpeg", text: "I got to use their in-house drive units, wire it to an Arduino and controll with a bike hanlde." }
    ],
    'innovation-labs': [
      { imgSrc: "./Inno1.png", text: "The first hackaton I participated in and we got to the semi-finals and got an internship too." }
    ],
    thesis: [
      { imgSrc: "./Thesis1.png", text: "The website made to showcase the trained AI model." },
      { imgSrc: "./Thesis2.png", text: "Results from the first attempt to train the LJSpeech model." }
    ],
    modbus: [
      { imgSrc: "./Modbus1.png", text: "The website which would visualise the recieved data from the modbus. There was also history of each document." }
    ],
    'edge-detection': [
      { imgSrc: "./PNI1.png", text: "A simple university project with a rudimentary GUI." }
    ]
  };

const Showcase: React.FC<Props> = ({ showcase }) => {
    const WelcomeShowcase = (
        <TextShowcase>
            Welcome! <br />Hover over a project to see more details.
        </TextShowcase>)

    const [displayValue, setDisplayValue] = useState<React.ReactNode>(WelcomeShowcase);
    const [previousShowcase, setPreviousShowcase] = useState("");
    const [animation, setAnimation] = useState("");

    const ProjectShowcase = (showcase: string, children: any) => {
        setPreviousShowcase(showcase);
        return (
            <ContentShowcase>
                {children}
            </ContentShowcase>
        )
    }

    const displayShowcase = useCallback((showcase: string) => {
        if (projectData[showcase]) {
          return ProjectShowcase(showcase, <ShowcaseCard childrenItems={projectData[showcase]} />);
        }
        return WelcomeShowcase;
      }, [ProjectShowcase, WelcomeShowcase]);

    useEffect(() => {
        if (showcase == "left") {
            // When leaving a project card start leaving animation
            // After 10s, animate the default showcase in
            const timer = setTimeout(() => {
                setAnimation(styles.comeOut);
                const innerTimer = setTimeout(() => {
                    setDisplayValue(WelcomeShowcase);
                    setPreviousShowcase("left")
                    setAnimation(styles.comeIn);
                }, 500)
                return () => {
                    clearTimeout(innerTimer);
                }
            }, 15000);

            return () => {
                clearTimeout(timer);
            }

        } else if (showcase != "landing" && showcase != "showcase" && showcase != previousShowcase) {
            // When entering a project card start leaving animation for the previous showcase
            // After 400ms, animate the new showcase in
            // If the showcase is the same as the previous one
            // Or if it's the initial page state, do nothing
            setAnimation(styles.comeOut);
            const timer = setTimeout(() => {
                setAnimation(styles.comeIn);
                setDisplayValue(displayShowcase(showcase));
            }, 400);

            return () => {
                // Ensure even if animation does not finish, the showcase is displayed
                clearTimeout(timer);
                setAnimation(styles.comeIn);
                setDisplayValue(displayShowcase(showcase));
            }

        } else if (showcase == "showcase") {
            console.log(previousShowcase)
            setDisplayValue(displayShowcase(previousShowcase));
        }
        else {
            setDisplayValue(displayShowcase(showcase));
        }
    }, [showcase]);

    return (
        <div className={`${styles.container} ${animation}`}>{displayValue}</div>
    )
}

export default Showcase
