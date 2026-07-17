import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleMenu = () => {
    setShowNav((prevState) => !prevState);
  };

  const closeMenu = () => {
    setShowNav(false);
  };

  return (
    <header className="header">
      {/* HEADER MOBILE */}
      <div className="logoAndNav-responsive">
        <NavLink className="logoLink" to="/" onClick={closeMenu}>
          <img className="logo" src="/img/favicon-32x32.png" alt="Logo Elisa Kaba" />
        </NavLink>

        <button
          className={`burgerButton ${showNav ? "isOpen" : ""}`}
          onClick={toggleMenu}
          type="button"
          aria-label={showNav ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={showNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <aside className={`mobileMenu ${showNav ? "showLinks" : "hideLinks"}`}>
          <nav aria-label="Navigation mobile">
            <ul id="hiddenMenu">
              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/">
                  Accueil
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/quisuisje">
                  Qui suis-je ?
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/competences">
                  Mes compétences
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/projets">
                  Mes réalisations
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/services">
                  Services
                </NavLink>
              </li>

              <li onClick={closeMenu}>
                <NavLink className="navItem" to="/contact">
                  Contactez-moi
                </NavLink>
              </li>
            </ul>
          </nav>
        </aside>
      </div>

      {/* HEADER DESKTOP */}
      <div className="logoAndNav">
        <NavLink className="logoLink" to="/">
          <img className="logo" src="/img/favicon-96x96.png" alt="Logo Elisa Kaba" />
        </NavLink>

        <nav className="menu" aria-label="Navigation principale">
          <ul>
            <li>
              <NavLink className="navItem" to="/quisuisje">
                Qui suis-je ?
              </NavLink>
            </li>

            <li>
              <NavLink className="navItem" to="/competences">
                Mes compétences
              </NavLink>
            </li>

            <li>
              <NavLink className="navItem" to="/projets">
                Mes réalisations
              </NavLink>
            </li>

            <li>
              <NavLink className="navItem" to="/services">
                Services
              </NavLink>
            </li>

            <li>
              <NavLink className="navItem" to="/contact">
                Contactez-moi
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
