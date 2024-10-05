import React, { useState } from 'react';
import './Navbar.css'; // Link to CSS

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle the menu open/close state
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close the menu when a link is clicked
    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <button className="hamburger" onClick={toggleMenu}>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isOpen ? 'open' : ''}`}></span>
                </button>
                <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <li><a href="#home" onClick={closeMenu}>Home</a></li>
                    <li><a href="#about" onClick={closeMenu}>About Me</a></li>
                    <li><a href="#skills" onClick={closeMenu}>Skills</a></li>
                    <li><a href="#projects" onClick={closeMenu}>Projects</a></li>
                    <li><a href="#contact" onClick={closeMenu}>Contact Me</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;








