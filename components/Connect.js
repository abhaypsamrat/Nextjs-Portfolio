import styles from "../styles/connect.module.css";
import { AiFillLinkedin, AiFillGithub, AiFillTwitterCircle, AiOutlineInstagram } from "react-icons/ai";
import { FiMail } from "react-icons/fi";

const socialLinks = [
  {
    icon: AiFillLinkedin,
    href: "https://www.linkedin.com/in/abhaypsamrat",
    label: "LinkedIn",
    color: "#0a66c2"
  },
  {
    icon: AiFillGithub,
    href: "https://github.com/abhaypsamrat",
    label: "GitHub",
    color: "#000000"
  },
  {
    icon: AiFillTwitterCircle,
    href: "https://twitter.com/abhaypsamrat",
    label: "Twitter",
    color: "#00acee"
  },
  {
    icon: AiOutlineInstagram,
    href: "https://instagram.com/abhaypsamrat",
    label: "Instagram",
    color: "#e4405f"
  },
  {
    icon: FiMail,
    href: "mailto:your-email@example.com",
    label: "Email",
    color: "#ea4335"
  }
];

function Connect() {
  return (
    <section className={styles.connect}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Let&apos;s Connect</h2>
        <p className={styles.subtitle}>
          Feel free to reach out for collaborations or just a friendly hello
        </p>
        
        <div className={styles.socialLinks}>
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{ '--social-color': social.color }}
                aria-label={social.label}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent className={styles.icon} />
                </div>
                <span className={styles.label}>{social.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Connect;
