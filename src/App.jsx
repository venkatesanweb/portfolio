import React, { useState, useEffect } from 'react';
import TerminalWidget from './components/TerminalWidget';
import ProjectCard from './components/ProjectCard';
import Timeline from './components/Timeline';
import AwardsGallery from './components/AwardsGallery';
import ContactForm from './components/ContactForm';
import './App.css';

const PROJECTS = [
  {
    id: 1,
    title: "College Admission Portal",
    description: "Designed and built a full-stack College Admission Management System using React, Spring Boot, and MySQL.",
    longDescription: "A comprehensive digital solution that automates the college admissions process. Students can apply, upload transcripts, track application status, and view results. Admins and approvers benefit from automated workflows, role-based dashboards, and audit logs. The system is secured using JSON Web Tokens (JWT) for authentication and authorization.",
    tech: ["React", "Spring Boot", "MySQL", "JWT", "REST API", "Git"],
    category: "react-fullstack",
    image: "/certificates/admission_portal.png",
    github: "https://github.com/venkatesanweb/College-Admission-Portal",
    live: null
  },
  {
    id: 2,
    title: "Amazon Clone (Frontend)",
    description: "A responsive Amazon e-commerce storefront replica built using pure frontend technologies.",
    longDescription: "Replicates the key UI designs and user flows of the Amazon shopping portal. Features a responsive grid of products, simulated cart count calculations, slider carousels, and search bar layout. Entirely responsive across mobile, tablet, and desktop screens.",
    tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
    category: "frontend-js",
    image: "/certificates/amazon-2.png",
    github: "https://github.com/venkatesanweb/Amazon_copy",
    live: "https://venkatesanweb.github.io/Amazon_copy/amazon.html"
  },
  {
    id: 3,
    title: "Rock-Paper-Scissors Game",
    description: "Interactive browser-based game featuring persistent local storage and CSS animations.",
    longDescription: "A fully styled, engaging game allowing the player to compete against the computer. Keeps track of wins, losses, and ties across sessions using localStorage. Includes sound-like timing delays, hover interactions, and micro-animations.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    category: "frontend-js",
    image: "/certificates/image.png",
    github: "https://github.com/venkatesanweb/Play-game",
    live: "https://venkatesanweb.github.io/Play-game/game.html"
  },
  {
    id: 4,
    title: "Full Stack Blog Website",
    description: "A secure multi-user blog application built with Django backend and MySQL databases.",
    longDescription: "Allows users to register, log in, create blog posts, comment on posts, and edit/delete their own content. The backend handles secure cookie sessions, CSRF protection, file storage for post media, and relational database queries with MySQL.",
    tech: ["Python", "Django", "MySQL", "HTML5", "CSS3"],
    category: "react-fullstack",
    image: "/certificates/blog_app.png",
    github: "https://github.com/venkatesanweb/blog_app",
    live: null
  },
  {
    id: 5,
    title: "Shop_Fusion (E-commerce)",
    description: "A modern, responsive online shopping interface with catalog filtration and cart drawer.",
    longDescription: "A premium UI storefront showing catalog filters (by category and pricing), animated fly-to-cart drawers, product details modal cards, and responsive form checkout processes.",
    tech: ["HTML5", "CSS3", "JavaScript", "UX Design"],
    category: "frontend-js",
    image: "/certificates/Shop_fussion.png",
    github: "https://github.com/venkatesanweb/Purching_app",
    live: null
  },
  {
    id: 6,
    title: "Password Manager App",
    description: "A secure password manager application to store, manage, and retrieve credentials safely.",
    longDescription: "A full-featured password manager that allows users to securely store and manage their credentials. Features include encrypted password storage, master password authentication, category-based organization, and a clean intuitive interface for easy retrieval of saved credentials.",
    tech: ["HTML5", "CSS3", "JavaScript", "Local Storage"],
    category: "frontend-js",
    image: "/certificates/password_manager.png",
    github: "https://github.com/venkatesanweb/Password_manager",
    live: null
  }
];


const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C / C++", level: 85, icon: "fa-terminal" },
      { name: "Java", level: 80, icon: "fa-mug-hot" },
      { name: "Python", level: 75, icon: "fa-code" },
      { name: "JavaScript (ES6+)", level: 85, icon: "fa-js-square" }
    ]
  },
  {
    title: "Frontend & Full Stack",
    skills: [
      { name: "React.js", level: 85, icon: "fa-react" },
      { name: "HTML5 / CSS3", level: 90, icon: "fa-html5" },
      { name: "Spring Boot", level: 70, icon: "fa-leaf" },
      { name: "Django", level: 75, icon: "fa-cubes" },
      { name: "WordPress", level: 80, icon: "fa-wordpress" }
    ]
  },
  {
    title: "Databases & Tools",
    skills: [
      { name: "MySQL", level: 80, icon: "fa-database" },
      { name: "Git / GitHub", level: 85, icon: "fa-git-alt" },
      { name: "Maven / Gradle", level: 70, icon: "fa-box-open" },
      { name: "VS Code", level: 90, icon: "fa-laptop" }
    ]
  },
  {
    title: "Concepts & Soft Skills",
    skills: [
      { name: "Data Structures & Algos", level: 85, icon: "fa-brain" },
      { name: "Object Oriented (OOP)", level: 85, icon: "fa-sitemap" },
      { name: "System Design", level: 70, icon: "fa-network-wired" },
      { name: "Problem Solving", level: 90, icon: "fa-lightbulb" }
    ]
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll section detector
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'coding', 'projects', 'skills', 'experience', 'awards', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProjects = activeFilter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <div className="portfolio-app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <a href="#home" className="nav-logo">
            <i className="fas fa-code"></i> VENKATESAN.DEV
          </a>
          <ul className={`nav-menu ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            <li><a href="#home" className={`nav-link ${activeSection === 'home' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Home</a></li>
            <li><a href="#coding" className={`nav-link ${activeSection === 'coding' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Coding Profiles</a></li>
            <li><a href="#projects" className={`nav-link ${activeSection === 'projects' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Projects</a></li>
            <li><a href="#skills" className={`nav-link ${activeSection === 'skills' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Skills</a></li>
            <li><a href="#experience" className={`nav-link ${activeSection === 'experience' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Timeline</a></li>
            <li><a href="#awards" className={`nav-link ${activeSection === 'awards' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Achievements</a></li>
            <li><a href="#contact" className={`nav-link ${activeSection === 'contact' ? 'active' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact</a></li>
          </ul>
          <button className="nav-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <div className="hero-text-side">
              <span className="hero-greeting"><i className="fas fa-sparkles"></i> Welcom to my space</span>
              <h1 className="glow-text">Hello, I'm <span className="glow-text-accent">Venkatesan Kumar</span></h1>
              <h2>Associate Software Developer</h2>
              <p className="hero-bio">
                B.Tech Information Technology student at Sri Shanmugha College of Engineering. Specializing in React, front-end optimization, and clean MVC frameworks. I compete regularly in algorithmic coding symposia and national-level hackathons.
              </p>
              <div className="hero-cta-buttons">
                <a href="#contact" className="btn-primary">
                  <i className="fas fa-paper-plane"></i> Get In Touch
                </a>
                <a href="/Venkatesankumarresume.pdf" download="Venkatesan_Kumar_Resume.pdf" className="btn-secondary">
                  <i className="fas fa-download"></i> Get Resume
                </a>
              </div>
            </div>
            <div className="hero-widget-side">
              <TerminalWidget />
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Coding Profiles */}
      <section id="coding" className="coding-section">
        <div className="container">
          <h2 className="section-title">Competitive Programming</h2>
          <div className="coding-profiles-grid">
            <div className="coding-card glass-panel">
              <div className="coding-card-header">
                <div className="brand-logo leetcode">
                  <i className="fas fa-code"></i>
                </div>
                <h3>LeetCode</h3>
              </div>
              <p className="profile-handle">@VENKATESAN_k</p>
              <div className="coding-stats">
                <div className="stat-row">
                  <span>Solved Problems</span>
                  <span className="stat-val">750+</span>
                </div>
                <div className="stat-row">
                  <span>Difficulty</span>
                  <span className="stat-val text-success">Easy / Medium / Hard</span>
                </div>
              </div>
              <a href="https://leetcode.com/u/VENKATESAN_k/" target="_blank" rel="noopener noreferrer" className="btn-secondary coding-profile-link">
                <i className="fas fa-external-link-alt"></i> View Profile
              </a>
            </div>

            <div className="coding-card glass-panel">
              <div className="coding-card-header">
                <div className="brand-logo codeforces">
                  <i className="fas fa-chart-line"></i>
                </div>
                <h3>Codeforces</h3>
              </div>
              <p className="profile-handle">@venkatesan.kumarsivan</p>
              <div className="coding-stats">
                <div className="stat-row">
                  <span>Solved Problems</span>
                  <span className="stat-val">250+</span>
                </div>
                <div className="stat-row">
                  <span>Languages</span>
                  <span className="stat-val text-success">C++ / Java</span>
                </div>
              </div>
              <a href="https://codeforces.com/profile/venkatesan.kumarsivan" target="_blank" rel="noopener noreferrer" className="btn-secondary coding-profile-link">
                <i className="fas fa-external-link-alt"></i> View Profile
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <h2 className="section-title">My Projects</h2>
          
          <div className="project-filters">
            <button onClick={() => setActiveFilter('all')} className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}>All</button>
            <button onClick={() => setActiveFilter('react-fullstack')} className={`filter-btn ${activeFilter === 'react-fullstack' ? 'active' : ''}`}>React & Fullstack</button>
            <button onClick={() => setActiveFilter('frontend-js')} className={`filter-btn ${activeFilter === 'frontend-js' ? 'active' : ''}`}>Frontend JS</button>
          </div>

          <div className="projects-grid">
            {filteredProjects.map(project => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onOpenDetails={setSelectedProject} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <h2 className="section-title">My Skillset</h2>
          <div className="skills-grid">
            {SKILL_CATEGORIES.map((cat, catIdx) => (
              <div key={catIdx} className="skills-category-card glass-panel">
                <h3 className="category-title">{cat.title}</h3>
                <div className="skills-list">
                  {cat.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="skill-item">
                      <div className="skill-info">
                        <span className="skill-name-wrapper">
                          <i className={`fab ${skill.icon.startsWith('fa-r') || skill.icon.startsWith('fa-h') || skill.icon.startsWith('fa-j') || skill.icon.startsWith('fa-w') || skill.icon.startsWith('fa-g') ? 'fab' : 'fas'} ${skill.icon}`}></i>
                          {skill.name}
                        </span>
                        <span className="skill-percent">{skill.level}%</span>
                      </div>
                      <div className="progress-bar-track">
                        <div className="progress-bar-fill" style={{ width: `${skill.level}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="experience" className="timeline-section">
        <div className="container">
          <h2 className="section-title">Experience & Education</h2>
          <Timeline />
        </div>
      </section>

      {/* Awards Section */}
      <section id="awards" className="awards-section">
        <div className="container">
          <h2 className="section-title">Awards & Symposia</h2>
          <AwardsGallery />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Let's Connect</h2>
          <div className="contact-grid">
            <div className="contact-info-panel glass-panel">
              <h3>Reach Out Anytime</h3>
              <p>Feel free to ping me for internships, freelance services, full stack collaborations, or algorithm discussion!</p>
              
              <div className="info-items">
                <div className="info-item">
                  <div className="info-icon"><i className="fas fa-envelope"></i></div>
                  <div className="info-text">
                    <h4>Email</h4>
                    <p>venkatesan.kumarsivan@gmail.com</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><i className="fas fa-phone-alt"></i></div>
                  <div className="info-text">
                    <h4>Phone</h4>
                    <p>+91 6374717300</p>
                  </div>
                </div>
                
                <div className="info-item">
                  <div className="info-icon"><i className="fas fa-map-marker-alt"></i></div>
                  <div className="info-text">
                    <h4>Location</h4>
                    <p>Tamil Nadu, India</p>
                  </div>
                </div>
              </div>

              <div className="social-links-footer">
                <a href="https://github.com/venkatesanweb" target="_blank" rel="noreferrer" title="GitHub"><i className="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/venkatesan-kumar-71b8702b8/" target="_blank" rel="noreferrer" title="LinkedIn"><i className="fab fa-linkedin"></i></a>
                <a href="https://leetcode.com/u/VENKATESAN_k/" target="_blank" rel="noreferrer" title="LeetCode"><i className="fas fa-code"></i></a>
                <a href="https://codeforces.com/profile/venkatesan.kumarsivan" target="_blank" rel="noreferrer" title="Codeforces"><i className="fas fa-chart-line"></i></a>
              </div>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-panel">
        <div className="container footer-container">
          <p>&copy; {new Date().getFullYear()} Venkatesan Kumar. All rights reserved.</p>
          <p className="footer-subtext">Engineered with React & Vanilla CSS</p>
        </div>
      </footer>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="project-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-modal glass-panel" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={() => setSelectedProject(null)}>&times;</button>
            <div 
              className="modal-hero-image"
              style={{ backgroundImage: `url(${selectedProject.image})` }}
            />
            <div className="modal-body-content">
              <h3 className="modal-project-title">{selectedProject.title}</h3>
              <div className="modal-project-tags">
                {selectedProject.tech.map((t, idx) => (
                  <span key={idx} className="tech-badge">{t}</span>
                ))}
              </div>
              <p className="modal-project-desc">{selectedProject.longDescription}</p>
              <div className="modal-footer-links">
                {selectedProject.github && (
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                    <i className="fab fa-github"></i> View GitHub
                  </a>
                )}
                {selectedProject.live && (
                  <a href={selectedProject.live} target="_blank" rel="noopener noreferrer" className="btn-primary">
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
