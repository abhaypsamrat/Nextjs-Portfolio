import styles from "../styles/work.module.css";
import { useRouter } from "next/router";

function Work() {
  const router = useRouter();
  return (
    <div className={styles.work}>
      <h3>My Work</h3>
      <p>
        Currently, I am working on web development skills using JavaScript,
        ReactJs, NodeJs, ExpressJs and MongoDB.
      </p>
      <button onClick={() => router.push("/project")}>view work</button>
    </div>
  );
}
export default Work;
