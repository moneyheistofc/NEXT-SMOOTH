export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "Java", icon: "fab fa-java", desc: "Backend Development" },
        { name: "Python", icon: "fab fa-python", desc: "Scripting & Automation" }
      ]
    },
    {
      title: "Web Development",
      skills: [
        { name: "HTML/CSS", icon: "fab fa-html5", desc: "Frontend Development" },
        { name: "NextJS", icon: "fab fa-react", desc: "React Framework" },
        { name: "Web Server", icon: "fas fa-server", desc: "Server Management" }
      ]
    },
    {
      title: "Other Skills",
      skills: [
        { name: "Arduino Micro Devices", icon: "fas fa-microchip", desc: "IoT Development" },
        { name: "Photography", icon: "fas fa-camera", desc: "Creative Photography" },
        { name: "Animation", icon: "fas fa-film", desc: "Motion Graphics" },
        { name: "Logo Design", icon: "fas fa-palette", desc: "Brand Identity" }
      ]
    }
  ];

  return (
    <section className="skills-section" id="skills">
      <h2 className="section-title">My Skills</h2>
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.title}</h3>
            <div className="skill-items">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="skill-item">
                  <i className={skill.icon}></i>
                  <div className="skill-item-content">
                    <h4>{skill.name}</h4>
                    <p>{skill.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
          }
