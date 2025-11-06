import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <div className="container">
        <Hero />
        <ProfessionalInfo />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}

// Professional Info Component
function ProfessionalInfo() {
  return (
    <section className="professional-info">
      <div className="info-card">
        <i className="fas fa-code"></i>
        <h3>Full Stack Development</h3>
        <p>Expert in building responsive web applications using modern technologies like React, Next.js, Node.js, and Python.</p>
      </div>
      <div className="info-card">
        <i className="fas fa-palette"></i>
        <h3>UI/UX Design</h3>
        <p>Creating intuitive and beautiful user interfaces with focus on user experience and modern design principles.</p>
      </div>
      <div className="info-card">
        <i className="fas fa-microchip"></i>
        <h3>IoT Solutions</h3>
        <p>Developing smart solutions using Arduino and micro devices for home automation and industrial applications.</p>
      </div>
    </section>
  );
}
