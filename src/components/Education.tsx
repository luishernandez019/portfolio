import UPCHiapas1x from "../assets/images/upchiapas_1x.webp";
import UPCHiapas2x from "../assets/images/upchiapas.webp";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Education.css"

export const Education = () => {
  const { t } = useLanguage();
  const ed = t.education;

  return (
    <section className="education-section">
      <h2>{ed.heading}</h2>

      <div className="education-container">
        <img
          src={UPCHiapas1x}
          srcSet={`${UPCHiapas1x} 1x, ${UPCHiapas2x} 2x`}
          width={135}
          height={135}
          alt={ed.logoAlt}
          loading="lazy"
        />
        <div className="college-info">
          <h2>{ed.degree}</h2>
          <h3>{ed.university}</h3>
          <p>{ed.date}</p>
        </div>
      </div>
    </section>
  );
};
