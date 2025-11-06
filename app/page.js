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
        <Skills />
        <Projects />
        <Footer />
      </div>
    </main>
  );
    }
