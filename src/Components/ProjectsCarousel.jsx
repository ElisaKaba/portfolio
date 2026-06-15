import { useEffect, useState } from 'react';
import { getProjects } from '../services/projectsService';

function ProjectsCarousel() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadProjects() {
      const data = await getProjects();
      setProjects(data);
    }

    loadProjects();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  return (
    <section className="carousel-section projects-section">
      <div className="carousel-header">
        <p className="carousel-subtitle">Ce que j’ai réalisé</p>
        <h2>Mes projets</h2>
      </div>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={prevSlide}
          aria-label="Projet précédent"
        >
          ‹
        </button>

        <article className="carousel-card project-card">
          {currentProject.image_url && (
            <img
              className="project-image"
              src={currentProject.image_url}
              alt={currentProject.title}
            />
          )}

          <div className="project-content">
            <p className="card-category">Projet</p>
            <h3>{currentProject.title}</h3>

            <p className="card-description">
              {currentProject.short_description}
            </p>

            {currentProject.description && (
              <p className="project-long-description">
                {currentProject.description}
              </p>
            )}

            {currentProject.technologies && (
              <div className="tech-list">
                {currentProject.technologies.map((tech) => (
                  <span key={tech} className="tech-pill">
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="project-links">
              {currentProject.github_url && (
                <a
                  href={currentProject.github_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              )}

              {currentProject.demo_url && (
                <a
                  href={currentProject.demo_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  Voir le projet
                </a>
              )}
            </div>
          </div>
        </article>

        <button
          className="carousel-btn"
          onClick={nextSlide}
          aria-label="Projet suivant"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Voir ${project.title}`}
          />
        ))}
      </div>
    </section>
  );
}

export default ProjectsCarousel;