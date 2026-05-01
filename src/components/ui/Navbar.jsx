import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../../assets/styles/Navbar.css";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const languages = [
    { code: "uz", label: "UZB" },
    { code: "en", label: "ENG" },
    { code: "ru", label: "RUS" },
    { code: "tr", label: "TUR" },
    { code: "fr", label: "FRA" },
  ];

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLangChange = (code) => {
    i18n.changeLanguage(code);
    closeMenu();
  };

  return (
    <>
      <nav className="luxe-navbar">
        <div className="nav-brand">
          <NavLink to="/" onClick={closeMenu}>
            {t("site.brand")}
            <span className="dot">.</span>
          </NavLink>
        </div>

        <div className="nav-langs desktop-only">
          {languages.map((lang) => (
            <span
              key={`desktop-${lang.code}`}
              className={`lang-item ${
                i18n.language === lang.code ? "active" : ""
              }`}
              onClick={() => handleLangChange(lang.code)}
            >
              {lang.label}
            </span>
          ))}
        </div>

        <div
          className={`nav-trigger ${isMenuOpen ? "is-active" : ""}`}
          onClick={toggleMenu}
        >
          <div className="magic-bar bar-top"></div>
          <div className="magic-bar bar-mid"></div>
          <div className="magic-bar bar-bot"></div>
        </div>
      </nav>

      <div className={`fullscreen-overlay ${isMenuOpen ? "is-open" : ""}`}>
        <div className="overlay-content">
          <ul className="main-menu-links">
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {t("nav.home")}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/products"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {t("nav.products")}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/market-place"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {t("nav.marketplace")}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {t("nav.about")}
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                onClick={closeMenu}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {t("nav.contact")}
              </NavLink>
            </li>
          </ul>

          <div className="nav-langs mobile-only">
            {languages.map((lang) => (
              <span
                key={`mobile-${lang.code}`}
                className={`lang-item ${
                  i18n.language === lang.code ? "active" : ""
                }`}
                onClick={() => handleLangChange(lang.code)}
              >
                {lang.label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;