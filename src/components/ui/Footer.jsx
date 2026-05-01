import React from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/Footer.css";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="luxe-footer">
      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} {t("site.brand")}.{" "}
          {t("footer.copyright")} — {t("footer.madeBy")}
        </p>

        <div className="footer-bottom-links">
          <a href="#">{t("footer.privacy")}</a>
          <a href="#">{t("footer.terms")}</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;