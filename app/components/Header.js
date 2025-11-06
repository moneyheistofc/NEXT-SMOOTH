'use client';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeModal, setActiveModal] = useState(null);

  // Close modal when clicking outside or ESC key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setActiveModal(null);
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e) => {
      if (e.target.classList.contains('modal-overlay')) {
        setActiveModal(null);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  // Disable scroll when modal is open
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModal]);

  const openModal = (modalName) => {
    setActiveModal(modalName);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

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
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('about'); }}>About</a></li>
          <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('social'); }}>Social Media</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('contact'); }}>Contact</a></li>
        </ul>
      </nav>

      {/* About Modal */}
      {activeModal === 'about' && (
        <div className="modal-overlay">
          <div className="modal-content">
            <span className="close-modal" onClick={closeModal}>&times;</span>
            <div className="modal-profile">
              <div className="modal-profile-container">
                <div className="modal-light-ring"></div>
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
                  alt="MR NIPUN" 
                  className="modal-profile-image"
                />
              </div>
              <div className="modal-profile-info">
                <h2>MR NIPUN</h2>
                <p>Full Stack Developer & Designer</p>
              </div>
            </div>
            <div className="modal-body">
              <div className="personal-details">
                <div className="detail-item">
                  <strong>Name:</strong> H.M. NIPUN DHANUJAYA
                </div>
                <div className="detail-item">
                  <strong>Age:</strong> 18
                </div>
                <div className="detail-item">
                  <strong>From:</strong> Sri Lanka
                </div>
                <div className="detail-item">
                  <strong>Contact:</strong> 
                  <a href="https://wa.me/+94757255903" target="_blank"> +94 75 725 5903</a>
                </div>
              </div>
              
              <div className="about-text">
                <p>Hello! I'm MR NIPUN, a passionate full-stack developer and designer with expertise in creating modern web applications and digital experiences.</p>
                <p>With a strong background in both frontend and backend technologies, I specialize in building responsive websites, web applications, and IoT solutions. My skills include Java, Python, HTML/CSS, NextJS, and working with Arduino micro devices.</p>
                <p>I'm also skilled in photography, animation creation, and logo design, allowing me to create visually appealing and engaging digital content.</p>
                <p>My goal is to combine technical expertise with creative design to build innovative solutions that solve real-world problems.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Social Media Modal */}
      {activeModal === 'social' && (
        <div className="modal-overlay">
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
                <i className="fab fa-facebook"></i>
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
        <div className="modal-overlay">
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
