'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openModal = (modal) => {
    setActiveModal(modal)
    setIsMenuOpen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'unset'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (isMenuOpen || activeModal) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen, activeModal])

  return (
    <main>
      {/* Money Heist Style Navigation */}
      <header className="money-heist-nav">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-logo">MR NIPUN OFC</div>
          </div>
          
          <button 
            className="hamburger-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('about') }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Skills</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('social') }}>Social Media</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('contact') }}>Contact</a></li>
        </ul>
      </nav>

      <div className="container">
        <Hero />
        <PersonalInfo />
        <Skills />
        <Projects />
        <Footer openModal={openModal} />
      </div>
      
      {/* Modals */}
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <SocialModal isOpen={activeModal === 'social'} onClose={closeModal} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={closeModal} />
    </main>
  )
}

// Components
function Hero() {
  return (
    <section className="hero">
      <div className="profile-container">
        <div className="light-ring"></div>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
          alt="MR NIPUN" 
          className="profile-image"
        />
      </div>
      <h1>MR NIPUN OFC / TECH-WEB</h1>
      <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
    </section>
  )
}

function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-user"></i>
          <div>
            <strong>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <div>
            <strong>Age:</strong>
            <span>18</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>From:</strong>
            <span>Sri Lanka</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <strong>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { 
      name: 'Java', 
      icon: 'fab fa-java', 
      desc: 'Backend Development & Enterprise Applications' 
    },
    { 
      name: 'Python', 
      icon: 'fab fa-python', 
      desc: 'Scripting, Automation & Data Analysis' 
    },
    { 
      name: 'Web Server', 
      icon: 'fas fa-server', 
      desc: 'Server Management & Deployment' 
    },
    { 
      name: 'Arduino IoT', 
      icon: 'fas fa-microchip', 
      desc: 'Micro Devices & Home Automation' 
    },
    { 
      name: 'HTML/CSS', 
      icon: 'fab fa-html5', 
      desc: 'Frontend Development & Responsive Design' 
    },
    { 
      name: 'NextJS', 
      icon: 'fab fa-react', 
      desc: 'React Framework & SSR Applications' 
    },
    { 
      name: 'Photography', 
      icon: 'fas fa-camera', 
      desc: 'Creative Photography & Editing' 
    },
    { 
      name: 'Animation', 
      icon: 'fas fa-film', 
      desc: 'Motion Graphics & Visual Effects' 
    },
    { 
      name: 'Logo Design', 
      icon: 'fas fa-palette', 
      desc: 'Brand Identity & Graphic Design' 
    }
  ]

  return (
    <section className="skills-catalog" id="skills">
      <h2 className="section-title">My Skills Catalog</h2>
      <div className="catalog-grid">
        {skills.map((skill, index) => (
          <div key={index} className="catalog-item">
            <i className={`${skill.icon} catalog-icon`}></i>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
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
  ]

  return (
    <section className="projects-section" id="projects">
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
  )
}

function Footer({ openModal }) {
  return (
    <footer>
      <div className="footer-links">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); openModal('about') }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}) }}>Skills</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'sm'use client'
import { useState, useEffect } from 'react'

export default function Home() {
  const [activeModal, setActiveModal] = useState(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const openModal = (modal) => {
    setActiveModal(modal)
    setIsMenuOpen(false)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setActiveModal(null)
    document.body.style.overflow = 'unset'
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal()
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  useEffect(() => {
    if (isMenuOpen || activeModal) {
      document.body.classList.add('menu-open')
    } else {
      document.body.classList.remove('menu-open')
    }
  }, [isMenuOpen, activeModal])

  return (
    <main>
      {/* Money Heist Style Navigation */}
      <header className="money-heist-nav">
        <div className="nav-container">
          <div className="brand">
            <div className="brand-logo">MR NIPUN OFC</div>
          </div>
          
          <button 
            className="hamburger-menu"
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <nav className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('about') }}>About</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Skills</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}); setIsMenuOpen(false) }}>Projects</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('social') }}>Social Media</a></li>
          <li><a href="#" onClick={(e) => { e.preventDefault(); openModal('contact') }}>Contact</a></li>
        </ul>
      </nav>

      <div className="container">
        <Hero />
        <PersonalInfo />
        <Skills />
        <Projects />
        <Footer openModal={openModal} />
      </div>
      
      {/* Modals */}
      <AboutModal isOpen={activeModal === 'about'} onClose={closeModal} />
      <SocialModal isOpen={activeModal === 'social'} onClose={closeModal} />
      <ContactModal isOpen={activeModal === 'contact'} onClose={closeModal} />
    </main>
  )
}

// Components
function Hero() {
  return (
    <section className="hero">
      <div className="profile-container">
        <div className="light-ring"></div>
        <img 
          src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
          alt="MR NIPUN" 
          className="profile-image"
        />
      </div>
      <h1>MR NIPUN OFC / TECH-WEB</h1>
      <p>Full Stack Developer | UI/UX Designer | Tech Enthusiast</p>
    </section>
  )
}

function PersonalInfo() {
  return (
    <section className="personal-info">
      <h2>Personal Information</h2>
      <div className="info-grid">
        <div className="info-item">
          <i className="fas fa-user"></i>
          <div>
            <strong>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-birthday-cake"></i>
          <div>
            <strong>Age:</strong>
            <span>18</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-map-marker-alt"></i>
          <div>
            <strong>From:</strong>
            <span>Sri Lanka</span>
          </div>
        </div>
        <div className="info-item">
          <i className="fas fa-phone"></i>
          <div>
            <strong>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Skills() {
  const skills = [
    { 
      name: 'Java', 
      icon: 'fab fa-java', 
      desc: 'Backend Development & Enterprise Applications' 
    },
    { 
      name: 'Python', 
      icon: 'fab fa-python', 
      desc: 'Scripting, Automation & Data Analysis' 
    },
    { 
      name: 'Web Server', 
      icon: 'fas fa-server', 
      desc: 'Server Management & Deployment' 
    },
    { 
      name: 'Arduino IoT', 
      icon: 'fas fa-microchip', 
      desc: 'Micro Devices & Home Automation' 
    },
    { 
      name: 'HTML/CSS', 
      icon: 'fab fa-html5', 
      desc: 'Frontend Development & Responsive Design' 
    },
    { 
      name: 'NextJS', 
      icon: 'fab fa-react', 
      desc: 'React Framework & SSR Applications' 
    },
    { 
      name: 'Photography', 
      icon: 'fas fa-camera', 
      desc: 'Creative Photography & Editing' 
    },
    { 
      name: 'Animation', 
      icon: 'fas fa-film', 
      desc: 'Motion Graphics & Visual Effects' 
    },
    { 
      name: 'Logo Design', 
      icon: 'fas fa-palette', 
      desc: 'Brand Identity & Graphic Design' 
    }
  ]

  return (
    <section className="skills-catalog" id="skills">
      <h2 className="section-title">My Skills Catalog</h2>
      <div className="catalog-grid">
        {skills.map((skill, index) => (
          <div key={index} className="catalog-item">
            <i className={`${skill.icon} catalog-icon`}></i>
            <h3>{skill.name}</h3>
            <p>{skill.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function Projects() {
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
  ]

  return (
    <section className="projects-section" id="projects">
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
  )
}

function Footer({ openModal }) {
  return (
    <footer>
      <div className="footer-links">
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({top: 0, behavior: 'smooth'}) }}>Home</a>
        <a href="#" onClick={(e) => { e.preventDefault(); openModal('about') }}>About</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('skills')?.scrollIntoView({behavior: 'smooth'}) }}>Skills</a>
        <a href="#" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'}) }}>Projects</a>
      </div>
      <div className="copyright">
        &copy; 2024 MR NIPUN OFC / TECH-WEB. All Rights Reserved.
      </div>
    </footer>
  )
}

// Modal Components
function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
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
        
        <div className="modal-details">
          <div className="detail-item">
            <i className="fas fa-user"></i>
            <strong>Name:</strong>
            <span>H.M. NIPUN DHANUJAYA</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-birthday-cake"></i>
            <strong>Age:</strong>
            <span>18</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-map-marker-alt"></i>
            <strong>From:</strong>
            <span>Sri Lanka</span>
          </div>
          <div className="detail-item">
            <i className="fas fa-phone"></i>
            <strong>Contact:</strong>
            <a href="https://wa.me/+94757255903" target="_blank">+94 75 725 5903</a>
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
  )
}

function SocialModal({ isOpen, onClose }) {
  if (!isOpen) return null

  const socialLinks = [
    { icon: 'fab fa-whatsapp', name: 'WhatsApp Channel', url: 'https://whatsapp.com/channel/0029Vb9bLMqGJP8GmAHxUd02/3683' },
    { icon: 'fab fa-facebook', name: 'Facebook Account', url: 'https://www.facebook.com/share/1KKrZV2NM8/' },
    { icon: 'fab fa-facebook-f', name: 'Facebook Page', url: 'https://www.facebook.com/share/17cgrxBQix/' },
    { icon: 'fab fa-tiktok', name: 'TikTok Account', url: 'https://vm.tiktok.com/ZSHc9tLctfuKo-3zM0Z/' },
    { icon: 'fab fa-youtube', name: 'YouTube Channel', url: 'https://youtube.com/@mrprofesormht?si=aT8XOonaZEj1YBdo' },
    { icon: 'fab fa-instagram', name: 'Instagram', url: 'https://www.instagram.com/mr_nipun_ofc/?utm_source=ig_web_button_share_sheet' },
    { icon: 'fab fa-telegram', name: 'Telegram', url: 'https://t.me/Profesor9999' }
  ]

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2 style={{textAlign: 'center', marginBottom: '10px', background: 'linear-gradient(45deg, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>My Social Media</h2>
        <p style={{textAlign: 'center', color: '#aaa', marginBottom: '30px'}}>Follow me on social media for updates</p>
        <div className="social-grid">
          {socialLinks.map((social, index) => (
            <a key={index} href={social.url} target="_blank" className="social-item">
              <i className={social.icon}></i>
              <p>{social.name}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}

function ContactModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay active" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal" onClick={onClose}>&times;</button>
        <h2 style={{textAlign: 'center', marginBottom: '10px', background: 'linear-gradient(45deg, var(--primary-red), var(--purple))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Contact Me</h2>
        <p style={{textAlign: 'center', color: '#aaa', marginBottom: '30px'}}>Let's discuss your next project</p>
        <div>
          <div className="contact-info">
            <ul>
              <li>
                <i className="fas fa-envelope"></i>
                <div>
                  <strong>Email:</strong> 
                  <span style={{marginLeft: '10px'}}>mrnipun@techweb.com</span>
                </div>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <div>
                  <strong>Phone:</strong> 
                  <a href="https://wa.me/+94757255903" style={{marginLeft: '10px'}}>+94 75 725 5903</a>
                </div>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <div>
                  <strong>Location:</strong> 
                  <span style={{marginLeft: '10px'}}>Sri Lanka</span>
                </div>
              </li>
            </ul>
          </div>
          <p style={{textAlign: 'center', lineHeight: '1.6'}}>Feel free to reach out for collaborations or freelance opportunities!</p>
        </div>
      </div>
    </div>
  )
  }
