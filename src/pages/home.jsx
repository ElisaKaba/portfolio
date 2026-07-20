import React from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <section className="home">
      <section className="background">
        <div className="presentationEtContact">
          <h1 className="nom">
            Elisa Kaba <br />
            Développeuse frontend React & UX/UI
          </h1>

          <h2 className="titre">Conceptrice développeuse d'applications</h2>

          <h3 className="recherche">
            Formation fullstack JAVA ANGULAR REACT
            <br />
            Plus sensible au frontend avec un intérêt particulier pour les questions
            d'UX-UI
          </h3>

          <NavLink className="contactSend" to="/contact">
            <div className="enveloppe">
              <img
                src="../../../img/noun-send-1070405.png"
                alt="Enveloppe de contact"
                className="send"
              />
            </div>
          </NavLink>
        </div>

        <div className="imgFond">
          <img src="../../../../img/homeBack.jpg" alt="Océan" className="backgroundImg" />
        </div>
      </section>
    </section>
  );
};

export default Home;
