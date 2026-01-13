import React from 'react';
import styles from './Audience.module.css';

const Audience: React.FC = () => {
    const audiences = [
        {
            icon: "/images/run.svg",
            title: "Fitness Enthusiasts",
            description: "Fuel workouts with structured nutrition."
        },
        {
            icon: "/images/working.svg",
            title: "Working Professionals",
            description: "Meals designed around your fitness goals."
        },
        {
            icon: "/images/college.svg",
            title: "College Students",
            description: "Affordable, disciplined meals beyond mess food."
        }
    ];

    return (
        <section className={styles.section}>
            <div className={styles.containerBox}>
                <h2 className={styles.title}>Who Aaharly is for</h2>
                <div className={styles.grid}>
                    {audiences.map((item, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.cardHeader}>
                                <div className={styles.iconWrapper}>
                                    <img src={item.icon} alt={item.title} className={styles.icon} />
                                </div>
                                <h3 className={styles.cardTitle}>{item.title}</h3>
                            </div>
                            <p className={styles.cardText}>{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Audience;
