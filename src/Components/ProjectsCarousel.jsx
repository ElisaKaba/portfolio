import { useEffect, useRef, useState } from "react";
import { getProjects } from "../services/projectsService";
import { NavLink } from "react-router-dom";

function ProjectsCarousel() {
  const [projects, setProjects] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

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

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const handleTouchStart = (event) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return;
    }

    const distance = touchStartX.current - touchEndX.current;
    const minimumSwipeDistance = 50;

    if (distance > minimumSwipeDistance) {
      nextSlide();
    }

    if (distance < -minimumSwipeDistance) {
      prevSlide();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (projects.length === 0) {
    return null;
  }

  const currentProject = projects[currentIndex];

  const technologies = currentProject.technologies || [];
  const visibleTechnologies = technologies.slice(0, 5);
  const hiddenTechnologiesCount = technologies.length - visibleTechnologies.length;

  return (
    <section className="projects-carousel-section">
      <div className="projects-carousel-header">
        <p className="projects-carousel-subtitle">Ce que j’ai réalisé</p>

        <h1>Mes projets web</h1>

        <p>Découvrez quelques projets réalisés en React, JavaScript, HTML/CSS et SCSS.</p>

        <p>
          Sites vitrines, applications frontend, interfaces dynamiques et projets de
          formation.
        </p>
      </div>

      <div
        className="projects-carousel-wrapper"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="projects-carousel-btn projects-carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Projet précédent"
          type="button"
        >
          ‹
        </button>

        <article className="projects-carousel-card">
          {currentProject.image_url && (
            <button
              className="projects-carousel-thumbnail-button"
              type="button"
              onClick={() =>
                setSelectedImage({
                  src: currentProject.image_url,
                  alt: currentProject.title,
                })
              }
              aria-label={`Agrandir l’aperçu du projet ${currentProject.title}`}
            >
              <img
                className="projects-carousel-thumbnail"
                src={currentProject.image_url}
                alt={`Aperçu du projet ${currentProject.title}`}
              />

              <span className="projects-carousel-thumbnail-label">Agrandir</span>
            </button>
          )}

          <div className="projects-carousel-content">
            <p className="projects-carousel-category">
              {currentProject.category || "Projet"}
            </p>

            <h3>{currentProject.title}</h3>

            {currentProject.short_description && (
              <p className="projects-carousel-short-description">
                {currentProject.short_description}
              </p>
            )}

            {currentProject.description && (
              <p className="projects-carousel-long-description">
                {currentProject.description}
              </p>
            )}

            {technologies.length > 0 && (
              <div className="projects-carousel-tech-list">
                {visibleTechnologies.map((tech) => (
                  <span key={tech} className="projects-carousel-tech-pill">
                    {tech}
                  </span>
                ))}

                {hiddenTechnologiesCount > 0 && (
                  <span className="projects-carousel-tech-pill projects-carousel-tech-more">
                    +{hiddenTechnologiesCount}
                  </span>
                )}
              </div>
            )}

            <div className="projects-carousel-links">
              {currentProject.github_url && (
                <a
                  href={currentProject.github_url}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-carousel-link"
                >
                  GitHub
                </a>
              )}

              {currentProject.demo_url && (
                <a
                  href={currentProject.demo_url}
                  target="_blank"
                  rel="noreferrer"
                  className="projects-carousel-link"
                >
                  Voir le projet
                </a>
              )}

              {currentProject.slug === "portfolio-elisa-kaba" && (
                <NavLink to="/services" className="projects-carousel-link">
                  Voir mes services
                </NavLink>
              )}
            </div>
          </div>
        </article>

        <button
          className="projects-carousel-btn projects-carousel-btn-next"
          onClick={nextSlide}
          aria-label="Projet suivant"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="projects-carousel-dots">
        {projects.map((project, index) => (
          <button
            key={project.id}
            className={`projects-carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Voir ${project.title}`}
            type="button"
          />
        ))}
      </div>

      {selectedImage && (
        <div className="projects-image-modal" onClick={closeImageModal}>
          <div
            className="projects-image-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="projects-image-modal-close"
              type="button"
              onClick={closeImageModal}
              aria-label="Fermer l’image agrandie"
            >
              ×
            </button>

            <img
              src={selectedImage.src}
              alt={`Aperçu agrandi du projet ${selectedImage.alt}`}
              className="projects-image-modal-img"
            />
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsCarousel;
