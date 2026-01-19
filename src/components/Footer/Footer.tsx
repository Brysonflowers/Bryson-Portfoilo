import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <p>&copy; {currentYear} Bryson. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
