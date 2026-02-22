import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/project.module.css";
import Link from "next/link";
import { FiExternalLink, FiGithub, FiArrowLeft } from "react-icons/fi";

const projects = [
  {
    title: "Quiz Application",
    description: "Quiz Application is a collection of different types of quizzes like technical, games, sports, etc. A user can access/play all of the quiz and can attempt any of the one. It works as progressive web application (PWA).",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://quiz-application-live.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Quiz-Application"
  },
  {
    title: "Check Live Weather",
    description: "This application keeps you updated on weather. Search your city name and see live weather on your city. It works as progressive web application (PWA).",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://live-weather-search.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Live-Weather-App"
  },
  {
    title: "Keep Notes",
    description: "This application keeps save your item on list. It works as progressive web application (PWA).",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://keep-item.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Keep-Item"
  },
  {
    title: "Text/Sentence Counter",
    description: "This application is used to convert uppercase and lowercase of any text or sentence. Application count number of characters and number of words in your sentence.",
    technologies: ["ReactJs", "JavaScript", "Bootstrap", "HTML", "CSS"],
    liveUrl: "https://word-converter.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Text-Counter"
  },
  {
    title: "Coding Blog",
    description: "This application is a tech blog site.",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://hungry-coder.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Hungry-Coder"
  },
  {
    title: "Choose Movies",
    description: "This application suggests some best movies available on OTT platform.",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://choosemovies.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Choose-Movie"
  },
  {
    title: "Notes On Cloud",
    description: "This application saves your notes on cloud. Before use this application you can Login/Signup with Email id & password and save your Notes.",
    technologies: ["ReactJs", "NodeJs", "ExpressJs", "MongoDB", "HTML", "CSS"],
    liveUrl: null,
    githubUrl: "https://github.com/abhaypsamrat/NotesOnCloud"
  },
  {
    title: "ToDo Application",
    description: "This is a simple Todo application.",
    technologies: ["TypeScript", "HTML", "CSS"],
    liveUrl: "https://fastest-todo.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/ToDo-React-TypeScript"
  },
  {
    title: "Quote Generator",
    description: "A Random Quote Generator is capable of pulling quotes randomly from an API.",
    technologies: ["ReactJs", "JavaScript", "HTML", "CSS"],
    liveUrl: "https://random-thougth.netlify.app/",
    githubUrl: "https://github.com/abhaypsamrat/Quotes-Generator"
  }
];

export default function Project() {
  return (
    <div>
      <Head>
        <title>Projects - Abhay Pratap Samrat</title>
        <meta name='description' content='View my portfolio projects' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Header />
      
      <main className={styles.project}>
        <div className={styles.container}>
          <div className={styles.header}>
            <Link href="/" className={styles.backButton}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FiArrowLeft className={styles.backIcon} />
                Back to Home
              </span>
            </Link>
            <h1 className={styles.title}>My Projects</h1>
            <p className={styles.subtitle}>
              A collection of projects I&apos;ve worked on
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project, index) => (
              <div key={index} className={styles.projectCard}>
                <div className={styles.cardHeader}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                </div>
                
                <p className={styles.projectDescription}>{project.description}</p>
                
                <div className={styles.technologies}>
                  <h4 className={styles.techTitle}>Technologies Used:</h4>
                  <div className={styles.techTags}>
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className={styles.projectLinks}>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkButton}
                    >
                      <FiExternalLink className={styles.linkIcon} />
                      View Live
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkButton} ${styles.githubButton}`}
                  >
                    <FiGithub className={styles.linkIcon} />
                    Source Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
