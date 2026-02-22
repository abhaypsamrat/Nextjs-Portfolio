import styles from "../styles/about.module.css";

function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>About Me</h2>
        
        <div className={styles.content}>
          <div className={styles.textContent}>
            <p className={styles.intro}>
              I&apos;m Abhay Pratap Samrat, a React Native Developer and Frontend Engineer 
              with a strong foundation in modern JavaScript ecosystems. With a B.Tech in 
              Computer Science and hands-on industry experience, I specialize in building 
              scalable mobile and web applications that focus on performance, clean 
              architecture, and seamless user experience.
            </p>
            
            <p className={styles.description}>
              I have professional experience working with React Native, React.js, JavaScript (ES6+), 
              Next.js, Node.js, Express, and MongoDB, along with API integration, authentication 
              flows, notification handling, and state management. I enjoy solving real-world problems 
              through clean architecture, optimized performance, and thoughtful user experience.
            </p>
            
            <p className={styles.description}>
              My development approach emphasizes scalable component architecture, API-driven development, 
              state management & async handling, testing with Jest, CI/CD integration, and performance 
              optimization. I&apos;m passionate about writing maintainable code, implementing best practices, 
              and continuously improving through real-world project deployments.
            </p>
            
            <p className={styles.description}>
              Beyond development, I&apos;m also a digital creator under the name &quot;Kashi Ka Beta&quot;, 
              where I merge technology and culture — showcasing Banaras through digital storytelling. 
              I believe in building products that are not just functional, but meaningful.
            </p>
          </div>

          <div className={styles.educationCard}>
            <div className={styles.cardIcon}>🎓</div>
            <h3 className={styles.cardTitle}>Education</h3>
            <div className={styles.educationContent}>
              <h4 className={styles.degree}>
                Bachelor of Technology
              </h4>
              <p className={styles.field}>
                Computer Science & Engineering
              </p>
              <p className={styles.institution}>
                Kashi Institute of Technology, Varanasi
              </p>
              <p className={styles.duration}>
                2019 - 2023
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
