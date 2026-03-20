import { useState, useRef } from "react";
import "./styles/Work.css";
import "./styles/WorkEnhancements.css";
import WorkImage from "./WorkImage";
import { MdArrowForward, MdClose, MdLink } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { projects } from "../data/projects";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [filter, setFilter] = useState("All");
  const gridRef = useRef<HTMLDivElement>(null);

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  useGSAP(() => {
    if (gridRef.current) {
      gsap.fromTo(
        ".project-card",
        { y: 30, opacity: 0, scale: 0.9 },
        { 
          y: 0, 
          opacity: 1, 
          scale: 1, 
          duration: 0.6, 
          stagger: 0.05, 
          ease: "back.out(1.7)",
          clearProps: "all"
        }
      );
    }
  }, { dependencies: [filter], scope: gridRef });

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${filter === cat ? "active" : ""}`}
              onClick={() => setFilter(cat)}
              data-cursor="disable"
            >
              {cat}
            </button>
          ))}
        </div>
        
        <div className="projects-grid" ref={gridRef}>
          {filteredProjects.map((project) => (
            <div 
              className="project-card" 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-cursor="disable"
            >
              <div className="project-card-image">
                <WorkImage image={project.image} alt={project.title} />
                {project.featured && (
                  <span className="featured-badge">Featured</span>
                )}
              </div>
              
              <div className="project-card-content">
                <span className="project-card-category">{project.category}</span>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                
                <div className="project-card-footer">
                  <div className="project-card-links">
                     {project.live && <span className="view-link">View Live <MdArrowForward /></span>}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setSelectedProject(null)}
              aria-label="Close modal"
            >
              <MdClose />
            </button>
            
            <div className="modal-body">
              <div className="modal-image-section">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="modal-image"
                />
              </div>
              
              <div className="modal-info-section">
                <h3>{selectedProject.title}</h3>
                <p className="modal-category">{selectedProject.category}</p>
                <p className="modal-description">{selectedProject.fullDescription}</p>
                
                <div className="modal-tools">
                  <strong>Tools & Technologies:</strong>
                  <p>{selectedProject.tools}</p>
                </div>
                
                <div className="modal-links">
                  {selectedProject.live && (
                    <a href={selectedProject.live} className="modal-link" target="_blank" rel="noopener noreferrer">
                      <MdLink /> Live Demo
                    </a>
                  )}
                  {selectedProject.github && (
                    <a href={selectedProject.github} className="modal-link" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Work;
