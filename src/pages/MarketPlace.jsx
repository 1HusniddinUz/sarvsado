import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { marketStores } from "../data/MarketData";
import "../../assets/styles/MarketPlace.css";

const MarketPlace = () => {
  const { t } = useTranslation();

  const getTheme = (id) => {
    switch (id) {
      case "wildberries":
        return {
          color: "#cb11ab",
          shadow: "rgba(203, 17, 171, 0.5)",
        };
      case "ozon":
        return {
          color: "#005bff",
          shadow: "rgba(0, 91, 255, 0.5)",
        };
      case "uzum":
        return {
          color: "#7000ff",
          shadow: "rgba(112, 0, 255, 0.5)",
        };
      case "yandex":
        return {
          color: "#ffcc00",
          shadow: "rgba(255, 204, 0, 0.5)",
        };
      default:
        return {
          color: "#c5a880",
          shadow: "rgba(197, 168, 128, 0.5)",
        };
    }
  };

  const storeFeatures = t("marketplace.features", {
    returnObjects: true,
  });

  return (
    <div className="market-container">
      <div className="market-header">
        <h2 className="market-title">{t("marketplace.title")}</h2>

        <div className="title-divider"></div>

        <p className="market-desc">{t("marketplace.desc")}</p>
      </div>

      <div className="premium-stores-grid">
        {marketStores.map((store) => {
          const theme = getTheme(store.id);

          return (
            <Link
              to={`/market-place/${store.id}`}
              key={store.id}
              className="premium-store-card"
              style={{
                "--brand-color": theme.color,
                "--brand-shadow": theme.shadow,
              }}
            >
              <div className="side-tab">
                <span>{store.name.toUpperCase()}</span>
              </div>

              <div className="card-glass">
                <div className="card-notch"></div>

                <div className="store-logo-wrapper">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="store-logo"
                  />
                </div>

                <ul className="store-features">
                  {storeFeatures.map((feature, index) => (
                    <li key={index}>
                      <span className="feature-number">{index + 1}</span>

                      <p>{feature}</p>

                      <span className="check-icon">✓</span>
                    </li>
                  ))}
                </ul>

                <button className="buy-now-btn">
                  {t("marketplace.button")}
                </button>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MarketPlace;
