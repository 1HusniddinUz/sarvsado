import React from "react";
import { useParams, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { marketStores } from "../data/MarketData";
import "../../assets/styles/MarketPlace-Detail.css";

const MarketDetail = () => {
  const { t } = useTranslation();
  const { storeId } = useParams();

  const store = marketStores.find((s) => s.id === storeId);

  if (!store) {
    return (
      <div className="market-container">
        <h1>{t("marketDetail.notFound")}</h1>
      </div>
    );
  }

  return (
    <div className="market-detail-container">
      <div className="market-header">
        <Link to="/market-place" className="back-btn">
          <span className="arrow">&larr;</span> {t("marketDetail.back")}
        </Link>

        <h2 className="market-title">
          {store.name}{" "}
          <span className="highlight">
            {t("marketDetail.catalogSuffix")}
          </span>
        </h2>

        <div className="title-divider"></div>
      </div>

      <div className="pro-products-grid">
        {store.products.map((product) => (
          <div key={product.id} className="pro-product-card">
            <div className="pro-image-wrapper">
              <div className="pro-badge">
                {t("marketDetail.badge")}
              </div>

              <button
                className="wishlist-btn"
                aria-label={t("marketDetail.wishlist")}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </button>

              <img
                src={product.image}
                alt={product.name}
                className="pro-product-image"
              />

              <div className="quick-action">
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-buy-btn"
                >
                  {t("marketDetail.quickBuy")}
                </a>
              </div>
            </div>

            <div className="pro-product-info">
              <p className="pro-category">{store.name}</p>

              <h3 className="pro-product-name">
                {product.name}
              </h3>

              <div className="pro-price-row">
                <p className="pro-price">{product.price}</p>

                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cart-icon-btn"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarketDetail;