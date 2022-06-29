import styles from "../styles/connect.module.css";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";

function Connect() {
  return (
    <div className={styles.connect}>
      <h3>Connect with me</h3>

      <div className={styles.icon}>
        <a
          href="https://www.linkedin.com/in/abhaypsamrat"
          target="blank"
          className={styles.linkedin}
        >
          <AiFillLinkedin />
        </a>
        <a
          href="https://github.com/abhaypsamrat"
          target="blank"
          className={styles.github}
        >
          <AiFillGithub />
        </a>
        <a
          href="https://twitter.com/abhaypsamrat"
          target="blank"
          className={styles.twitter}
        >
          <AiFillTwitterCircle />
        </a>
        <a
          href="https://instagram.com/abhaypsamrat"
          target="blank"
          className={styles.instagram}
        >
          <AiOutlineInstagram />
        </a>
      </div>
    </div>
  );
}

export default Connect;
