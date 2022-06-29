import styles from "../styles/skill.module.css";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";
import { AiOutlineHtml5 } from "react-icons/ai";
import { DiCss3 } from "react-icons/di";
import { FaPython } from "react-icons/fa";
import { AiOutlineGithub } from "react-icons/ai";
import { FaGitSquare } from "react-icons/fa";
import { FaNode } from "react-icons/fa";

function Skill() {
  return (
    <div className={styles.skill}>
      <h3>Work With</h3>
      <div className={styles.icon}>
        <div className={styles.react}>
          <FaReact className={styles.reactlogo} />
          <i>ReactJs</i>
        </div>
        <div className={styles.node}>
          <FaNode className={styles.nodelogo} />
          <i>NodeJs</i>
        </div>

        <div className={styles.next}>
          <SiNextdotjs className={styles.nextlogo} />
          <i>NextJs</i>
        </div>
        <div className={styles.js}>
          <DiJavascript1 className={styles.jslogo} />
          <i>JavaScript</i>
        </div>
        <div className={styles.html}>
          <AiOutlineHtml5 className={styles.htmllogo} />
          <i>HTML</i>
        </div>
        <div className={styles.css}>
          <DiCss3 className={styles.csslogo} />
          <i>CSS</i>
        </div>
        <div className={styles.python}>
          <FaPython className={styles.pythonlogo} />
          <i>Python</i>
        </div>
        <div className={styles.github}>
          <AiOutlineGithub className={styles.githublogo} />
          <i>Github</i>
        </div>
        <div className={styles.git}>
          <FaGitSquare className={styles.gitlogo} />
          <i>Git</i>
        </div>
      </div>
    </div>
  );
}
export default Skill;
