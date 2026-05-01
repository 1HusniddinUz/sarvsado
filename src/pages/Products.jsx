import React from "react";
import { useTranslation } from "react-i18next";
import { ProductData } from "../data/ProductData";
import "../../assets/styles/Products.css";

const Products = () => {
  const { t } = useTranslation();

  return (
    <div className="products-page-container">
      <div className="products-header">
        <span className="header-subtitle">{t("products.kicker")}</span>

        <h2 className="products-main-title">
          {t("products.title")}
        </h2>

        <div className="title-divider"></div>

        <p className="products-desc">
          {t("products.desc")}
        </p>
      </div>

      <div className="products-grid">
        {ProductData.map((item, index) => (
          <div key={item.id} className="luxury-product-card">
            <div className="card-image-box">
              <img
                src={item.image}
                alt={t(`products.items.${item.translationKey}.title`)}
                className="card-image"
              />

              <div className="corner-decoration"></div>
            </div>

            <div className="card-content-wrapper">
              <div className="card-top-info">
                <span className="card-category">
                  {t(`products.items.${item.translationKey}.category`)}
                </span>

                <span className="card-number">
                  No. {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="card-title">
                {t(`products.items.${item.translationKey}.title`)}
              </h3>

              <p className="card-desc">
                {t(`products.items.${item.translationKey}.desc`)}
              </p>

              <div className="card-bottom-info">
                <p className="card-price">
                  {t(`products.items.${item.translationKey}.price`)}
                </p>

                <button className="discover-btn">
                  {t("products.details")}

                  <svg
                    width="24"
                    height="12"
                    viewBox="0 0 24 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 6H23M23 6L18 1M23 6L18 11"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;