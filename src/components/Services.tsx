import WebDevelopment from "../assets/icons/services/web_development.svg";
import WebDesing from "../assets/icons/services/web_design.svg";
import Learning from "../assets/icons/services/learning.svg";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Services.css";

const ICONS = [WebDevelopment, WebDesing, Learning];

export const Services = () => {
  const { t } = useLanguage();

  return (
    <section className="services-section">
      <h2>{t.services.heading}</h2>
      <div className="services-container">
        {t.services.cards.map((card, i) => {
          const Icon = ICONS[i];
          return (
            <article className="service-card" key={card.title}>
              <Icon />
              <h2>{card.title}</h2>
              <p>{card.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};
