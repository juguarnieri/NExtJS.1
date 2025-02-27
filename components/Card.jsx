import styles from "../styles/Card.module.css";

export default function Card({ title, content }) {
    return (
        <div className={styles.card}>
            <h1 className={styles.cardTitle}>{title}</h1>
            <p>{content}</p>
        </div>
    );
}