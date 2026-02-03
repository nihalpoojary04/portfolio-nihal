import React from 'react';
import './Section.css';

const Section = ({ id, title, children, className = '' }) => {
    return (
        <section id={id} className={`section-container ${className}`}>
            <div className="section-header">
                <h2 className="section-title">{title}</h2>
                <div className="section-line"></div>
            </div>
            <div className="section-content">
                {children}
            </div>
        </section>
    );
};

export default Section;
