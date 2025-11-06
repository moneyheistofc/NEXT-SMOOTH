export default function About() {
  return (
    <section className="about-section" id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-content">
        <div className="about-image">
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80" 
            alt="MR NIPUN" 
          />
        </div>
        <div className="about-info">
          <div className="info-item">
            <strong>Name:</strong> H.M. NIPUN DHANUJAYA
          </div>
          <div className="info-item">
            <strong>Age:</strong> 18
          </div>
          <div className="info-item">
            <strong>From:</strong> Sri Lanka
          </div>
          <div className="info-item">
            <strong>Contact:</strong> 
            <a href="https://wa.me/+94757255903" target="_blank">
              +94 75 725 5903
            </a>
          </div>
          <div className="about-description">
            <p>
              Hello! I'm MR NIPUN, a passionate full-stack developer and designer with expertise 
              in creating modern web applications and digital experiences. I specialize in building 
              responsive websites, web applications, and IoT solutions using technologies like 
              Java, Python, HTML/CSS, NextJS, and Arduino micro devices.
            </p>
            <p>
              I'm also skilled in photography, animation creation, and logo design, allowing me 
              to create visually appealing and engaging digital content. My goal is to combine 
              technical expertise with creative design to build innovative solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
              }
