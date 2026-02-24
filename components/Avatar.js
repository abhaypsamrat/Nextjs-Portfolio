import Link from "next/link";
import styles from "../styles/avatar.module.css";

function Avatar() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <div className={styles.imageContainer}>
              <img
                src="/assets/mylatestpic.jpeg"
                alt="Abhay Pratap Samrat"
                className={styles.avatarImage}
              />
              <div className={styles.imageGlow}></div>
            </div>
          </div>
          
          <div className={styles.textContent}>
            <h1 className={styles.greeting}>
              Hi! <span className={styles.wave}>👋</span> I&apos;m
            </h1>
            <h1 className={styles.name}>
              Abhay Pratap Samrat
            </h1>
            <p className={styles.title}>
              React Native Developer | JavaScript Specialist
            </p>
            <p className={styles.description}>
              Building scalable mobile apps and modern web platforms with React ecosystem. 
              Passionate about performance, clean code, and digital storytelling.
            </p>
            <div className={styles.ctaButtons}>
              <a href="#about" className={styles.primaryButton}>
                Learn More
              </a>
              <Link href="/contact" className={styles.secondaryButton}>
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
        
        <div className={styles.scrollIndicator}>
          <span>Scroll Down</span>
          <div className={styles.mouse}>
            <div className={styles.wheel}></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Avatar;
