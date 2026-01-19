import React from 'react';
import Section from '../../Section/Section';
import styles from './About.module.css';

const About: React.FC = () => {
    return (
        <Section id="about" className={styles.heroSection}>
            <div className={styles.container}>
                <div className={`${styles.textColumn} fade-in`}>

                    <p className={styles.heroText}>
                        I'm <strong>Bryson Flowers</strong>, a Software Engineer passionate about
                        solving complex problems across the stack. From low-level systems programming
                        in Rust and C to building robust, user-centric web applications, I deliver
                        solutions that matter.
                    </p>
                    <div className={styles.ctaContainer}>
                        <a href="#projects" className={styles.primaryBtn}>View Work</a>
                        <a href="#contact" className={styles.secondaryBtn}>Let's Talk</a>
                    </div>
                </div>

                <div className={`${styles.visualColumn} fade-in`}>
                    <div className={styles.codeWindow}>
                        <div className={styles.windowHeader}>
                            <div className={styles.headerDot} style={{ background: '#ff5f56' }}></div>
                            <div className={styles.headerDot} style={{ background: '#ffbd2e' }}></div>
                            <div className={styles.headerDot} style={{ background: '#27c93f' }}></div>
                            <span className={styles.fileName}>developer.rs</span>
                        </div>
                        <div className={styles.codeContent}>
                            <div className={styles.codeLine}>
                                <span className={styles.keyword}>struct</span> <span className={styles.type}>Engineer</span> {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;name: <span className={styles.string}>"Bryson"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;core: <span className={styles.string}>"Rust & Typescript"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;mission: <span className={styles.string}>"Build Scalable Systems"</span>,
                            </div>
                            <div className={styles.codeLine}>
                                {'}'}
                            </div>
                            <div className={styles.codeLine}>
                                <span className={styles.keyword}>impl</span> <span className={styles.type}>Engineer</span> {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;<span className={styles.keyword}>fn</span> <span className={styles.function}>solve_hard_problems</span>() {'{'}
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.comment}>// TODO: Deploy to production</span>
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.macro}>println!</span>(<span className={styles.string}>"Hello World!"</span>);
                            </div>
                            <div className={styles.codeLine}>
                                &nbsp;&nbsp;{'}'}
                            </div>
                            <div className={styles.codeLine}>
                                {'}'} <span className={styles.cursor}>|</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.backgroundMesh}></div>
        </Section>
    );
};

export default About;
