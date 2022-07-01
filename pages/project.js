import Header from "../component/Header";
import styles from "../styles/project.module.css";
import Link from "next/link";

export default function project() {
  return (
    <div>
      <Header />

      <div className={styles.project}>
        <h2>My Project</h2>
        <div className={styles.plist}>
          {/* 1 project */}
          <div className={styles.list}>
            <h3>Check Live Weather</h3>
            <p>
              This application keep updated you on weather. Search your city
              name and see live weather on your city. It work as progressive web
              appication (PWA) .
            </p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://live-weather-search.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>

            <a
              href="https://github.com/abhaypsamrat/Live-Weather-App"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>
          {/* 2 project */}
          <div className={styles.list}>
            <h3>Keep Notes</h3>
            <p>
              This application keep save your item on list. It work as
              progressive web appication (PWA) .
            </p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://keep-item.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>

            <a
              href="https://github.com/abhaypsamrat/Keep-Item"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>

          {/* 3 project */}

          <div className={styles.list}>
            <h3>Text/Sentence Counter</h3>
            <p>
              This appication is used to convert uppercase and lowercase of any
              text or sentence. Appication count number of characters and number
              of words in your sentence.
            </p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>Bootstrap</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://word-converter.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>
            <a
              href="https://github.com/abhaypsamrat/Text-Counter"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>
          {/* 4 project */}
          <div className={styles.list}>
            <h3>Coding Blog</h3>
            <p>This appication is a tech blog side.</p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://hungry-coder.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>
            <a
              href="https://github.com/abhaypsamrat/Hungry-Coder"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>

          {/* 5 project */}

          <div className={styles.list}>
            <h3>Choose Movies</h3>
            <p>
              This application suggest some best movies available on OTT
              plateform.
            </p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>JavaScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://choosemovies.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>
            <a
              href="https://github.com/abhaypsamrat/Choose-Movie"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>

          {/* 6 project */}

          <div className={styles.list}>
            <h3>Notes On Cloud</h3>
            <p>
              This application save your notes on cloud. Before use this
              applicaton you can Login/Signup with Email id & password and save
              your Notes.
            </p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>ReactJs</li>
                <li>NodeJs</li>
                <li>ExpressJs</li>
                <li>MongoDB</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a passHref target="_blank" rel="noreferrer">
              <button>View Live</button>
            </a>
            <a
              href="https://github.com/abhaypsamrat/NotesOnCloud"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>

          {/* 7 project */}

          <div className={styles.list}>
            <h3>ToDo Application</h3>
            <p>This is a simple Todo application.</p>
            <h5>Technologies Used</h5>
            <i>
              <ul>
                <li>TypeScript</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
            </i>
            <a
              href="https://fastest-todo.netlify.app/"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>View Live</button>
            </a>
            <a
              href="https://github.com/abhaypsamrat/ToDo-React-TypeScript"
              passHref
              target="_blank"
              rel="noreferrer"
            >
              <button>Source Code</button>
            </a>
          </div>
        </div>
      </div>
      <span className={styles.gohome}>
        <Link href="/" passHref>
          <button>Back to home</button>
        </Link>
      </span>
    </div>
  );
}
