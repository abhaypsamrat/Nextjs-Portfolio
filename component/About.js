import styles from "../styles/about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h3>About</h3>

      <p>
        Abhay Pratap Samrat, a passionate web developer with a B.TECH
        in Computer Science from Kashi Institute of Technology, Varanasi.
        <br /> His passion for web development has driven him to constantly seek
        new ways to improve his skills and knowledge. He is a self-motivated
        learner who is always eager to explore new technologies and create
        innovative solutions.
      </p>
      <p>
        Abhay has a keen interest in popular frontend technologies like React.
        He is experienced in ReactJs & JavaScript and also familiar with NodeJs,
        ExpressJs and MongoDb. His proficiency in these technologies allows him
        to create visually appealing and user-friendly web applications.
      </p>
      <p>
        He is always looking for new opportunities to learn and grow as a web
        developer. His strong drive to create innovative and visually appealing
        web applications makes him an ideal candidate for any web development
        role.
        <br /> He is excited to bring his skills and passion to a professional
        setting and is looking forward to new opportunities in the field.
      </p>
      <div className={styles.edu}>
        <h3>Education</h3>
        <b>Bachelor Of Technology In Computer Science & Engineering </b>
        <span>
          <br />
          <br />
          <i>
            Kashi Institute Of Technology, Varanasi <br />
            (2019-23)
          </i>
        </span>
      </div>
    </div>
  );
}

export default About;
