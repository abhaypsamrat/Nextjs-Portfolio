import styles from "../styles/footer.module.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.copyright}>
            © {currentYear} Abhay Pratap Samrat. All rights reserved.
          </p>
          {/* <p className={styles.madeWith}>
            Made with <span className={styles.heart}>❤️</span> using Next.js
          </p> */}
        </div>
      </div>
    </footer>
  );
}
