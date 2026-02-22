import styles from "../styles/skill.module.css";
import { FaReact, FaNode, FaPython, FaGitSquare } from "react-icons/fa";
import { DiJavascript1, DiCss3 } from "react-icons/di";
import { AiOutlineHtml5, AiOutlineGithub } from "react-icons/ai";
import { SiExpress, SiMongodb, SiPostman } from "react-icons/si";

const skills = [
  { icon: FaReact, name: "React Native", color: "#61dbfb" },
  { icon: FaReact, name: "ReactJs", color: "#61dbfb" },
  { icon: FaNode, name: "NodeJs", color: "#3c873a" },
  { icon: SiExpress, name: "ExpressJs", color: "#000000" },
  { icon: SiMongodb, name: "MongoDB", color: "#589636" },
  { icon: DiJavascript1, name: "JavaScript", color: "#f0db4f" },
  { icon: AiOutlineHtml5, name: "HTML", color: "#e34c26" },
  { icon: DiCss3, name: "CSS", color: "#264de4" },
  { icon: FaPython, name: "Python", color: "#ffd43b" },
  { icon: SiPostman, name: "Postman", color: "#ef5b25" },
  { icon: AiOutlineGithub, name: "Github", color: "#000000" },
  { icon: FaGitSquare, name: "Git", color: "#f1502f" },
];

function Skill() {
  return (
    <section id="skills" className={styles.skill}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Skills & Technologies</h2>
        <p className={styles.subtitle}>
          Technologies I work with to bring ideas to life
        </p>
        
        <div className={styles.skillsGrid}>
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className={styles.skillCard}
                style={{ '--skill-color': skill.color }}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <span className={styles.skillName}>{skill.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skill;
