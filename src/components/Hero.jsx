import React from 'react';
import { resumeData } from '../data/resumeData';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-content">
            <h1 className="greeting">Hello, I'm</h1>
            <h2 className="name">{resumeData.name}</h2>
            <p className="role">{resumeData.role}</p>

                <p className="summary">{resumeData.summary}</p>
                <div className="hero-actions">
                   <a
  href={resumeData.links.github}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my GitHub profile"
>
  GitHub
</a>

<a
  href={resumeData.links.linkedin}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Visit my LinkedIn profile"
>
  LinkedIn
</a>

            </div>
            </div>
        </section>
    );
};

export default Hero;