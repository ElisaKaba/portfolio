import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [transformBurger, setTransformBurger] = useState(true);
  const [transformLogo, setTransformLogo] = useState(true);

  const handleShowList = () => {
    setShowNav(!showNav);
    setTransformBurger(!transformBurger);
    setTransformLogo(!transformLogo);
  };

  return (
    <section className="header">
      <div className="logoAndNav-responsive">
        <NavLink className="logoLink" to="/">
          <div className={`${transformLogo ? "showLogo" : "hideLogo"}`}>
            <img className="logo" src="../../../img/favicon-32x32.png" alt="Logo Elisa" />
          </div>
        </NavLink>

        <div className="menuList">
          <button onClick={handleShowList}>
            <img
              src="../../../img/menuBurger.png"
              alt="Menu hamburger"
              className="hamburgerNav"
            />
          </button>

          <aside className={`${showNav ? "showLinks" : "hideLinks"}`}>
            <ul id="hiddenMenu">
              <li className="accueil" onClick={handleShowList}>
                <NavLink className="accueilNavItem" to="/">
                  Accueil
                </NavLink>
              </li>

              <li className="qui" onClick={handleShowList}>
                <NavLink className="quiNavItem" to="/quisuisje">
                  Qui suis-je ?
                </NavLink>
              </li>

              <li className="competences" onClick={handleShowList}>
                <NavLink className="competencesNavItem" to="/competences">
                  Mes compétences
                </NavLink>
              </li>

              <li className="portfolio" onClick={handleShowList}>
                <NavLink className="projets" to="/projets">
                  Mes réalisations
                </NavLink>
              </li>

              <li className="propositions" onClick={handleShowList}>
                <NavLink className="services" to="/services">
                  Services
                </NavLink>
              </li>

              <li className="contact" onClick={handleShowList}>
                <NavLink className="contact" to="/contact">
                  Contactez-moi
                </NavLink>
              </li>
            </ul>
          </aside>
        </div>
      </div>

      <div className="logoAndNav">
        <NavLink className="logoLink" to="/">
          <img className="logo" src="../../../img/favicon-96x96.png" alt="Logo Elisa" />
        </NavLink>

        <nav className="menu">
          <ul>
            <li className="qui" onClick={handleShowList}>
              <NavLink className="qui" to="/quisuisje">
                Qui suis-je ?
              </NavLink>
            </li>

            <li className="competences" onClick={handleShowList}>
              <NavLink className="competences" to="/competences">
                Mes compétences
              </NavLink>
            </li>

            <li className="portfolio" onClick={handleShowList}>
              <NavLink className="projets" to="/projets">
                Mes réalisations
              </NavLink>
            </li>

            <li className="propositions" onClick={handleShowList}>
              <NavLink className="services" to="/services">
                Services
              </NavLink>
            </li>

            <li className="contact" onClick={handleShowList}>
              <NavLink className="contact" to="/contact">
                Contactez-moi
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
