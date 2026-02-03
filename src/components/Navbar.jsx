import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container nav-content">
                <h1 className="logo">Nihal.dev</h1>
                <ul className="nav-links">
                    <li><button onClick={() => scrollToSection('hero')}>Home</button></li>
                    <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
                    <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
