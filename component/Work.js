import styles from "../styles/work.module.css";
import { useRouter } from "next/router";

function Work() {
  const router = useRouter();
  return (
    <div className={styles.work}>
      <h3>My Work</h3>
      <p>
        I love to build and develop new applications. The best means to become
        better at programming is by developing applications that translate
        theory into something live and working. In addition, this practice also
        adds to confidence, enhances code quality, and encourages documenting
        your journey.
      </p>
      <button onClick={() => router.push("/project")}>view work</button>
    </div>
  );
}
export default Work;
