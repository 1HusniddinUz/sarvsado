import React from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/About.css";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="editorial-about-container">
      <div className="about-col-left">
        <div className="about-name-box">
          <h1 className="about-name">
            {t("about.name")}
          </h1>

          <p className="about-role">
            {t("about.role")}
          </p>
        </div>

        <div className="about-experience">
          <p>{t("about.experience")}</p>
        </div>

        <div className="about-socials">
          <a
            href="https://www.instagram.com/by_sadoqatbakhronova"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            ig
          </a>

          <a
            href={`tel:${t("site.phone").replace(/\s/g, "")}`}
            aria-label="Telefon"
          >
            tel
          </a>

          <a
            href={`mailto:${t("site.email")}`}
            aria-label="Email"
          >
            mail
          </a>

          <a
            href="#"
            aria-label="Facebook"
          >
            fb
          </a>
        </div>
      </div>

      <div className="about-col-center">
        <div className="main-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=900&q=80"
            alt={t("about.name")}
            className="main-portrait"
          />
        </div>
      </div>

      <div className="about-col-right">
        <ul className="contact-list">
          <li>
            <span className="arrow">&rarr;</span>
            <a href={`mailto:${t("site.email")}`}>
              {t("site.email")}
            </a>
          </li>

          <li>
            <span className="arrow">&rarr;</span>
            <a href={`tel:${t("site.phone").replace(/\s/g, "")}`}>
              {t("site.phone")}
            </a>
          </li>

          <li>
            <span className="arrow">&rarr;</span>
            <a
              href="https://www.instagram.com/by_sadoqatbakhronova"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("site.instagram")}
            </a>
          </li>
        </ul>

        <div className="secondary-image-wrapper">
          <img
            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=900&q=80"
            alt={t("about.storyTitle")}
            className="secondary-portrait"
          />
        </div>

        <div className="about-text-block">
          <h3>{t("about.storyTitle")}</h3>
          <p>{t("about.storyTextOne")}</p>
          <p>{t("about.storyTextTwo")}</p>

          <h3>{t("about.valueTitle")}</h3>
          <p>{t("about.valueText")}</p>
        </div>

        <a href="/products" className="see-more-link">
          <span className="arrow">&rarr;</span> {t("about.portfolioLink")}
        </a>
      </div>
    </div>
  );
};

export default About;