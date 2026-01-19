import React from "react";
import ThemeToggle from "../ThemeToggle/ThemeToggle";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <header className={styles.header} role="banner">
      <nav className={styles.nav}>
        <div className={styles.logo}>Bryson Portfolio</div>
        <ul className={styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
};

export default Header;
