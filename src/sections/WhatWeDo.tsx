import React from 'react';
import { Utensils, CalendarCheck, Dumbbell } from 'lucide-react';
import styles from './WhatWeDo.module.css';

const WhatWeDo: React.FC = () => {
    const features = [
        {
            icon: <Utensils size={32} />,
            title: "Personalized Nutrition",
            description: "Meals designed around your fitness goals and body needs."
        },
        {
            icon: <CalendarCheck size={32} />,
            title: "Meal Plans, Not Orders",
            description: "Weekly and monthly plans built for consistency."
        },
        {
            icon: <Dumbbell size={32} />,
            title: "Built for Fitness & Wellness",
            description: "Designed for gym goers, professionals, and students."
        }
    ];

    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <h2 className={styles.title}>What we do</h2>
                <div className={styles.grid}>
                    {features.map((feature, index) => (
                        <div key={index} className={styles.card}>
                            <div className={styles.iconWrapper}>
                                {feature.icon}
                            </div>
                            <h3 className={styles.cardTitle}>{feature.title}</h3>
                            <p className={styles.cardText}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatWeDo;
