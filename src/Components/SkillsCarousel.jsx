import { useEffect, useState } from "react";
import { getSkills } from "../services/skillsService";

function SkillsCarousel() {
  const [skills, setSkills] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function loadSkills() {
      const data = await getSkills();
      setSkills(data);
    }

    loadSkills();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === skills.length - 1 ? 0 : previousIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((previousIndex) =>
      previousIndex === 0 ? skills.length - 1 : previousIndex - 1
    );
  };

  const getSkillIconLabel = (icon, name) => {
    const labels = {
      react: "React",
      javascript: "JavaScript",
      "html-css": "HTML/CSS",
      "ux-ui": "UX/UI",
      responsive: "Responsive",
      angular: "Angular",
      java: "Java",
      database: "Database",
      supabase: "Supabase",
      strapi: "Strapi",
      github: "GitHub",
      design: "Design",
      analyse: "Analyse",
      "project-management": "Projet",
      "human-skills": "Humain",
    };

    return labels[icon] || name || "Compétence";
  };

  if (skills.length === 0) {
    return null;
  }

  const currentSkill = skills[currentIndex];

  return (
    <section className="skills-carousel-section" id="competences">
      <div className="skills-carousel-hero">
        <p className="skills-carousel-hero-label">Ce que je sais faire</p>

        <h2>Mes compétences</h2>

        <p className="skills-carousel-hero-text">
          Des compétences frontend, techniques et humaines au service d’interfaces
          claires, accessibles et agréables à utiliser.
        </p>
      </div>

      <div className="skills-carousel-wrapper">
        <article className="skills-carousel-card">
          <div className="skills-carousel-text-zone">
            <div className="skills-carousel-icon">
              {getSkillIconLabel(currentSkill.icon, currentSkill.name)}
            </div>

            <p className="skills-carousel-category">{currentSkill.category}</p>

            <h3>{currentSkill.name}</h3>

            <p className="skills-carousel-description">{currentSkill.description}</p>
          </div>

          {currentSkill.level && (
            <div className="skills-carousel-level-wrapper">
              <span>Niveau</span>

              <div className="skills-carousel-level-bar">
                <div
                  className="skills-carousel-level-fill"
                  style={{ width: `${currentSkill.level * 20}%` }}
                />
              </div>
            </div>
          )}
        </article>

        <div className="skills-carousel-arrows">
          <button
            className="skills-carousel-arrow skills-carousel-arrow-prev"
            onClick={prevSlide}
            aria-label="Compétence précédente"
            type="button"
          >
            ‹
          </button>

          <button
            className="skills-carousel-arrow skills-carousel-arrow-next"
            onClick={nextSlide}
            aria-label="Compétence suivante"
            type="button"
          >
            ›
          </button>
        </div>
      </div>

      <div className="skills-carousel-dots">
        {skills.map((skill, index) => (
          <button
            key={skill.id}
            className={`skills-carousel-dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Voir ${skill.name}`}
            type="button"
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsCarousel;
