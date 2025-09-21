import React, { useState } from 'react';
import './Header.scss';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="container">
        <h1>My Portfolio</h1>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}> 
          <li><a href="/" onClick={handleLinkClick}>Home</a></li>
          <li><a href="/projects" onClick={handleLinkClick}>Projects</a></li>
          <li><a href="/about" onClick={handleLinkClick}>About</a></li>
          <li><a href="/contact" onClick={handleLinkClick}>Contact</a></li>
        </ul>
        <div className={`hamburger ${menuOpen ? 'active' : ''}`} onClick={() => setMenuOpen(!menuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  );
}