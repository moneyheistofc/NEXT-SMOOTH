'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <>
      <header className="glass-nav">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-logo">MR NIPUN OFC / TECH-WEB</div>
          </div>
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
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}); }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('about'); }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('social'); }}>Social Media</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {/* About Modal */}
      {activeModal === 'about' && (
        <div className="modal active" id="about-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-profile">
              <img 
                src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png" 
                alt="MR NIPUN" 
                className="modal-profile-img"
              />
              <div className="modal-profile-info">
                <h2>MR NIPUN</h2>
                <p>Full Stack Developer & Designer</p>
              </div>
            </div>
            <div className="modal-body">
              <p>Hello! I'm MR NIPUN, a passionate full-stack developer and designer with expertise in creating modern web applications and digital experiences.</p>
              <p>With a strong background in both frontend and backend technologies, I specialize in building responsive websites, web applications, and IoT solutions. My skills include Java, Python, HTML/CSS, NextJS, and working with Arduino micro devices.</p>
              <p>I'm also skilled in photography, animation creation, and logo design, allowing me to create visually appealing and engaging digital content.</p>
              <p>My goal is to combine technical expertise with creative design to build innovative solutions that solve real-world problems.</p>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {activeModal === 'social' && (
        <div className="modal active" id="social-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h2 style={{textAlign: 'center', marginBottom: '20px'}}>My Social Media</h2>
            <div className="social-grid">
              <a href="https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683" target="_blank" className="social-item">
                <i className="fab fa-whatsapp"></i>
                <p>WhatsApp Channel</p>
              </a>
              <a href="https://www.facebook.com/share/1KKrZV2NM8/" target="_blank" className="social-item">
                <i className="fab fa-facebook"></i>
                <p>Facebook Account</p>
              </a>
              <a href="https://www.facebook.com/share/17cgrxBQix/" target="_blank" className="social-item">
                <i className="fab fa-facebook-f"></i>
                <p>Facebook Page</p>
              </a>
              <a href="https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/" target="_blank" className="social-item">
                <i className="fab fa-tiktok"></i>
                <p>TikTok Account</p>
              </a>
              <a href="https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo" target="_blank" className="social-item">
                <i className="fab fa-youtube"></i>
                <p>YouTube Channel</p>
              </a>
              <a href="https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet" target="_blank" className="social-item">
                <i className="fab fa-instagram"></i>
                <p>Instagram</p>
              </a>
              <a href="https://t.me/Profesor9999" target="_blank" className="social-item">
                <i className="fab fa-telegram"></i>
                <p>Telegram</p>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Contact Modal */}
      {activeModal === 'contact' && (
        <div className="modal active" id="contact-modal">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Contact Me</h2>
            <div className="modal-body">
              <p>If you'd like to get in touch with me, please use the following contact information:</p>
              <ul style={{margin: '15px 0', paddingLeft: '20px'}}>
                <li style={{marginBottom: '10px'}}><strong>Email:</strong> mrnipun@techweb.com</li>
                <li style={{marginBottom: '10px'}}><strong>Phone:</strong> 
                  <a href="https://wa.me/+94757255903" style={{color: 'var(--primary-red)', textDecoration: 'none', marginLeft: '5px'}}>
                    +94 75 725 5903
                  </a>
                </li>
                <li style={{marginBottom: '10px'}}><strong>Location:</strong> Sri Lanka</li>
              </ul>
              <p>You can also reach out to me through my social media profiles for a quicker response.</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
              }
