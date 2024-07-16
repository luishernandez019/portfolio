import { EXPERIENCE } from "../const/Experience";
import "../styles/Experience.css"

export const Experience = () => {
  return (
    <section className="experience-section" id="experience">
      <h1>Experiencia laboral</h1>

      <div className="experience-container">
        <ul className="timeline">
          {
            EXPERIENCE.map((item) => (
              <li className="timeline-item" key={item.id}>
                <article className="timeline-content">
                  <header className="job-header">
                    <div>
                      <h2 className="job-title">{item.position}</h2>
                      <p className="job-company">{item.company}</p>
                      <time className="job-date">{item.date}</time>
                    </div>
                    <p className="job-description" dangerouslySetInnerHTML={{__html: item.description}}></p>
                  </header>
                </article>
              </li>
            ))
          }
        </ul>
      </div>
    </section>
  );
};