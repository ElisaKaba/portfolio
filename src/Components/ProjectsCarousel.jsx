import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { getProjects } from "../services/projectsService";

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
    setCurrentIndex((previousIndex) =>
      previousIndex === projects.length - 1 ? 0 : previousIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? projects.length - 1 : previousIndex - 1
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
    <main className="projects-carousel-page">
      <section className="projects-carousel-hero">
        <p className="projects-carousel-hero-label">Ce que j’ai réalisé</p>

        <h1>Mes projets web</h1>

        <p className="projects-carousel-hero-text">
          Découvrez quelques projets réalisés en React, JavaScript, HTML/CSS et SCSS.
        </p>

        <p className="projects-carousel-hero-text">
          Sites vitrines, applications frontend, interfaces dynamiques et projets de
          formation.
        </p>
      </section>

      <section className="projects-carousel-section">
        <div
          className="projects-carousel-wrapper"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <article className="projects-carousel-card">
            {currentProject.image_url && (
              <button
                className="projects-carousel-image-button"
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
                  className="projects-carousel-image"
                  src={currentProject.image_url}
                  alt={`Aperçu du projet ${currentProject.title}`}
                  loading="lazy"
                />

                <span className="projects-carousel-image-label">Agrandir</span>
              </button>
            )}

            <div className="projects-carousel-content">
              <div className="projects-carousel-text-zone">
                <p className="projects-carousel-category">
                  {currentProject.category || "Projet"}
                </p>

                <h2>{currentProject.title}</h2>

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
              </div>

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

          <div className="projects-carousel-arrows">
            <button
              className="projects-carousel-arrow projects-carousel-arrow-prev"
              type="button"
              onClick={prevSlide}
              aria-label="Projet précédent"
            >
              ‹
            </button>

            <button
              className="projects-carousel-arrow projects-carousel-arrow-next"
              type="button"
              onClick={nextSlide}
              aria-label="Projet suivant"
            >
              ›
            </button>
          </div>
        </div>

        <div className="projects-carousel-dots">
          {projects.map((project, index) => (
            <button
              key={project.id}
              className={`projects-carousel-dot ${
                index === currentIndex ? "active" : ""
              }`}
              type="button"
              onClick={() => setCurrentIndex(index)}
              aria-label={`Voir ${project.title}`}
            />
          ))}
        </div>
      </section>

      {selectedImage && (
        <div className="projects-carousel-modal" onClick={closeImageModal}>
          <div
            className="projects-carousel-modal-content"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              className="projects-carousel-modal-close"
              type="button"
              onClick={closeImageModal}
              aria-label="Fermer l’image agrandie"
            >
              ×
            </button>

            <img
              className="projects-carousel-modal-image"
              src={selectedImage.src}
              alt={`Aperçu agrandi du projet ${selectedImage.alt}`}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default ProjectsCarousel;
