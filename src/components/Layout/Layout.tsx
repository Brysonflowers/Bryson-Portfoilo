import React from "react";
import Footer from "../Footer/Footer";
import Sidebar from "../Sidebar/Sidebar";
import styles from "./Layout.module.css";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      {/* Header removed as per new design, Sidebar handles navigation */}
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.mainContent}>
          {children}
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default Layout;
