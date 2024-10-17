import styles from "./ContentShowcase.module.css";

interface Props {
    children?: React.ReactNode;
}

const ContentShowcase: React.FC<Props> = ({children}) => {
  return (
    <div className={styles.container}>{children}</div>
  )
}

export default ContentShowcase