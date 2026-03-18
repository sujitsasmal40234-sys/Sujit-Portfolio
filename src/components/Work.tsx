import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdClose, MdOpenInNew } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  tools: string;
  tech: string[];
  image: string;
  live: string;
  github: string;
  featured: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Poster Design",
    category: "Graphic Design",
    description: "Boosted sales by 60% with optimized UI",
    fullDescription: "Built a seamless shopping experience with modern UI, secure payment integration, and responsive design. The platform handles 1000+ daily users with smooth performance.",
    tools: "React • Next.js • Stripe API • Tailwind CSS",
    tech: ["React", "Next.js", "Stripe", "Tailwind"],
    image: "/images/ecommerce.png",
    live: "https://poster-showcase.vercel.app/",
    github: "https://github.com/sujitsasmal40234-sys/poster-showcase",
    featured: true
  },
  {
    id: 2,
    title: "Brand Identity Design",
    category: "UI",
    description: "Complete brand overhaul for tech startup",
    fullDescription: "Created comprehensive brand identity including logo, color palette, typography system, and brand guidelines. Delivered all assets in multiple formats for web and print use.",
    tools: "Logo • Color system • Typography • Brand assets",
    tech: ["Figma", "Illustrator", "Photoshop"],
    image: "/images/branding.png",
    live: "#",
    github: "#",
    featured: true
  },
  {
    id: 3,
    title: "Motion Graphics Reel",
    category: "Motion",
    description: "Dynamic animations for social media",
    fullDescription: "Produced engaging motion graphics for Instagram reels and YouTube intros. Focused on smooth transitions, timing, and visual storytelling to capture audience attention.",
    tools: "After Effects • Cinema 4D • Premiere Pro",
    tech: ["After Effects", "Cinema 4D", "Premiere Pro"],
    image: "/images/motion.png",
    live: "https://youtube.com/yourchannel",
    github: "#",
    featured: false
  },
  {
    id: 4,
    title: "Marketing Dashboard",
    category: "Web",
    description: "Analytics dashboard for marketing team",
    fullDescription: "Designed and developed a comprehensive analytics dashboard showing real-time campaign performance, user engagement metrics, and ROI tracking with beautiful visualizations.",
    tools: "Data visualization • Real-time updates • Export features",
    tech: ["React", "D3.js", "Node.js", "MongoDB"],
    image: "/images/dashboard.png",
    live: "#",
    github: "https://github.com/yourusername/dashboard",
    featured: true
  },
  {
    id: 5,
    title: "Social Media Templates",
    category: "UI",
    description: "100+ templates for content creators",
    fullDescription: "Created versatile template library for consistent social media presence. Includes Instagram posts, stories, LinkedIn banners, and Twitter headers with easy customization options.",
    tools: "Canva • Photoshop • Figma",
    tech: ["Photoshop", "Figma", "Canva"],
    image: "/images/social.png",
    live: "#",
    github: "#",
    featured: false
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ["All", "Graphic Design", "UI", "Motion"];

  const filteredProjects =
    filter === "All"
      ? projects
      : projects.filter(p => p.category === filter);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? filteredProjects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, filteredProjects, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === filteredProjects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, filteredProjects, goToSlide]);

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
              onClick={() => {
                setFilter(cat);
                setCurrentIndex(0);
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {filteredProjects.map((project, index) => (
                <div
                  className="carousel-slide"
                  key={project.id}
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div className="project-header">
                          <h4>{project.title}</h4>
                          {project.featured && (
                            <span className="featured-tag">Featured</span>
                          )}
                        </div>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                        <div className="project-links">
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.live === "#") e.preventDefault();
                            }}
                          >
                            <MdOpenInNew /> Live
                          </a>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (project.github === "#") e.preventDefault();
                            }}
                          >
                            <FaGithub /> Code
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {filteredProjects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="modal-close"
              onClick={() => setSelectedProject(null)}
            >
              <MdClose />
            </button>

            <div className="modal-body">
              <div className="modal-image-section">
                <WorkImage
                  image={selectedProject.image}
                  alt={selectedProject.title}
                />
              </div>

              <div className="modal-info-section">
                <div className="modal-header">
                  <h2>{selectedProject.title}</h2>
                  {selectedProject.featured && (
                    <span className="featured-tag-large">Featured Project</span>
                  )}
                </div>

                <p className="modal-category">
                  Category: {selectedProject.category}
                </p>

                <p className="modal-description">
                  {selectedProject.fullDescription}
                </p>

                <div className="modal-tech-stack">
                  <h4>Tech Stack & Tools</h4>
                  <div className="tech-tags">
                    {selectedProject.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="modal-actions">
                  <a
                    href={selectedProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn primary"
                  >
                    <MdOpenInNew /> View Live
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="action-btn secondary"
                  >
                    <FaGithub /> View Code
                  </a>
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
