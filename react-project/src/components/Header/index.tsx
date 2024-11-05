import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <span>{'{007}'}</span>
      </div>
      <nav className={styles.nav}>
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#tech-stack">Технологический стек</a>
        <a href="#projects">Проекты</a>
      </nav>
      <div className={styles.socials}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="github icon" />
        </a>
      </div>
    </header>
  );
};

export default Header;