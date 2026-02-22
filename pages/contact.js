import Head from 'next/head';
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/contact.module.css";
import { useState } from "react";
import { FiMail, FiPhone, FiMapPin, FiSend } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    }, 1500);
  };

  return (
    <div>
      <Head>
        <title>Contact - Abhay Pratap Samrat</title>
        <meta name='description' content='Get in touch with Abhay Pratap Samrat' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      
      <Header />
      
      <main className={styles.contact}>
        <div className={styles.container}>
          <h1 className={styles.title}>Get In Touch</h1>
          <p className={styles.subtitle}>
            Have a project in mind or want to collaborate? I&apos;d love to hear from you!
          </p>

          <div className={styles.content}>
            <div className={styles.infoSection}>
              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FiMail className={styles.icon} />
                </div>
                <h3>Email</h3>
                <a href="mailto:your-email@example.com" className={styles.infoLink}>
                  abhayrndev@gmail.com
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FiPhone className={styles.icon} />
                </div>
                <h3>Phone</h3>
                <a href="tel:+1234567890" className={styles.infoLink}>
                  +91 (000) 000-000
                </a>
              </div>

              <div className={styles.infoCard}>
                <div className={styles.iconWrapper}>
                  <FiMapPin className={styles.icon} />
                </div>
                <h3>Location</h3>
                <p className={styles.infoText}>Varanasi, India</p>
              </div>
            </div>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="Your Name"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="subject" className={styles.label}>Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className={styles.input}
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={styles.textarea}
                  placeholder="Your message here..."
                  rows="6"
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className={styles.successMessage}>
                  Thank you! Your message has been sent successfully.
                </div>
              )}

              <button
                type="submit"
                className={styles.submitButton}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  'Sending...'
                ) : (
                  <>
                    Send Message
                    <FiSend className={styles.sendIcon} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
