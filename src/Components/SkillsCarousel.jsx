import { useEffect, useState } from 'react';
import { getSkills } from '../services/skillsService';


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
    <section className="carousel-section">
      <div className="carousel-header">
        <p className="carousel-subtitle">Ce que je sais faire</p>
        <h2>Mes compétences</h2>
      </div>

      <div className="carousel-wrapper">
        <button
          className="carousel-btn"
          onClick={prevSlide}
          aria-label="Compétence précédente"
        >
          ‹
        </button>

        <article className="carousel-card skill-card">
          <div className="card-icon">{currentSkill.icon || '✦'}</div>

          <p className="card-category">{currentSkill.category}</p>
          <h3>{currentSkill.name}</h3>
          <p className="card-description">{currentSkill.description}</p>

          {currentSkill.level && (
            <div className="level-wrapper">
              <span>Niveau</span>
              <div className="level-bar">
                <div
                  className="level-fill"
                  style={{ width: `${currentSkill.level * 20}%` }}
                />
              </div>
            </div>
          )}
        </article>

        <button
          className="carousel-btn"
          onClick={nextSlide}
          aria-label="Compétence suivante"
        >
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {skills.map((skill, index) => (
          <button
            key={skill.id}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Voir ${skill.name}`}
          />
        ))}
      </div>
    </section>
  );
}

export default SkillsCarousel;