import React, { useState } from 'react';
import './AwardsGallery.css';

const AWARDS_DATA = [
  {
    title: "Shaastra 2026 - Reverse Coding X",
    rank: "45th Position",
    institution: "Indian Institute of Technology Madras (IITM)",
    date: "Jan 2026",
    icon: "fa-code",
    color: "blue",
    description: "Secured 45th place at the national level in the Reverse Coding contest held during Shaastra 2026."
  },
  {
    title: "Infovista 25 Symposium",
    rank: "1st Prize",
    institution: "Sri Sai Ram Engineering College",
    date: "2025",
    icon: "fa-trophy",
    color: "gold",
    description: "Won 1st prize in the national level Racecraft Algo Coding competition."
  },
  {
    title: "Project Expo - MANAV'25",
    rank: "1st Prize",
    institution: "Salem College of Engineering and Technology",
    date: "Oct 2025",
    icon: "fa-project-diagram",
    color: "emerald",
    description: "Won 1st prize in the Project Expo for presenting an innovative software architecture project."
  },
  {
    title: "Code Trackers (Python)",
    rank: "1st Prize",
    institution: "Sri Sai Ranganathan Engineering College, Coimbatore",
    date: "Sept 2025",
    icon: "fa-terminal",
    color: "purple",
    description: "Secured 1st place in the National Level Technical Symposium for Code Tracking / Python code tracing."
  },
  {
    title: "Algo-Code Debugging",
    rank: "2nd Prize",
    institution: "Rathinam Technical Campus",
    date: "March 2025",
    icon: "fa-bug",
    color: "rose",
    description: "Won 2nd prize at the national level student festival for algorithmic debugging challenges."
  },
  {
    title: "Code Debugging",
    rank: "1st Prize",
    institution: "R P Sarathy College of Engineering",
    date: "2025",
    icon: "fa-laptop-code",
    color: "gold",
    description: "Won 1st prize in the speed debugging contest resolving complex runtime errors and memory leaks."
  },
  {
    title: "Vibethon - Hackathon",
    rank: "4th Prize",
    institution: "KSR College of Engineering",
    date: "2024",
    icon: "fa-lightbulb",
    color: "orange",
    description: "Finished 4th in a 24-hour hackathon for building responsive web applications."
  },
  {
    title: "Rev Coding - Computations",
    rank: "3rd Prize",
    institution: "RV Institute of Technology",
    date: "2025",
    icon: "fa-microchip",
    color: "blue",
    description: "Secured 3rd prize in the Rev Coding competition at the national level Computations event."
  },
  {
    title: "Code Debugging",
    rank: "3rd Prize",
    institution: "KSR College of Engineering",
    date: "2025",
    icon: "fa-bug",
    color: "purple",
    description: "Won 3rd prize in the Code Debugging contest, resolving complex algorithmic errors under time pressure."
  }
];

const CERTIFICATIONS_DATA = [
  {
    title: "Full-Stack Web Development",
    issuer: "Infosys Springboard",
    image: "/certificates/Fullstack_development.png",
    description: "Completed comprehensive hands-on training in Java, Spring Boot, HTML, CSS, JavaScript, MySQL, and REST API development."
  },
  {
    title: "Python with Django",
    issuer: "Infosys Springboard",
    image: "/certificates/django.png",
    description: "Hands-on training in Python programming and building MVC web applications using the Django web framework."
  },
  {
    title: "Frontend Development HTML",
    issuer: "Great Learning",
    image: "/certificates/html.png",
    description: "Professional training on HTML5 structure, semantics, and responsive web principles."
  },
  {
    title: "Problem Solving and Python",
    issuer: "Ebox",
    image: "/certificates/python.jpg",
    description: "Completed advanced problem-solving challenges and structured Python programming courses."
  },
  {
    title: "Prompt Engineering for Everyone",
    issuer: "IBM Cognitive Class",
    image: "/certificates/prompt_engineering.png",
    description: "Successfully completed and received a passing grade in Prompt Engineering (AI0117EN) on cognitiveclass.ai powered by IBM Developer Skills Network. Issued July 10, 2025."
  },
  {
    title: "Android Developer Virtual Internship",
    issuer: "Google for Developers / AICTE EduSkills",
    image: "/certificates/android_internship.png",
    description: "Completed 10 weeks of Android Developer Virtual Internship (July–September 2024) supported by India Edu Program – Google for Developers via National Internship Portal & AICTE."
  },
  {
    title: "Programming In Java – Elite",
    issuer: "NPTEL / IIT Kharagpur",
    image: "/certificates/nptel_java.png",
    description: "NPTEL Online Certification (Elite) for Programming in Java with a consolidated score of 73%. 12-week course, Jan–Apr 2025. Funded by MoE, Govt. of India. IIT Kharagpur."
  },
  {
    title: "AI-ML Virtual Internship",
    issuer: "Google for Developers / AICTE EduSkills",
    image: "/certificates/aiml_internship.png",
    description: "Completed 10 weeks of AI-ML Virtual Internship (April–June 2025) with Grade A. Supported by India Edu Program – Google for Developers via AICTE EduSkills."
  },
  {
    title: "S.O.L.I.D Principles Masterclass",
    issuer: "Scaler Masterclass",
    image: "/certificates/scaler_solid.png",
    description: "Certificate of Participation for upskilling in S.O.L.I.D Principles Every Developer Must Know – Scaler Masterclass, 11th November 2025."
  }
];

export default function AwardsGallery() {
  const [activeTab, setActiveTab] = useState('awards');
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <div className="awards-gallery-container">
      <div className="gallery-tabs">
        <button 
          onClick={() => setActiveTab('awards')} 
          className={`gallery-tab-btn ${activeTab === 'awards' ? 'active' : ''}`}
        >
          <i className="fas fa-award"></i> Coding Awards
        </button>
        <button 
          onClick={() => setActiveTab('certs')} 
          className={`gallery-tab-btn ${activeTab === 'certs' ? 'active' : ''}`}
        >
          <i className="fas fa-certificate"></i> Certifications
        </button>
      </div>

      {activeTab === 'awards' && (
        <div className="awards-grid">
          {AWARDS_DATA.map((award, idx) => (
            <div key={idx} className="award-card glass-panel">
              <div className={`award-icon-wrapper ${award.color}`}>
                <i className={`fas ${award.icon}`}></i>
              </div>
              <div className="award-card-info">
                <span className="award-badge-date">{award.date}</span>
                <h3 className="award-card-title">{award.title}</h3>
                <h4 className="award-card-rank">{award.rank}</h4>
                <p className="award-card-inst">{award.institution}</p>
                <p className="award-card-desc">{award.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'certs' && (
        <div className="certs-grid">
          {CERTIFICATIONS_DATA.map((cert, idx) => (
            <div key={idx} className="cert-card glass-panel" onClick={() => setLightboxImage(cert.image)}>
              <div 
                className="cert-card-image"
                style={{ backgroundImage: `url(${cert.image})` }}
              />
              <div className="cert-card-content">
                <h3 className="cert-card-title">{cert.title}</h3>
                <h4 className="cert-card-issuer">{cert.issuer}</h4>
                <p className="cert-card-desc">{cert.description}</p>
                <span className="cert-zoom-hint">
                  <i className="fas fa-search-plus"></i> Click to Zoom
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {lightboxImage && (
        <div className="lightbox" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setLightboxImage(null)}>&times;</button>
            <img src={lightboxImage} alt="Certificate Zoom" className="lightbox-img" />
          </div>
        </div>
      )}
    </div>
  );
}
