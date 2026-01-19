import React, { useState, useEffect } from "react";
import styles from "./Sidebar.module.css";
import picofbryson from "../../assets/brysonflowerspic.png";
import githubimg from "../../assets/githublogo.png";
import gmailimg from "../../assets/Gmail_Logo.png";
import linkedinimg from "../../assets/linkedin.png";
import ThemeToggle from "../ThemeToggle/ThemeToggle";

const Sidebar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let current = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 150) {
          current = section.getAttribute("id") || "";
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className={styles.sidebar}>
      <div className={styles.profileSection}>
        <h1 className={styles.sidebartitle}>Bryson Flowers</h1>
        <img
          className={styles.picprofileimg}
          src={picofbryson}
          alt="Bryson Flowers"
        />
      </div>

      <nav className={styles.navLinks}>
        <a
          href="#about"
          className={activeSection === "about" ? styles.active : ""}
        >
          About Me
        </a>
        <a
          href="#experience"
          className={activeSection === "experience" ? styles.active : ""}
        >
          Technical Training
        </a>
        <a
          href="#education"
          className={activeSection === "education" ? styles.active : ""}
        >
          Education
        </a>
        <a
          href="#skills"
          className={activeSection === "skills" ? styles.active : ""}
        >
          Skills
        </a>
        <a
          href="#projects"
          className={activeSection === "projects" ? styles.active : ""}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeSection === "contact" ? styles.active : ""}
        >
          Contact
        </a>
      </nav>

      <div className={styles.footerSpacer}>
        <ThemeToggle />
      </div>

      <div className={styles.sidebarFooterContainer}>
        <h2 className={styles.contactTitle}>Contacts</h2>
        <div className={styles.iconsRow}>
          <a
            className={styles.contactIcon}
            href="https://github.com/Brysonflowers"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img src={githubimg} alt="GitHub" width="30" height="30" />
          </a>
          <a
            className={styles.contactIcon}
            href="mailto:bryson.l.flowers@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Gmail"
          >
            <img src={gmailimg} alt="Gmail" width="30" height="30" />
          </a>
          <a
            className={styles.contactIcon}
            href="https://www.linkedin.com/in/bryson-flowers-888a8032a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img src={linkedinimg} alt="LinkedIn" width="30" height="30" />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
