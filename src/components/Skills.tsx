import styles from "./Skills.module.css"

const Skills = () => {
    return (
        <div className={styles.container}>
            <div>
                <img src="/react-logo.svg" alt="React" />
                <span>React</span>
            </div>
            <div>
                <img src="/ts-logo.svg" alt="React" />
                <span>Typescript</span>
            </div>
            <div>
                <img src="/nextjs-logo.svg" alt="React" />
                <span>NextJS</span>
            </div>
            <div>
                <img src="/nodejs-logo.svg" alt="React" />
                <span>NodeJS</span>
            </div>
            <div>
                <img src="/python-logo.svg" alt="React" />
                <span>Python</span>
            </div>
        </div>
    )
}

export default Skills