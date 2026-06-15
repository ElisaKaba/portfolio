import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <section class="main">
      <p class="desole">Désolée, cette page n'est pas encore  disponible</p>
      <p class="chatConstruction">(='X'=)</p>
      <NavLink className="github" to="/">
        <p className="github">Retourner à l'accueil</p>
      </NavLink>
    </section>
  );
};

export default NotFound;
