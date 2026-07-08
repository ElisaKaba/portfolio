import React from "react";
import { NavLink } from "react-router-dom";

const QuiSuisJe = () => {
  return (
    <main className="qui-suis-je-page">
      <section className="PhotoEtPrez">
        <div className="photo-wrapper">
          <img
            src="/img/photoElisa.jpg"
            alt="Portrait d’Elisa Kaba"
            className="photoElisa"
          />
        </div>

        <div className="presentation">
          <p className="intro-label">Qui suis-je ?</p>

          <h1>Développeuse frontend, sensible à l’UX/UI et aux usages humains</h1>

          <div className="textDePresentation">
            <p>
              Issue d’un parcours en sciences humaines et du secteur social,
              j’ai longtemps travaillé auprès de publics variés avant de me
              reconvertir dans le développement web. Cette première expérience
              m’a permis de développer des compétences qui restent aujourd’hui
              au cœur de ma pratique : l’écoute, l’analyse des besoins, le
              travail en équipe, la gestion de projet, l’autonomie et le sens
              des responsabilités.
            </p>

            <p>
              En 2021, j’ai choisi de faire de mon intérêt pour l’informatique
              un métier. J’ai d’abord suivi une formation de développeuse
              frontend chez OpenClassrooms, puis j’ai complété mon parcours avec
              une formation de développeuse d’applications, me permettant de
              travailler avec des technologies comme React, Angular, JavaScript,
              Java et les bases de données.
            </p>

            <p>
              Aujourd’hui, je souhaite orienter mon activité vers ce qui me
              passionne le plus : la création d’interfaces claires, accessibles
              et agréables à utiliser. J’aime concevoir des sites et
              applications qui ne se contentent pas d’être fonctionnels, mais
              qui facilitent réellement l’expérience des personnes qui les
              utilisent.
            </p>

            <p>
              Mon approche se situe à la rencontre du développement frontend, de
              l’UX/UI et de la compréhension des besoins humains. Pour moi, la
              technique doit rester un outil au service du sens : elle doit
              rendre les usages plus simples, plus fluides et plus intuitifs,
              sans jamais prendre le dessus sur l’utilisateur.
            </p>

            <p>
              Je peux vous accompagner dans la création ou la refonte de votre
              présence en ligne, selon vos besoins : site vitrine, portfolio,
              site associatif, interface sur mesure ou projet web évolutif.
            </p>
          </div>

          <div className="presentation-actions">
            <NavLink className="contacter" to="/contact">
              Échanger autour de votre projet
            </NavLink>

            <a className="CV" href="/cvElisa.pdf" download="CV_ElisaKaba.pdf">
              Télécharger mon CV
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default QuiSuisJe;