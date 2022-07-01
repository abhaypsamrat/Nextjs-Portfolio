import Image from "next/image";
import styles from "../styles/avatar.module.css";

function Avatar() {
  return (
    <div className={styles.Avatar}>
      <Image src="/assets/mypic.jpeg" alt="me" width="220" height="220" />
      <br />
      <br />
      <h2>
        Hi ! <span className={styles.wave}>👋 </span> I&apos;m Abhay
      </h2>

      <p>
        A aspiring MERN stack developer passionate about developing new and
        useful application.
      </p>
    </div>
  );
}

export default Avatar;
