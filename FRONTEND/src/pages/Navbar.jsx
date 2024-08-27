import React, { useState, useEffect } from 'react';
import { NavLink } from "react-router-dom";
import './navbar.css';
import { useAuth } from "../store/Auth";

export const Navbar = () => {
    const { isLoggedIn } = useAuth();
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (isOpen && !event.target.closest('.navbar')) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="container">
            <div className="logo">
                <NavLink to="/" onClick={closeMenu}>
                    <img className="logo-img" src="./images/logo.svg" alt="Logo"/>
                </NavLink>
            </div>
            <div className="navbar">
                <div className="hamburger" onClick={toggleMenu}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <nav>
                    <ul className={`navigation ${isOpen ? "open" : ""}`}>
                        <li><NavLink exact to="/" activeClassName="active" onClick={closeMenu}>Home</NavLink></li>
                        <li><NavLink to="/services" activeClassName="active" onClick={closeMenu}>Services</NavLink></li>
                        <li><NavLink to="/projects" activeClassName="active" onClick={closeMenu}>Projects</NavLink></li>
                        <li><NavLink to="/contactme" activeClassName="active" onClick={closeMenu}>Contact Me</NavLink></li>

                        {isLoggedIn ? (
                            <li>
                                <NavLink to="/logout" activeClassName="active" onClick={closeMenu}>Logout</NavLink>
                            </li>
                        ) : (
                            <>
                            <li><NavLink to="/signup" activeClassName="active" onClick={closeMenu}>Sign Up</NavLink></li>
                                <li><NavLink to="/login" activeClassName="active" onClick={closeMenu}>Login</NavLink></li>
                            </>
                        )}
                    </ul>
                </nav>
            </div>
        </div>
    );
};
