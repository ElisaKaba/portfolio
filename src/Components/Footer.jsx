import React from "react";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <section className="footer">
      <div className="littleLogo">
        <NavLink className="accueil" to="/">
          <img
            className="logo"
            src="../../../img/favicon-32x32.png"
            alt="Logo Elisa petit"
          />
        </NavLink>
      </div>
      <div className="madeBy">Made by eke</div>
      <div className="reseaux">
        <a
          href="https://github.com/ElisaKaba?tab=repositories"
          target="_blank"
          rel="noreferrer"
          className="gitLink"
        >
          <img
            src="../../../img/icons8-github-50.png"
            alt="Logo Github"
            className="git"
          />
        </a>
      </div>
      <a
        href="https://www.linkedin.com/in/elisa-kaba/"
        target="_blank"
        rel="noreferrer"
        className="linkedinLink"
      >
        <img
          src="../../../img/linkedin.png"
          alt="Logo Github"
          className="link"
        ></img>{" "}
      </a>

      <NavLink className="contact" to="/contact">
        Contact
      </NavLink>
    </section>
  );
};

export default Footer;
