import React from 'react';
import styles from './ValueProp.module.css';

const ValueProp: React.FC = () => {
    return (
        <section className={`section-padding ${styles.section}`}>
            <div className="container">
                <div className={styles.content}>
                    <h2 className={styles.title}>More than food delivery</h2>
                    <p className={styles.text}>
                        Aaharly is a nutrition-focused platform helping people stay consistent with their diet by combining fitness goals, meal planning, and reliable delivery.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ValueProp;
