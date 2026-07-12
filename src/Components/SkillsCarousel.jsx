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
    setCurrentIndex((prevIndex) =>
      prevIndex === skills.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? skills.length - 1 : prevIndex - 1
    );
  };

  if (skills.length === 0) {
    return null;
  }

  const currentSkill = skills[currentIndex];

  return (
    <section className="skills-carousel-section">
      <div className="skills-carousel-header">
        <p className="skills-carousel-subtitle">Ce que je sais faire</p>
        <h2>Mes compétences</h2>
      </div>

      <div className="skills-carousel-stage">
        <button
          className="skills-carousel-btn skills-carousel-btn-prev"
          onClick={prevSlide}
          aria-label="Compétence précédente"
          type="button"
        >
          ‹
        </button>

        <article className="skills-carousel-card">
          <div className="skills-carousel-icon">
            {currentSkill.icon || "✦"}
          </div>

          <p className="skills-carousel-category">{currentSkill.category}</p>

          <h3>{currentSkill.name}</h3>

          <p className="skills-carousel-description">
            {currentSkill.description}
          </p>

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

        <button
          className="skills-carousel-btn skills-carousel-btn-next"
          onClick={nextSlide}
          aria-label="Compétence suivante"
          type="button"
        >
          ›
        </button>
      </div>

      <div className="skills-carousel-dots">
        {skills.map((skill, index) => (
          <button
            key={skill.id}
            className={`skills-carousel-dot ${
              index === currentIndex ? "active" : ""
            }`}
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