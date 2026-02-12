import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../sections/Footer';
import ContactForm from '../components/ContactForm';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Contact Us – Aaharly';
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="app-container">
            <div className={styles.container}>
                <header className={styles.header}>
                    <img
                        src="/images/logo.svg"
                        alt="Aaharly Logo"
                        className={styles.logo}
                        onClick={() => navigate('/')}
                    />
                    <h1 className={styles.pageTitle}>Get in Touch</h1>
                    <p className={styles.subTitle}>
                        We’re here to help you with your meals, subscriptions, and support queries.
                    </p>
                </header>

                <div className={styles.card}>
                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Phone</span>
                        <span className={styles.infoValue}>+91 93709 85927</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Email</span>
                        <span className={styles.infoValue}>contact@aaharly.com</span>
                    </div>

                    <div className={styles.infoItem}>
                        <span className={styles.infoLabel}>Address</span>
                        <p className={styles.infoValue} style={{ maxWidth: '300px', margin: '0 auto' }}>
                            3rd Floor, One Mall, Aundh-Ravet BRTS Rd,
                            Above Reliance Smart, Near Ramkrishna Pure Veg Hotel,
                            Ravet, Pune, Pimpri-Chinchwad, Maharashtra 412101
                        </p>
                    </div>

                    <button
                        className={styles.whatsappButton}
                        onClick={() => window.open('https://wa.me/919370985927?text=Hi,%20I%20have%20a%20query%20regarding%20Aaharly', '_blank')}
                    >
                        Chat on WhatsApp
                    </button>
                </div>

                <div className={styles.formSection}>
                    <h2 className={styles.formTitle}>Send us a Message</h2>
                    <ContactForm />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;
