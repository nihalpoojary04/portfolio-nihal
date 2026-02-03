import React from 'react';
import { resumeData } from '../data/resumeData';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
                <h2 className="greeting">Hello, I'm</h2>
                <h1 className="name">{resumeData.name}</h1>
                <h3 className="role">{resumeData.role}</h3>
                <p className="summary">{resumeData.summary}</p>
                <div className="hero-actions">
                    <a href={resumeData.links.github} target="_blank" rel="noopener noreferrer" className="btn primary">GitHub</a>
                    <a href={resumeData.links.linkedin} target="_blank" rel="noopener noreferrer" className="btn secondary">LinkedIn</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
