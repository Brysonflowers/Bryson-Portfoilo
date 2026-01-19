import React from "react";
import styles from "./Footer.module.css";
import githubimg from "../../assets/githublogo.png";
import gmailimg from "../../assets/Gmail_Logo.png";
import linkedinimg from "../../assets/linkedin.png";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.socials}>
          <a href="https://github.com/Brysonflowers" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <img src={githubimg} alt="GitHub" className={styles.icon} />
          </a>
          <a href="mailto:bryson.l.flowers@gmail.com" aria-label="Email">
            <img src={gmailimg} alt="Email" className={styles.icon} />
          </a>
          <a href="https://www.linkedin.com/in/bryson-flowers-888a8032a" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <img src={linkedinimg} alt="LinkedIn" className={styles.icon} />
          </a>
        </div>
        <p className={styles.copyright}>
          &copy; {currentYear} Bryson Flowers. All rights reserved. <br />
          <span className={styles.tagline}>Built with React, TypeScript & Passion.</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
