import React, { useState } from 'react';
import './index.scss';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase';

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
        await addDoc(collection(db, 'waitlist'), {
            email: email,
            submittedAt: new Date().toISOString()
        });
        console.log('Email submitted:', email);
        setSubmitted(true);
        } catch (err) {
        console.error('Error submitting email:', err);
        }
    };

    return (
        <div className="waitlist-container">
        <h1 className="logo-title">resourcely;</h1>
        <p className="tagline">Empowering your Canadian journey – one resource at a time.</p>
        <p className="blurb">
            We are building <span className="highlight">Resourcely</span>, a platform to help newcomers to Canada easily find essential services like food banks, job centers, and local events. Everything in one place, ESL-friendly and easy to use. 
        </p>

        {!submitted ? (
            <form onSubmit={handleSubmit} className="email-form">
                <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <button type="submit">Join the Waitlist</button>
            </form>
            ) : (
            <p className="thank-you">Thank you! You're on the waitlist.</p>
            )}
        </div>
    );
}
