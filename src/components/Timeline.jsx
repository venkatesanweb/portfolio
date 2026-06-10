import React, { useState } from 'react';
import './Timeline.css';

const EXPERIENCE_DATA = [
  {
    role: "Freelancer - Full Stack Developer",
    company: "Self-Employed",
    period: "May 2024 - Present",
    points: [
      "Architect and deliver end-to-end full-stack web applications for local clients.",
      "Integrate responsive frontends with Python/Django and Node.js backends.",
      "Optimize SQL database schemas and ensure clean, structured code practices."
    ],
    icon: "fa-laptop-code"
  },
  {
    role: "Web Developer Intern",
    company: "StartNet Ventures Private Limited",
    period: "Jan 2024 - Apr 2024",
    points: [
      "Engineered responsive and modular web interfaces using HTML, CSS, JavaScript, and WordPress.",
      "Built server-side queries and schema designs with MySQL databases.",
      "Improved site load speeds and ensured robust cross-browser and mobile compatibility."
    ],
    icon: "fa-briefcase"
  },
  {
    role: "Web Developer (Project-based)",
    company: "Aakam Time Management",
    period: "May 2024",
    points: [
      "Designed and deployed custom time management and productivity tools.",
      "Collaborated with project managers to refine client portal user experience."
    ],
    icon: "fa-clock"
  }
];

const EDUCATION_DATA = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Sri Shanmugha College of Engineering and Technology",
    period: "2023 - 2027 (Expected)",
    details: "Currently in 6th semester. CGPA: 8.88 / 10.0 (up to 5th semester). Active contributor to coding events and symposia.",
    icon: "fa-graduation-cap"
  },
  {
    degree: "Higher Secondary Certificate (HSC) - 12th Grade",
    institution: "Govt Higher Secondary School",
    period: "Completed May 2022",
    details: "Specialized in Computer Science & Mathematics. Secured 74% aggregate.",
    icon: "fa-school"
  }
];

export default function Timeline() {
  const [activeTab, setActiveTab] = useState('experience');

  return (
    <div className="timeline-container">
      <div className="timeline-tabs">
        <button 
          onClick={() => setActiveTab('experience')} 
          className={`timeline-tab-btn ${activeTab === 'experience' ? 'active' : ''}`}
        >
          <i className="fas fa-briefcase"></i> Experience
        </button>
        <button 
          onClick={() => setActiveTab('education')} 
          className={`timeline-tab-btn ${activeTab === 'education' ? 'active' : ''}`}
        >
          <i className="fas fa-graduation-cap"></i> Education
        </button>
      </div>

      <div className="timeline-track-wrapper">
        <div className="timeline-line-track"></div>

        {activeTab === 'experience' && (
          <div className="timeline-list">
            {EXPERIENCE_DATA.map((item, idx) => (
              <div key={idx} className="timeline-card-wrapper">
                <div className="timeline-dot-indicator">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="timeline-card glass-panel">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-role">{item.role}</h3>
                  <h4 className="timeline-company">{item.company}</h4>
                  <ul className="timeline-points">
                    {item.points.map((pt, pIdx) => (
                      <li key={pIdx}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'education' && (
          <div className="timeline-list">
            {EDUCATION_DATA.map((item, idx) => (
              <div key={idx} className="timeline-card-wrapper">
                <div className="timeline-dot-indicator">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div className="timeline-card glass-panel">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-role">{item.degree}</h3>
                  <h4 className="timeline-company">{item.institution}</h4>
                  <p className="timeline-details">{item.details}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
