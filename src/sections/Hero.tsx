import React from 'react';
import styles from './Hero.module.css';
import Button from '../components/Button';

const Hero: React.FC = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.contentWrapper}>
                <div className={styles.logo}>
                    <img src="/images/logo.svg" alt="Logo" />
                </div>

                <h1 className={styles.title}>
                    Smart, Consistent Nutrition
                </h1>
                <p className={styles.subtitle}>
                    Healthy, goal based meals designed for<br />fitness focused lifestyles.
                </p>

                <div className={styles.ctaGroup}>
                    <Button onClick={() => document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' })}>
                        Get the App
                    </Button>
                    <Button variant="secondary" onClick={() => window.location.href = 'mailto:contact@aaharly.com'}>
                        Contact Us
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
