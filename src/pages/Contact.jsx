import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import "../../assets/styles/Contact.css";

const Contact = () => {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "phone" && value.length > 12) {
      return;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const targetEmail = t("site.email");

    const bodyText = `
${t("contact.mailBodyLabels.name")}: ${formData.name}
${t("contact.mailBodyLabels.email")}: ${formData.email}
${t("contact.mailBodyLabels.phone")}: ${formData.phone}

${t("contact.mailBodyLabels.message")}:
${formData.message}
`;

    const subject = formData.subject || t("contact.mailSubject");

    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${targetEmail}&su=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyText)}`;

    window.open(mailtoLink, "_blank");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="contact-page-container">
      <h2 className="contact-script-title">
        {t("contact.title")}
      </h2>

      <div className="contact-form-section">
        <p className="form-subtitle">
          {t("contact.subtitle")}
        </p>

        <form onSubmit={handleSubmit} className="dark-form">
          <input
            type="text"
            name="name"
            placeholder={t("contact.namePlaceholder")}
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder={t("contact.emailPlaceholder")}
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="phone"
            placeholder={t("contact.phonePlaceholder")}
            value={formData.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="subject"
            placeholder={t("contact.subjectPlaceholder")}
            value={formData.subject}
            onChange={handleChange}
            required
          />

          <textarea
            name="message"
            placeholder={t("contact.messagePlaceholder")}
            rows="6"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" className="submit-btn">
            {t("contact.submit")}
          </button>
        </form>
      </div>

      <div className="contact-social-section">
        <h2 className="contact-script-title">
          {t("contact.socialTitle")}
        </h2>

        <div className="social-icons-row">
          <a
            href="#"
            className="gold-icon"
            aria-label="Facebook"
          >
            f
          </a>

          <a
            href={`tel:${t("site.phone").replace(/\s/g, "")}`}
            className="gold-icon"
            aria-label="Telefon"
          >
            t
          </a>

          <a
            href={`mailto:${t("site.email")}`}
            className="gold-icon"
            aria-label="Email"
          >
            p
          </a>

          <a
            href="https://www.instagram.com/by_sadoqatbakhronova"
            target="_blank"
            rel="noopener noreferrer"
            className="gold-icon"
            aria-label="Instagram"
          >
            ig
          </a>

          <a
            href="#"
            className="gold-icon"
            aria-label="LinkedIn"
          >
            in
          </a>
        </div>
      </div>

      <div className="dark-map-container">
        <iframe
          title={t("contact.locationTitle")}
          src="https://www.google.com/maps?q=Buxoro%20shahri%20Fatxobod%2028&output=embed"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default Contact;