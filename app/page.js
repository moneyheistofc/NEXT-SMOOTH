'use client';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isNavActive, setIsNavActive] = useState(false);

  // Skills data
  const skills = [
    { icon: 'fab fa-java', name: 'Java', description: 'Backend Development' },
    { icon: 'fab fa-python', name: 'Python', description: 'Scripting & Automation' },
    { icon: 'fas fa-server', name: 'Web Server', description: 'Server Management' },
    { icon: 'fas fa-microchip', name: 'Arduino Micro Devices', description: 'IoT Development' },
    { icon: 'fab fa-html5', name: 'HTML/CSS', description: 'Frontend Development' },
    { icon: 'fab fa-react', name: 'NextJS', description: 'React Framework' },
    { icon: 'fas fa-camera', name: 'Photography', description: 'Creative Photography' },
    { icon: 'fas fa-film', name: 'Animation', description: 'Motion Graphics' },
    { icon: 'fas fa-palette', name: 'Logo Design', description: 'Brand Identity' }
  ];

  // Projects data
  const projects = [
    {
      title: 'MHT Website',
      description: 'A modern website for MHT with responsive design and interactive features.'
    },
    {
      title: 'E-commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration and admin dashboard.'
    },
    {
      title: 'IoT Home Automation',
      description: 'Smart home system using Arduino and mobile app control.'
    }
  ];

  // Social links data
  const socialLinks = [
    { icon: 'fab fa-whatsapp', name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683' },
    { icon: 'fab fa-facebook', name: 'Facebook Account', url: 'https://www.facebook.com/share/1KKrZV2NM8/' },
    { icon: 'fab fa-facebook', name: 'Facebook Page', url: 'https://www.facebook.com/share/17cgrxBQix/' },
    { icon: 'fab fa-tiktok', name: 'TikTok Account', url: 'https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/' },
    { icon: 'fab fa-youtube', name: 'YouTube Channel', url: 'https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo' },
    { icon: 'fab fa-instagram', name: 'Instagram', url: 'https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet' },
    { icon: 'fab fa-telegram', name: 'Telegram', url: 'https://t.me/Profesor9999' }
  ];

  // Modal functions
  const openModal = (modalId) => {
    if (typeof document !== 'undefined') {
      document.getElementById(modalId).classList.add('active');
    }
  };

  const closeModal = (modalId) => {
    if (typeof document !== 'undefined') {
      document.getElementById(modalId).classList.remove('active');
    }
  };

  // Navigation functions
  const toggleNav = () => {
    setIsNavActive(!isNavActive);
  };

  const closeNav = () => {
    setIsNavActive(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Close modals when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      const modals = ['about-modal', 'social-modal', 'privacy-modal', 'contact-modal'];
      modals.forEach(modalId => {
        const modal = document.getElementById(modalId);
        if (e.target === modal) {
          modal.classList.remove('active');
        }
      });
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <main>
      {/* Header */}
      <header className="fixed-header">
        <div className="header-content">
          <div className="logo">
            <div className="logo-text">MR NIPUN OFC / TECH-WEB</div>
          </div>
          <button className="home-btn" onClick={scrollToTop}>Home</button>
          <div 
            className={`hamburger-menu ${isNavActive ? 'active' : ''}`}
            onClick={toggleNav}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav className={isNavActive ? 'active' : ''}>
        <ul>
          <li><a onClick={() => { scrollToTop(); closeNav(); }}>Home</a></li>
          <li><a onClick={() => { openModal('about-modal'); closeNav(); }}>About</a></li>
          <li><a onClick={() => { scrollToSection('projects-section'); closeNav(); }}>Projects</a></li>
          <li><a onClick={() => { scrollToSection('skills-section'); closeNav(); }}>Skills</a></li>
          <li><a onClick={() => { openModal('social-modal'); closeNav(); }}>Social Media</a></li>
          <li><a onClick={() => { openModal('contact-modal'); closeNav(); }}>Contact</a></li>
          <li><a onClick={() => { openModal('privacy-modal'); closeNav(); }}>Privacy Policy</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="container">
        {/* Hero Section */}
        <section className="hero">
          <div className="profile-container">
            <div className="light-ring"></div>
            <img 
              src="https://raw.githubusercontent.com/maverick455456/ADMINS/refs/heads/main/ADMIN-DP/MR%20NIPUN%20OFC.png" 
              alt="MR NIPUN" 
              className="profile-image"
            />
          </div>
          <h1>MR NIPUN OFC / TECH WEB</h1>
          <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
        </section>

        {/* Personal Info Section */}
        <section className="personal-info">
          <h2 className="section-title">Personal Information</h2>
          <div className="info-grid">
            <div className="info-item">
              <i className="fas fa-user"></i>
              <div>
                <strong>Name:</strong> H.M. NIPUN DHANUJAYA
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-birthday-cake"></i>
              <div>
                <strong>Age:</strong> 18
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <div>
                <strong>From:</strong> Sri Lanka
              </div>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <div>
                <strong>Contact:</strong> 
                <a href="https://wa.me/+94757255903" style={{color: 'var(--primary-red)', textDecoration: 'none'}}>
                  +94 75 725 5903
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills-section">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skills.map((skill, index) => (
              <div key={index} className="skill-card">
                <i className={skill.icon}></i>
                <h3>{skill.name}</h3>
                <p>{skill.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects-section">
          <h2 className="section-title">My Projects</h2>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="footer-links">
            <a onClick={scrollToTop}>Home</a>
            <a onClick={() => openModal('about-modal')}>About</a>
            <a onClick={() => openModal('contact-modal')}>Contact</a>
            <a onClick={() => openModal('privacy-modal')}>Privacy Policy</a>
          </div>
          <div className="copyright">
            &copy; 2025 MR NIPUN OFC / TECH-WEB. All Rights Reserved.
          </div>
        </footer>
      </div>

      {/* About Modal */}
      <div className="modal" id="about-modal">
        <div className="modal-content">
          <span className="close-modal" onClick={() => closeModal('about-modal')}>&times;</span>
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

      {/* Social Media Modal */}
      <div className="modal" id="social-modal">
        <div className="modal-content">
          <span className="close-modal" onClick={() => closeModal('social-modal')}>&times;</span>
          <h2 style={{textAlign: 'center', marginBottom: '20px'}}>My Social Media</h2>
          <div className="social-grid">
            {socialLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-item">
                <i className={link.icon}></i>
                <p>{link.name}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Privacy Policy Modal */}
      <div className="modal" id="privacy-modal">
        <div className="modal-content">
          <span className="close-modal" onClick={() => closeModal('privacy-modal')}>&times;</span>
          <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Privacy Policy</h2>
          <div className="modal-body">
            <h3>Information We Collect</h3>
            <p>We may collect personal information such as your name, email address, and contact details when you interact with our website or services.</p>
            
            <h3>How We Use Your Information</h3>
            <p>We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to personalize your experience.</p>
            
            <h3>Information Sharing</h3>
            <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law.</p>
            
            <h3>Security</h3>
            <p>We implement appropriate security measures to protect your personal information from unauthorized access, alteration, or disclosure.</p>
            
            <h3>Changes to This Policy</h3>
            <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page.</p>
            
            <h3>Contact Us</h3>
            <p>If you have any questions about this privacy policy, please contact us through the contact information provided on our website.</p>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <div className="modal" id="contact-modal">
        <div className="modal-content">
          <span className="close-modal" onClick={() => closeModal('contact-modal')}>&times;</span>
          <h2 style={{textAlign: 'center', marginBottom: '20px'}}>Contact Me</h2>
          <div className="modal-body">
            <p>If you'd like to get in touch with me, please use the following contact information:</p>
            <ul style={{margin: '15px 0', paddingLeft: '20px'}}>
              <li style={{marginBottom: '10px'}}><strong>Email:</strong> mrnipun@techweb.com</li>
              <li style={{marginBottom: '10px'}}><strong>Phone:</strong> 
                <a href="https://wa.me/+94757255903" style={{color: 'var(--primary-red)', textDecoration: 'none'}}>
                  +94 75 725 5903
                </a>
              </li>
              <li style={{marginBottom: '10px'}}><strong>Location:</strong> Sri Lanka</li>
            </ul>
            <p>You can also reach out to me through my social media profiles for a quicker response.</p>
          </div>
        </div>
      </div>
    </main>
  );
    }
