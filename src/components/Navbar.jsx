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
                <div className="logo">Nihal.dev</div>
                <ul className="nav-links">
                    <li>
  <button aria-label="Go to home section" onClick={() => scrollToSection('hero')}>
    Home
  </button>
</li>
<li>
  <button aria-label="Go to skills section" onClick={() => scrollToSection('skills')}>
    Skills
  </button>
</li>
<li>
  <button aria-label="Go to projects section" onClick={() => scrollToSection('projects')}>
    Projects
  </button>
</li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;