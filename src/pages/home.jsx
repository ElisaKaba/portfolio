import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <main className="home">
      <section className="home-background">
        <div className="presentationEtContact">
          <p className="home-label">Portfolio</p>

          <h1 className="nom-statut">
            Elisa Kaba
            <span>Conceptrice développeuse d’applications frontend React & UX/UI</span>
          </h1>

          <h2 className="recherche">
            Formation fullstack Java, Angular, React
            <span>
              Plus sensible au frontend, avec un intérêt particulier pour les questions
              d’UX/UI.
            </span>
          </h2>

          <NavLink className="contactSend" to="/contact">
            <span>Me contacter</span>

            <div className="enveloppe">
              <img
                src="/img/noun-send-1070405.png"
                alt=""
                className="send"
                aria-hidden="true"
              />
            </div>
          </NavLink>
        </div>

        <div className="imgFond">
          <img src="/img/homeBack.jpg" alt="Océan" className="backgroundImg" />
        </div>
      </section>
    </main>
  );
};

export default Home;
