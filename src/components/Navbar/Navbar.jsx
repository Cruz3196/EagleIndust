import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../Container/Container';
import './Navbar.css';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();  // This sets the location of the path 

    const handleToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="navbar">
            <Container>
                <div className="navbar-left">
                    <a href="/" className={`brand ${menuOpen ? 'open' : ''}`}>
                        Eagle Industrial 
                    </a>
                </div>
            
                {/* Nav Menu */}
                <div className={`navbar-right ${menuOpen ? 'open' : ''}`}>
                    <ul className="nav-links">
                        <li className="nav-item">
                            <a href="#about" className={`${location.pathname === '/about' ? 'active' : ''}`}>About</a>
                        </li>
                        <li className="nav-item">
                            <a href="#services" className={`${location.pathname === '/services' ? 'active' : ''}`}>Services</a>
                        </li>
                        <li className="nav-item">
                            <a href="#safety" className={`${location.pathname === '/safety' ? 'active' : ''}`}>Safety</a>
                        </li>
                        <li className="nav-item">
                            <a href="#contact" className={`${location.pathname === '/contact' ? 'active' : ''}`}>Contact</a>
                        </li>
                    </ul>
                </div>
            
                {/* Hamburger Icon */}
                <div id="hamburger" className={menuOpen ? 'open' : ''} onClick={handleToggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </Container>
        </nav>
    );
};

export default Navbar;
