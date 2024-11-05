import styles from './Hero.module.css';
import avatarImage from '@assets/images/hero/avatar.jpg';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1>Привет 👋,</h1>
        <h2>Меня зовут</h2>
        <h2 className={styles.name}>Евгений Маркин</h2>
        <p>Я фронтенд-разработчик</p>
      </div>
      <div className={styles.image}>
        <img src={avatarImage} alt="Profile" className={styles.avatar} />
      </div>
    </section>
  );
};

export default Hero;
