'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">MR NIPUN OFC / TECH-WEB</div>
          </div>
          <button className="home-btn" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}>
            Home
          </button>
          <div 
            className={`hamburger-menu ${isMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      <nav className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/" onClick={() => setIsMenuOpen(false)}>Home</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </>
  );
    }
