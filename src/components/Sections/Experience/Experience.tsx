import React from 'react';
import Section from '../../Section/Section';
import styles from './Experience.module.css';

const Experience: React.FC = () => {
    return (
        <Section id="experience" title="Work Experience">
            <div className={styles.timelineContainer}>
                {/* Timeline Item 1 */}
                <div className={styles.timelineItem}>
                    <div className={styles.timelineMarker}></div>
                    <div className={styles.timelineContent}>
                        <div className="card">
                            <div className={styles.headerRow}>
                                <div>
                                    <h3 className={styles.roleTitle}>Engineer Intern</h3>
                                    <h4 className={styles.companyName}>Milwaukee Tool</h4>
                                </div>
                                <span className={styles.dateTag}>Feb 2025 - June 2025</span>
                            </div>
                            <p className={styles.location}>Grenada, MS</p>
                            <ul className={styles.responsibilities}>
                                <li>Assisted in quality assurance processes to aim for zero defects.</li>
                                <li>Contributed to inventory management and process optimization.</li>
                                <li>Collaborated with cross-functional teams to streamline production flows.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Experience;
