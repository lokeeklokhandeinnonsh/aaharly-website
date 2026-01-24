import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../sections/Footer';
import styles from './PrivacyPolicy.module.css';

const PrivacyPolicy: React.FC = () => {
    const navigate = useNavigate();

    useEffect(() => {
        document.title = 'Privacy Policy – Aaharly';
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <div className={styles.container}>
                <header className={styles.header}>
                    <img
                        src="/images/logo.svg"
                        alt="Aaharly Logo"
                        className={styles.logo}
                        onClick={() => navigate('/')}
                    />
                    <h1 className={styles.pageTitle}>Privacy Policy</h1>
                    <p className={styles.effectiveDate}>Effective Date: January 23, 2026</p>
                </header>

                <div className={styles.content}>
                    <section className={styles.section}>
                        <p className={styles.text}>
                            Aaharly (“we”, “our”, “us”) respects your privacy and is committed to protecting your personal information.
                            This Privacy Policy explains how we collect, use, store, share, and protect your data when you use the Aaharly mobile application.
                        </p>
                        <p className={styles.text}>
                            <strong>Agreement:</strong> By accessing or using the Aaharly app, you agree to the terms outlined in this Privacy Policy.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>1. Information We Collect</h2>
                        <p className={styles.text}>
                            We collect only the information required to provide our meal subscription and delivery services smoothly and efficiently.
                        </p>

                        <h3 className={styles.subSectionTitle}>a) Personal Information</h3>
                        <p className={styles.text}>
                            We may collect your full name, mobile number, and email address to identify you, communicate with you, and provide customer support.
                        </p>

                        <h3 className={styles.subSectionTitle}>b) Delivery Information</h3>
                        <p className={styles.text}>
                            We collect home, office, or college delivery addresses (if selected) to ensure accurate meal delivery. You may update your address within the app at any time.
                        </p>

                        <h3 className={styles.subSectionTitle}>c) Meal & Preference Information</h3>
                        <p className={styles.text}>
                            We collect dietary preferences, selected meal plans, and food preferences shared voluntarily by you to personalize your meal experience.
                        </p>

                        <h3 className={styles.subSectionTitle}>d) Information We Do NOT Collect</h3>
                        <p className={styles.text}>
                            We do not collect or store payment card details, UPI or bank account details, transaction history, or app usage analytics in the current version. Payments are handled securely by third-party gateways.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>2. How We Use Your Information</h2>
                        <p className={styles.text}>
                            Your information is used for account management, order processing, meal delivery, service notifications, customer support, and service improvement. We do not use your data for advertising or resale.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>3. Data Retention Policy</h2>
                        <p className={styles.text}>
                            User data is retained only as long as required. If a user remains inactive for 6 months, their data is automatically deleted. Users may request deletion at any time.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>4. Data Sharing and Disclosure</h2>
                        <p className={styles.text}>
                            We do not sell or trade personal data. Information is shared only with delivery partners and essential service providers, who are required to maintain confidentiality.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>5. Data Security</h2>
                        <p className={styles.text}>
                            We use reasonable, industry-standard security measures to protect your data. However, absolute security cannot be guaranteed.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>6. User Rights and Control</h2>
                        <p className={styles.text}>
                            You may view, update, correct, or request deletion of your data and opt out of non-essential communications.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>7. Children and Minor Usage</h2>
                        <p className={styles.text}>
                            Aaharly is not targeted at users under 18. Minors may use the app only with parental or guardian consent. If data is collected without consent, it will be deleted.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>8. Changes to This Privacy Policy</h2>
                        <p className={styles.text}>
                            We may update this policy from time to time. Continued use of the app indicates acceptance of changes.
                        </p>
                    </section>

                    <section className={styles.section}>
                        <h2 className={styles.sectionTitle}>9. Contact Information</h2>
                        <p className={styles.text}>
                            Email: <a href="mailto:support@aaharly.com" style={{ color: 'inherit' }}>support@aaharly.com</a><br />
                            Company Name: Aaharly<br />
                            Country: India
                        </p>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
