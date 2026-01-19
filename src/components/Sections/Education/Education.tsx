import React from 'react';
import Section from '../../Section/Section';
import styles from './Education.module.css';

const Education: React.FC = () => {
    return (
        <Section id="education" title="Education">
            <div className={styles.gridContainer}>
                {/* Education Card 1 */}
                <div className={`card ${styles.educationCard}`}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.degree}>Associate of Applied Science</h3>
                            <h4 className={styles.school}>Northwest Mississippi Community College</h4>
                        </div>
                        <span className={styles.dateTag}>Expected May 2026</span>
                    </div>
                    <p className={styles.major}>Coding Technology</p>
                </div>

                {/* Education Card 2 */}
                <div className={`card ${styles.educationCard}`}>
                    <div className={styles.cardHeader}>
                        <div>
                            <h3 className={styles.degree}>Full-Stack Software Development</h3>
                            <h4 className={styles.school}>Base Camp Coding Academy</h4>
                        </div>
                        <span className={styles.dateTag}>Certificate</span>
                    </div>
                    <p className={styles.major}>Intensive 11-month professional training program</p>
                </div>
            </div>
        </Section>
    );
};

export default Education;
