import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [showNav, setShowNav] = useState(false);
  const [transormBurger, setTransformBurger] = useState(true);
  const [transformLogo, setTransformLogo] = useState(true);

  const handleShowList = () => {
    setShowNav(!showNav);
    setTransformBurger(!transormBurger);
    setTransformLogo(!transformLogo);
  };

  return (
    <section className="header">
      <div className="logoAndNav-responsive">
        <NavLink className="logoLink" to="/">
          <div className={`${transformLogo ? "showLogo" : "hideLogo"}`}>
            <img
              className="logo"
              src="../../../img/favicon-32x32.png"
              alt="Logo Elisa"
            ></img>
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

          <aside className={` ${showNav ? "showLinks" : "hideLinks"}`}>
            <ul id="hiddenMenu">
              <NavLink className="accueilNavItem" to="/">
                <li className="accueil" onClick={handleShowList}>
                  Accueil
                </li>
              </NavLink>
              <NavLink className="quiNavItem" to="/quiSuiJe">
                <li className="qui" onClick={handleShowList}>
                  Qui suis-je ?
                </li>
              </NavLink>
              <NavLink className="competencesNavItem" to="/competences">
                <li className="competences" onClick={handleShowList}>
                  Mes compétences
                </li>
              </NavLink>
              <NavLink className="projets" to="/projets">
                <li className="portfolio" onClick={handleShowList}>
                  Mon portfolio
                </li>
              </NavLink>
                <li className="propositions" onClick={handleShowList}> 
                 <NavLink  className="services" to="/services"> Services  </NavLink>
               </li>
              <NavLink>
                <li className="contact" onClick={handleShowList}>
                  Contactez-moi
                </li>
              </NavLink>
            </ul>
          </aside>
        </div>
      </div>

      <div className="logoAndNav">
        <NavLink className="logoLink" to="/">
          <img
            className="logo"
            src="../../../img/favicon-96x96.png"
            alt="Logo Elisa"
          ></img>
        </NavLink>
        <nav className="menu">
          <ul>
            <NavLink className="quiNavItem" to="/quiSuiJe">
              {" "}
              <li className="qui">Qui suis-je ?</li>
            </NavLink>
            <NavLink className="competencesNavItem" to="/competences">
              <li className="competences">Mes compétences</li>
            </NavLink>

            <NavLink className="projets" to="/projets">
              <li className="portfolio">Mon portfolio</li>
            </NavLink>
              <li className="propositions" onClick={handleShowList}> 
                 <NavLink  className="services" to="/services"> Services  </NavLink>
               </li>
            <NavLink className="contact" to="/contact">
              <li className="contact">Contactez-moi</li>
            </NavLink>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Header;
