import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <section className="background">
        <div className="presentationEtContact">
          <h1 className="nom">
            Elisa Kaba <br />
            Développeuse web freelance React & Next.js
          </h1>

          <h2 className="titre">Conceptrice développeuse d'applications</h2>

          <h3 className="recherche">
            Formation fullstack JAVA ANGULAR REACT
            <br />
            React · Next.js · TypeScript · Strapi · Supabase <br />
            Je crée et fais évoluer des sites et applications web modernes, accessibles et
            administrables.
          </h3>
          <div className="contact-and-projects">
            <NavLink className="contactSend" to="/contact">
              <div className="enveloppe">
                <img
                  src="../../../img/noun-send-1070405.png"
                  alt="Enveloppe de contact"
                  className="send"
                />
                Parlons de votre projet
              </div>
            </NavLink>{" "}
            <NavLink className="projectsSend" to="/projets">
              <div className="enveloppe">
                <img
                  src="../../../img/noun-projects-1070405.png"
                  alt="projects-icon"
                  className="projects-see "
                />
                Voir mes réalisations{" "}
              </div>
            </NavLink>{" "}
          </div>
        </div>

        <div className="imgFond">
          <img src="../../../../img/homeBack.jpg" alt="Océan" className="backgroundImg" />
        </div>
      </section>
    </section>
  );
};

export default Home;
