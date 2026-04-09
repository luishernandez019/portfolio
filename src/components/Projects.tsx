import Github from "../assets/icons/social_media/github.svg";
import Behance from "../assets/icons/social_media/behance.svg";
import { PROJECTS } from "../const/Projects";
import "../styles/Projects.css";

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1>Proyectos</h1>

      <div className="projects-container">
        {Array.from({ length: Math.ceil(PROJECTS.length / 2) }, (_, i) => (
          <div className="projects-row" key={i}>
            {PROJECTS.slice(i * 2, i * 2 + 2).map((project) => (
              <article className="project-card" key={project.id}>
                <h2>{project.title}</h2>
                <img
                  src={project.image}
                  width={305}
                  height={200}
                  alt={project.alt}
                  loading="lazy"
                />
                <div className="projects-buttons">
                  {project.demo && (
                    <a className="demo-button" href={project.demo} target="_blank">
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      aria-label={`Proyecto de GitHub de ${project.title}`}
                    >
                      <Github />
                    </a>
                  )}
                  {project.behance && (
                    <a
                      href={project.behance}
                      target="_blank"
                      aria-label={`Proyecto de Behance de ${project.title}`}
                    >
                      <Behance />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};
