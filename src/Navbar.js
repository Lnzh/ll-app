import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/Logo.svg';
import {FaBars, FaTimes} from 'react-icons/fa';
function Navbar() {
  const [isOpen, setIsOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(770);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      if (window.innerWidth >= 769) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <header>
    <img src={logo} alt="Little Lemon Logo"/>
    <nav role="navigation" aria-label='Main Navigation'>
      {windowWidth < 769 && (
    <div className={`nav-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
    {isOpen ? <FaTimes /> : <FaBars />}
    </div>
    )}
    {windowWidth < 769 && (
    <div>
      <ul className={`mobile-menu ${isOpen ? 'open' : 'closed'}`}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      </div>
      )}
      {windowWidth >= 769 && (
      <ul className='desctop-menu'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      )}
    </nav>
    </header>
  );
}

export default Navbar;