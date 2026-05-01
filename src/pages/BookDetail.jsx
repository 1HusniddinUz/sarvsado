import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <div style={{ padding: "40px 20px" }}>
      <h2>{t("common.catalog")}</h2>

      <p>
        Siz tanlagan mahsulot ID raqami: <strong>{id}</strong>
      </p>

      <p>
        Ushbu sahifada keyinchalik mahsulot haqida batafsil ma’lumot,
        rasm, narx, o‘lcham va buyurtma shakli joylashtiriladi.
      </p>

      <button onClick={() => navigate(-1)}>
        {t("common.back")}
      </button>
    </div>
  );
};

export default ProductDetail;