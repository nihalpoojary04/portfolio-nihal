import React from 'react';
import { resumeData } from '../data/resumeData';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-links">
                    <a href={`mailto:${resumeData.email}`} className="footer-link">Email</a>
                    <a href={resumeData.links.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
                    <a href={resumeData.links.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
                </div>
                <p className="copyright">
                    © {new Date().getFullYear()} {resumeData.name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
