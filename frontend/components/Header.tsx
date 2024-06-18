import styles from '../styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Dialogia AI</h1>
      <p className={styles.description}>Learn languages through engaging dialogues and context</p>
    </header>
  );
};

export default Header;