import { useState, useRef, useEffect, useCallback } from "react";
import Github from "../assets/icons/social_media/github.svg";
import Behance from "../assets/icons/social_media/behance.svg";
import { PROJECTS, ProjectCategory } from "../const/Projects";
import "../styles/Projects.css";

const FILTERS = ["Todos", "Frontend", "Diseño"] as const;
type Filter = typeof FILTERS[number];

export const Projects = () => {
  const [active, setActive] = useState<Filter>("Todos");
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [slider, setSlider] = useState<{ x: number; width: number } | null>(null);

  const moveSlider = useCallback((index: number) => {
    const btn = btnRefs.current[index];
    const container = containerRef.current;
    if (!btn || !container) return;
    const cRect = container.getBoundingClientRect();
    const bRect = btn.getBoundingClientRect();
    setSlider({ x: bRect.left - cRect.left, width: bRect.width });
  }, []);

  useEffect(() => {
    moveSlider(0);
  }, [moveSlider]);

  const filtered = active === "Todos"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === (active as ProjectCategory));

  const rows = Array.from(
    { length: Math.ceil(filtered.length / 2) },
    (_, i) => filtered.slice(i * 2, i * 2 + 2)
  );

  return (
    <section className="projects-section" id="projects">
      <h2>Proyectos</h2>

      <div className="project-filters" ref={containerRef}>
        <span
          className="filter-slider"
          style={
            slider
              ? { transform: `translateX(${slider.x}px)`, width: slider.width }
              : { opacity: 0 }
          }
        />
        {FILTERS.map((f, i) => (
          <button
            key={f}
            ref={el => { btnRefs.current[i] = el; }}
            className={`filter-btn${active === f ? " filter-btn--active" : ""}`}
            onClick={() => { setActive(f); moveSlider(i); }}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="projects-container" key={active}>
        {rows.map((row, i) => (
          <div className="projects-row" key={i}>
            {row.map(project => (
              <article className="project-card" key={project.id}>
                <h2>{project.title}</h2>
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    width={305}
                    height={200}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="projects-buttons">
                  {project.demo && (
                    <a className="demo-button" href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" aria-label={`Ver código de ${project.title} en GitHub`}>
                      <Github />
                    </a>
                  )}
                  {project.behance && (
                    <a href={project.behance} target="_blank" rel="noopener noreferrer" aria-label={`Ver ${project.title} en Behance`}>
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
