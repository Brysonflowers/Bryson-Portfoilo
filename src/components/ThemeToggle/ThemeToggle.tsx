import React from "react";
import { useTheme } from "../../context/ThemeContext";
import styles from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className={styles.toggle}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
      title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    >
      <span className={styles.icon}>{theme === "light" ? "🌙" : "☀️"}</span>
      <span className={styles.label}>{theme === "light" ? "Dark Mode" : "Light Mode"}</span>
    </button>
  );
};

export default ThemeToggle;
