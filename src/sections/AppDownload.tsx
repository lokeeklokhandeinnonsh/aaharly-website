import React from 'react';
import styles from './AppDownload.module.css';

const AppDownload: React.FC = () => {
    return (
        <section id="download" className={styles.section}>
            <div className={styles.container}>
                <div className={styles.imageWrapper}>
                    <img src="/images/mobile.svg" alt="Aaharly App on Phone" className={styles.phoneImage} />
                </div>
                <div className={styles.content}>
                    <h2 className={styles.title}>Eat right. Stay consistent.</h2>
                    <div className={styles.bottomRow}>
                        <p className={styles.text}>
                            Download the Aaharly app and build healthy eating habits that last.
                        </p>
                        <div className={styles.badges}>
                            <img src="/images/appstore.svg" alt="Download on App Store" className={styles.badge} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AppDownload;
