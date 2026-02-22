import styles from "../styles/work.module.css";
import { useRouter } from "next/router";
import { FiArrowRight } from "react-icons/fi";

function Work() {
  const router = useRouter();
  
  return (
    <section className={styles.work}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>My Work</h2>
        <p className={styles.description}>
          I specialize in building scalable mobile applications with React Native and 
          modern web platforms using React.js, Next.js, and JavaScript. I love creating 
          innovative solutions that combine performance, clean architecture, and seamless 
          user experience.
        </p>
        <div className={styles.buttonWrapper}>
          <button 
            className={styles.viewWorkButton}
            onClick={() => router.push("/project")}
          >
            View All Projects
            <FiArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Work;
