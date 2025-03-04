import styles from '../styles/Footer.module.css';

export default function Footer({ text }) {
    return (
        <div className={styles.footer}>
            <p>{text}</p>
        </div>
    );
}
