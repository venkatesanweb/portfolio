import React from 'react';
import './ProjectCard.css';

export default function ProjectCard({ project, onOpenDetails }) {
  const { title, description, tech, image, github, live } = project;

  return (
    <div className="project-card glass-panel" onClick={() => onOpenDetails(project)}>
      <div 
        className="project-card-image" 
        style={{ backgroundImage: `url(${image || '/certificates/placeholder.png'})` }}
      >
        <div className="project-card-overlay">
          <button className="view-details-btn">
            <i className="fas fa-expand-alt"></i> View Details
          </button>
        </div>
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-desc">{description}</p>
        <div className="project-card-tech">
          {tech.slice(0, 3).map((item, idx) => (
            <span key={idx} className="tech-badge">{item}</span>
          ))}
          {tech.length > 3 && <span className="tech-badge-more">+{tech.length - 3}</span>}
        </div>
        <div className="project-card-links" onClick={(e) => e.stopPropagation()}>
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="card-link-btn" title="View Source Code">
              <i className="fab fa-github"></i> Code
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer" className="card-link-btn primary" title="View Live Demo">
              <i className="fas fa-external-link-alt"></i> Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
