// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
      <ul style={{ display: 'flex', listStyle: 'none' }}>
        <li style={{ margin: '0 10px' }}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/about" style={{ color: 'white', textDecoration: 'none' }}>About</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/services" style={{ color: 'white', textDecoration: 'none' }}>Services</Link>
        </li>
        <li style={{ margin: '0 10px' }}>
          <Link to="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
