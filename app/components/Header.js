'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);

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
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About Me</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsSocialOpen(true); setIsMenuOpen(false); }}>
              Social Media
            </a>
          </li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      {/* Social Media Modal */}
      {isSocialOpen && (
        <div className="modal-overlay" onClick={() => setIsSocialOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsSocialOpen(false)}>×</button>
            <h2>My Social Media</h2>
            <div className="social-grid">
              <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" className="social-item">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Channel</span>
              </a>
              <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" className="social-item">
                <i className="fab fa-facebook"></i>
                <span>Facebook Account</span>
              </a>
              <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" className="social-item">
                <i className="fab fa-facebook-f"></i>
                <span>Facebook Page</span>
              </a>
              <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" className="social-item">
                <i className="fab fa-tiktok"></i>
                <span>TikTok Account</span>
              </a>
              <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" className="social-item">
                <i className="fab fa-youtube"></i>
                <span>YouTube Channel</span>
              </a>
              <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" className="social-item">
                <i className="fab fa-instagram"></i>
                <span>Instagram</span>
              </a>
              <a href="https://t.me/Profesor9999" target="_blank" className="social-item">
                <i className="fab fa-telegram"></i>
                <span>Telegram</span>
              </a>
              <a href="https://wa.me/+94757255903" target="_blank" className="social-item">
                <i className="fab fa-whatsapp"></i>
                <span>WhatsApp Contact</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
              }
