import React, { useState } from 'react';
import Section from '../../Section/Section';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const [copied, setCopied] = useState(false);
    const email = "bryson.l.flowers@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <Section id="contact" title="Get In Touch">
            <div className={`card ${styles.contactContainer}`}>
                <div className={styles.contentWrapper}>
                    <p className={styles.introText}>
                        I'm always open to discussing new projects, creative ideas,
                        or opportunities to be part of your visions.
                    </p>

                    <div className={styles.emailCard}>
                        <span className={styles.emailLabel}>Email Me At</span>
                        <h3 className={styles.emailAddress}>{email}</h3>

                        <div className={styles.actionButtons}>
                            <a href={`mailto:${email}`} className={styles.primaryBtn}>
                                🚀 Send Email
                            </a>
                            <button onClick={handleCopy} className={styles.secondaryBtn}>
                                {copied ? "✅ Copied!" : "📋 Copy Address"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
