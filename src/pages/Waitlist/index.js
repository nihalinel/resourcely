import React, { useState } from 'react';
import './index.scss'; 

export default function Waitlist() {
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email submitted:', email);
        setSubmitted(true);
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
                placeholder="Enter your email" // need to implement the logic for saving the email addresses here
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
