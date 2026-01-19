import React from 'react';
import Section from '../../Section/Section';
import styles from './Projects.module.css';

const Projects: React.FC = () => {
    return (
        <Section id="projects" title="Projects">
            <div className={styles.projectGrid}>
                {/* Project 1: Echo-Chat */}
                <div className={`card ${styles.projectCard}`}>
                    <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #667eea, #764ba2)' }}>
                        <span>Real-time Chat</span>
                    </div>
                    <div className={styles.projectContent}>
                        <h3 className={styles.projectTitle}>Echo-Chat</h3>
                        <p className={styles.projectDesc}>
                            A real-time chat application engineered for seamless communication.
                            Features instant messaging, user authentication, and responsive design.
                        </p>
                        <div className={styles.techStack}>
                            <span>React</span>
                            <span>Node.js</span>
                            <span>WebSocket</span>
                        </div>
                        <div className={styles.links}>
                            <a href="https://github.com/Brysonflowers/Echo-Chat" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>View Code</a>
                        </div>
                    </div>
                </div>

                {/* Project 2: Portfolio */}
                <div className={`card ${styles.projectCard}`}>
                    <div className={styles.imagePlaceholder} style={{ background: 'linear-gradient(135deg, #1e3c72, #2a5298)' }}>
                        <span>This Portfolio</span>
                    </div>
                    <div className={styles.projectContent}>
                        <h3 className={styles.projectTitle}>Bryson Portfolio</h3>
                        <p className={styles.projectDesc}>
                            A high-performance, aesthetically pleasing portfolio website.
                            Built to showcase engineering skills with a focus on modern UI/UX principles.
                        </p>
                        <div className={styles.techStack}>
                            <span>React</span>
                            <span>TypeScript</span>
                            <span>Vite</span>
                            <span>CSS Modules</span>
                        </div>
                        <div className={styles.links}>
                            <a href="https://github.com/Brysonflowers/Bryson-Portfoilo" target="_blank" rel="noopener noreferrer" className={styles.linkBtn}>View Code</a>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Projects;
