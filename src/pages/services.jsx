import React from "react";
import { NavLink } from "react-router-dom";

const Services = () => {
  const services = [
    {
      label: "Présenter votre activité avec clarté",
      title: "Site vitrine",
      description:
        "Un site clair, responsive et adapté à votre identité pour présenter votre activité, votre association, vos services ou votre parcours.",
      items: [
        "Page d’accueil",
        "Présentation de l’activité",
        "Services ou prestations",
        "Réalisations ou portfolio",
        "Page contact",
        "Design responsive mobile / tablette / desktop",
      ],
    },
    {
      label: "Modifier vos contenus sans toucher au code",
      title: "Site administrable",
      description:
        "Un site relié à une interface d’administration pour mettre à jour vos textes, images, actualités, événements ou projets plus facilement.",
      items: [
        "Interface de gestion de contenu",
        "Ajout ou modification de textes",
        "Gestion d’images",
        "Actualités, événements ou projets",
        "Connexion avec un CMS comme Strapi",
        "Site React connecté aux contenus",
      ],
    },
    {
      label: "Créer un outil adapté à un besoin précis",
      title: "Interface web sur mesure",
      description:
        "Une interface pensée pour répondre à un usage spécifique : agenda, formulaire, annuaire, carrousel dynamique, espace de gestion simple ou prototype d’outil métier.",
      items: [
        "Formulaires personnalisés",
        "Affichage de données dynamiques",
        "Connexion à une base de données",
        "Carrousels ou composants interactifs",
        "Tableaux ou listes de suivi",
        "Prototype fonctionnel",
      ],
    },
  ];

  return (
    <main className="services-page">
      <section className="services-hero">
        <p className="services-hero-label">Ce que je propose</p>

        <h1>Création de sites web et interfaces frontend</h1>

        <p className="services-hero-text">
          J’accompagne les personnes, associations et petites structures dans la création
          ou la refonte de leur présence en ligne, avec une attention particulière portée
          à la clarté, à l’accessibilité et à l’expérience utilisateur.
        </p>
      </section>

      <section className="services-list" aria-label="Liste des services">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <p className="service-card-label">{service.label}</p>

            <h2>{service.title}</h2>

            <p className="service-card-description">{service.description}</p>

            <ul className="service-card-list">
              {service.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="services-cta">
        <h2>Une approche progressive</h2>

        <p>
          Chaque projet peut évoluer par étapes. Il est possible de commencer par un site
          vitrine simple, puis d’ajouter ensuite une partie administrable, des contenus
          dynamiques ou des fonctionnalités plus spécifiques.
        </p>

        <NavLink to="/contact" className="services-cta-button">
          Parler de votre projet
        </NavLink>
      </section>
    </main>
  );
};

export default Services;
