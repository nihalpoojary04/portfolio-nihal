import React from 'react';
import Section from './Section';
import { resumeData } from '../data/resumeData';
import './Projects.css';

const Projects = () => {
    return (
        <Section id="projects" title="Featured Projects">
            <div className="projects-grid">
                {resumeData.projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <div className="project-content">
                            <h3>{project.title}</h3>
                            <div className="project-tech">
                                {project.tech.map((tech, i) => (
                                    <span key={i} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <p className="project-description">{project.description}</p>
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                View Repository &rarr;
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
