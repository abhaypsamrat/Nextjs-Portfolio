import Image from "next/image";
import styles from "../styles/avatar.module.css";

function Avatar() {
  return (
    <div className={styles.Avatar}>
      <Image src="/assets/mypic.jpeg" alt="me" width="220" height="220" />
      <h4>Hi ! I am Abhay</h4>
      <p>
        A Front End Developer passionate about developing new and useful
        application.
      </p>
    </div>
  );
}

export default Avatar;
