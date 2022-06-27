import styles from "../styles/about.module.css";

function About() {
  return (
    <div className={styles.about}>
      <h3>About</h3>
      <p>
        My name is Abhay Pratap Samrat. I am final year computer science student
        attending Kashi Institute Of Technology, Varanasi. <br />
        <br />
        I love working in web development and i want to become a skilled web
        developer. I like to learn new technologies. I am interested in populer
        frontend technologies.
        <br />
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
