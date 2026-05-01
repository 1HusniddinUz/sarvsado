import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "../assets/styles/Home.css";

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className="home-container">
      <div className="hero-section">
        <div className="overlay"></div>

        <div className="hero-content">
          <p className="hero-subtitle">{t("home.heroKicker")}</p>
          <h1 className="hero-title">{t("home.heroTitle")}</h1>
          <p className="hero-subtitle">{t("home.heroSubtitle")}</p>

          <Link to="/products" className="learn-more-btn">
            {t("home.heroButton")}
          </Link>
        </div>
      </div>

      <section className="suites-section">
        <div className="section-header">
          <h2 className="section-script-title">
            {t("home.collectionsScript")}
          </h2>

          <p className="section-main-title">
            {t("home.collectionsTitle")}
          </p>

          <div className="title-divider"></div>

          <p className="products-desc">
            {t("home.collectionsDesc")}
          </p>
        </div>

        <div className="suites-grid">
          <div className="suite-card">
            <div
              className="suite-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?auto=format&fit=crop&w=900&q=80')",
              }}
            ></div>

            <div className="suite-info">
              <h3>{t("home.collectionOneTitle")}</h3>
              <p>{t("home.collectionOneText")}</p>

              <Link to="/products" className="explore-link">
                {t("common.discover")} <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="suite-card">
            <div
              className="suite-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80')",
              }}
            ></div>

            <div className="suite-info">
              <h3>{t("home.collectionTwoTitle")}</h3>
              <p>{t("home.collectionTwoText")}</p>

              <Link to="/products" className="explore-link">
                {t("common.discover")} <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="suite-card">
            <div
              className="suite-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?auto=format&fit=crop&w=900&q=80')",
              }}
            ></div>

            <div className="suite-info">
              <h3>{t("home.collectionThreeTitle")}</h3>
              <p>{t("home.collectionThreeText")}</p>

              <Link to="/products" className="explore-link">
                {t("common.discover")} <span>&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="experience-section">
        <div className="experience-container">
          <div className="experience-image-wrapper">
            <div
              className="experience-image"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80')",
              }}
            ></div>

            <div className="experience-badge">{t("home.badge")}</div>
          </div>

          <div className="experience-content">
            <p className="section-main-title left-align">
              {t("home.philosophyKicker")}
            </p>

            <h2 className="section-script-title left-align">
              {t("home.philosophyTitle")}
            </h2>

            <div className="title-divider left-align"></div>

            <p className="experience-text">
              {t("home.philosophyTextOne")}
            </p>

            <p className="experience-text">
              {t("home.philosophyTextTwo")}
            </p>

            <Link to="/about" className="learn-more-btn dark-btn">
              {t("home.philosophyButton")}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;