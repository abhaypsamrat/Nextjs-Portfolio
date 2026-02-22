import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import styles from "../styles/header.module.css";

export default function Header() {
  const router = useRouter();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    // If it's a hash link (section on same page)
    if (href.startsWith('#')) {
      // If we're on home page, just scroll
      if (router.pathname === '/') {
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            const headerOffset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            
            window.scrollTo({
              top: offsetPosition,
              behavior: 'smooth'
            });
          }
        }, 100);
      } else {
        // If we're on another page, navigate to home then scroll
        router.push('/').then(() => {
          setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
              const headerOffset = 80;
              const elementPosition = element.getBoundingClientRect().top;
              const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
              
              window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
              });
            }
          }, 300);
        });
      }
    } else {
      // Regular page navigation
      router.push(href).catch((err) => {
        console.error('Navigation error:', err);
      });
    }
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Abhay Pratap Samrat</span>
        </Link>
        
        <nav className={`${styles.nav} ${mobileMenuOpen ? styles.navOpen : ""}`}>
          <a 
            href="/" 
            className={styles.navLink} 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              router.push('/');
            }}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={styles.navLink} 
            onClick={(e) => handleNavClick(e, '#about')}
          >
            About
          </a>
          <a 
            href="#skills" 
            className={styles.navLink} 
            onClick={(e) => handleNavClick(e, '#skills')}
          >
            Skills
          </a>
          <a 
            href="/project" 
            className={styles.navLink} 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              router.push('/project');
            }}
          >
            Projects
          </a>
          <a 
            href="/contact" 
            className={styles.navLink} 
            onClick={(e) => {
              e.preventDefault();
              setMobileMenuOpen(false);
              router.push('/contact');
            }}
          >
            Contact
          </a>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={mobileMenuOpen ? styles.open : ""}></span>
          <span className={mobileMenuOpen ? styles.open : ""}></span>
          <span className={mobileMenuOpen ? styles.open : ""}></span>
        </button>
      </div>
    </header>
  );
}
