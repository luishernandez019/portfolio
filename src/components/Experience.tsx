import { EXPERIENCE } from "../const/Experience";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Experience.css"

export const Experience = () => {
  const { lang, t } = useLanguage();

  return (
    <section className="experience-section" id="experience">
      <h2>{t.experience.heading}</h2>

      <div className="experience-container">
        <ul className="timeline">
          {EXPERIENCE.map((item) => (
            <li className="timeline-item" key={item.id}>
              <article className="timeline-content">
                <header className="job-header">
                  <div>
                    <h2 className="job-title">{item.position}</h2>
                    <p className="job-company">{item.company}</p>
                    <time className="job-date">{lang === "en" ? item.dateEn : item.date}</time>
                  </div>
                  <p
                    className="job-description"
                    dangerouslySetInnerHTML={{ __html: lang === "en" ? item.descriptionEn : item.description }}
                  />
                </header>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
