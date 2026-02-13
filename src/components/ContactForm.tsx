import React, { useState } from 'react';
import type { FormEvent } from 'react';
import styles from './ContactForm.module.css';
import { apiFetch } from '../lib/api';

interface FormData {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    _honey: string; // Honeypot field
}

interface FormErrors {
    name?: string;
    email?: string;
    phone?: string; // Optional but can validate format if provided
    subject?: string;
    message?: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: 'Subscription',
        message: '',
        _honey: ''
    });

    const [errors, setErrors] = useState<FormErrors>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [toastMessage, setToastMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));

        // Clear error when user types
        if (errors[name as keyof FormErrors]) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    const validate = (): boolean => {
        const newErrors: FormErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Please enter your name';
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            newErrors.email = 'Enter a valid email address';
            isValid = false;
        }

        if (!formData.subject) {
            newErrors.subject = 'Please select a category';
            isValid = false;
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Message cannot be empty';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const showToast = (type: 'success' | 'error', text: string) => {
        setToastMessage({ type, text });
        setTimeout(() => {
            setToastMessage(null);
        }, 5000);
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Honeypot check
        if (formData._honey) {
            return; // Silently fail for bots
        }

        if (!validate()) {
            return;
        }

        setIsSubmitting(true);

        try {

            await apiFetch('/api/v1/contact', {
                method: 'POST',
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    phone: formData.phone,
                    subject: formData.subject,
                    message: formData.message
                }),
            });

            // Success
            showToast('success', 'Your message has been sent. Team Aaharly will contact you shortly.');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: 'Subscription',
                message: '',
                _honey: ''
            });

        } catch (error) {
            console.error('Submission error:', error);
            showToast('error', 'Server unavailable. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>
                {/* Honeypot hidden field */}
                <input
                    type="text"
                    name="_honey"
                    value={formData._honey}
                    onChange={handleChange}
                    style={{ display: 'none' }}
                    autoComplete="off"
                />

                <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>Name <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                        placeholder="Your Name"
                    />
                    {errors.name && <span className={styles.errorText}>{errors.name}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>Email <span style={{ color: 'red' }}>*</span></label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
                        placeholder="you@example.com"
                    />
                    {errors.email && <span className={styles.errorText}>{errors.email}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="phone" className={styles.label}>Phone</label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={styles.input}
                        placeholder="+91 93709 85927"
                    />
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="subject" className={styles.label}>Subject <span style={{ color: 'red' }}>*</span></label>
                    <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`${styles.select} ${errors.subject ? styles.inputError : ''}`}
                    >
                        <option value="Subscription">Subscription</option>
                        <option value="Delivery">Delivery</option>
                        <option value="Diet Plan">Diet Plan</option>
                        <option value="Support">Support</option>
                        <option value="Other">Other</option>
                    </select>
                    {errors.subject && <span className={styles.errorText}>{errors.subject}</span>}
                </div>

                <div className={styles.formGroup}>
                    <label htmlFor="message" className={styles.label}>Message <span style={{ color: 'red' }}>*</span></label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className={`${styles.textarea} ${errors.message ? styles.inputError : ''}`}
                        placeholder="How can we help you?"
                    />
                    {errors.message && <span className={styles.errorText}>{errors.message}</span>}
                </div>

                <button
                    type="submit"
                    className={styles.submitButton}
                    disabled={isSubmitting}
                    style={{ opacity: isSubmitting ? 0.7 : 1, cursor: isSubmitting ? 'not-allowed' : 'pointer' }}
                >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
            </form>

            {toastMessage && (
                <div
                    className={styles.toast}
                    style={{ backgroundColor: toastMessage.type === 'error' ? '#dc3545' : '#333' }}
                >
                    {toastMessage.text}
                </div>
            )}
        </>
    );
};

export default ContactForm;
