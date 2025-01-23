import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../src/images/Logo.svg';

function Navbar() {
  return (
    <header>
    <img src={logo} alt="Little Lemon Logo"/>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/reservation">Reservation</Link></li>
        <li><Link to="/orderonline">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
    </header>
  );
}

export default Navbar;