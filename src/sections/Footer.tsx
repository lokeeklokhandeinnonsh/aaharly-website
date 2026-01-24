import React from 'react';
import { Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    Aaharly
                </div>

                <div className={styles.builtIn}>
                    Built in India 🇮🇳
                </div>

                <div className={styles.contactColumn}>
                    <div className={styles.columnTitle}>Contact Us</div>
                    <a href="mailto:contact@aaharly.com" className={styles.link}>
                        contact@aaharly.com
                    </a>
                </div>

                <div className={styles.legalColumn}>
                    <div className={styles.columnTitle}>Legal</div>
                    <Link to="/privacy-policy" className={styles.link}>
                        Privacy Policy
                    </Link>
                    <Link to="/terms-and-conditions" className={styles.link}>
                      
                    </Link>
                    
                </div>

                <div className={styles.socialColumn}>
                    <div className={styles.columnTitle}>Social Links</div>
                    <div className={styles.socials}>
                        <a
                            href="https://www.instagram.com/aaharly?igsh=MW9oMGU5NnAza2VteA=="
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.socialIcon}
                        >
                            <Instagram size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
