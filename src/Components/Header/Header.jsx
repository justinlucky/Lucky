import React, {useState} from 'react'
import './Header.css';
import Profile from '../Assets/Images/Profile.jpeg';
import {FaFacebook, FaGoogle,FaGithub, FaInstagram, FaTwitter} from 'react-icons/fa'
import { NavLink } from 'react-router-dom';

const Header = ({ selectedColor }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div className='header-container'>
            <div id='header-container'>
                <h1>Lucky.<span>com</span></h1>
                <div className="image">
                    <img src={Profile} alt="profile" />
                </div>
                <div className={`link-items ${isMenuOpen ? 'active' : ''}`}>
                    <ul id='navigation' className={`getcolor ${selectedColor}`}>
                        <li className='active-li'>
                            <NavLink exact to='/' activeClassName='active-link' onClick={closeMenu}>Home</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/about-us' activeClassName='active-link' onClick={closeMenu}>About Me</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/what-i-do' activeClassName='active-link' onClick={closeMenu}>What I Do</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/resume' activeClassName='active-link' onClick={closeMenu}>Resume</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/portfolio' activeClassName='active-link' onClick={closeMenu}>Portfolio</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/testomonial' activeClassName='active-link' onClick={closeMenu}>Testomonial</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/projects' activeClassName='active-link' onClick={closeMenu}>Projects</NavLink>
                        </li>
                        <li className='active-li'>
                            <NavLink to='/contact' activeClassName='active-link' onClick={closeMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="social-links">
                    <ul className='links'>
                        <li>
                            <a href="https://www.facebook.com/justin.lucky.71653"><FaTwitter className='link'/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/justin.lucky.71653"><FaFacebook className='link'/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/justin.lucky.71653"><FaGithub className='link'/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/justin.lucky.71653"><FaGoogle className='link'/></a>
                        </li>
                        <li>
                            <a href="https://www.facebook.com/justin.lucky.71653"><FaInstagram className='link'/></a>
                        </li>
                    </ul>
                </div>
                <div className={`bars ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </div>
        </div>
    )
}

export default Header