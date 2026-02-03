import React from 'react';
import Section from './Section';
import { resumeData } from '../data/resumeData';
import './Skills.css';

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className="skills-category">
                <h3>Proficient</h3>
                <div className="skills-grid">
                    {resumeData.skills.proficient.map((skill, index) => (
                        <div key={index} className="skill-card proficient">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>

            <div className="skills-category">
                <h3>Familiar</h3>
                <div className="skills-grid">
                    {resumeData.skills.familiar.map((skill, index) => (
                        <div key={index} className="skill-card familiar">
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default Skills;
