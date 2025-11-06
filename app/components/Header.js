'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSocialOpen, setIsSocialOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

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
          <li>
            <a href="#" onClick={(e) => { e.preventDefault(); setIsAboutOpen(true); setIsMenuOpen(false); }}>
              About Me
            </a>
          </li>
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

      {/* About Me Modal */}
      {isAboutOpen && (
        <div className="modal-overlay" onClick={() => setIsAboutOpen(false)}>
          <div className="modal-content about-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsAboutOpen(false)}>×</button>
            
            <div className="modal-header">
              <div className="modal-profile">
                <div className="modal-image-container">
                  <div className="modal-light-ring"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                    alt="MR NIPUN" 
                    className="modal-profile-image"
                  />
                </div>
                <div className="modal-title">
                  <h2>MR NIPUN OFC / TECH-WEB</h2>
                  <p>Full Stack Developer & Designer</p>
                </div>
              </div>
            </div>

            <div className="modal-body">
              <div className="personal-info-grid">
                <div className="info-card">
                  <i className="fas fa-user"></i>
                  <div>
                    <strong>Name:</strong>
                    <span>H.M. NIPUN DHANUJAYA</span>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-birthday-cake"></i>
                  <div>
                    <strong>Age:</strong>
                    <span>18 Years</span>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-map-marker-alt"></i>
                  <div>
                    <strong>Location:</strong>
                    <span>Sri Lanka</span>
                  </div>
                </div>
                <div className="info-card">
                  <i className="fas fa-phone"></i>
                  <div>
                    <strong>Contact:</strong>
                    <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
                  </div>
                </div>
              </div>

              <div className="about-description">
                <h3>About Me</h3>
                <p>
                  Hello! I'm <strong>MR NIPUN</strong>, a passionate full-stack developer and UI/UX designer 
                  with expertise in creating modern web applications and digital experiences. 
                  I specialize in building responsive websites, web applications, and IoT solutions.
                </p>
                <p>
                  My technical skills include <strong>Java, Python, HTML/CSS, NextJS, Web Servers, 
                  and Arduino Micro Devices</strong>. I'm also creatively skilled in <strong>photography, 
                  animation creation, and logo design</strong>, which allows me to create visually 
                  appealing and engaging digital content.
                </p>
                <p>
                  My goal is to combine technical expertise with creative design to build 
                  innovative solutions that solve real-world problems and provide exceptional 
                  user experiences.
                </p>
              </div>

              <div className="quick-stats">
                <div className="stat-item">
                  <div className="stat-number">50+</div>
                  <div className="stat-label">Projects Completed</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">3+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-number">100%</div>
                  <div className="stat-label">Client Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {isSocialOpen && (
        <div className="modal-overlay" onClick={() => setIsSocialOpen(false)}>
          <div className="modal-content social-modal" onClick={(e) => e.stopPropagation()}>
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
