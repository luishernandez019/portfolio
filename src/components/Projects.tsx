import { useState, useRef, useEffect, useCallback } from "react";
import Github from "../assets/icons/social_media/github.svg";
import Behance from "../assets/icons/social_media/behance.svg";
import { PROJECTS, ProjectCategory } from "../const/Projects";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Projects.css";

type FilterValue = "all" | ProjectCategory;

export const Projects = () => {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState<FilterValue>("all");
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [slider, setSlider] = useState<{ x: number; width: number } | null>(null);

  const filters: { value: FilterValue; label: string }[] = [
    { value: "all",      label: t.projects.filterAll      },
    { value: "Frontend", label: t.projects.filterFrontend },
  ];

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

  const filtered = active === "all"
    ? PROJECTS
    : PROJECTS.filter(p => p.category === active);

  const rows = Array.from(
    { length: Math.ceil(filtered.length / 2) },
    (_, i) => filtered.slice(i * 2, i * 2 + 2)
  );

  return (
    <section className="projects-section" id="projects">
      <h2>{t.projects.heading}</h2>

      <div className="project-filters" ref={containerRef}>
        <span
          className="filter-slider"
          style={
            slider
              ? { transform: `translateX(${slider.x}px)`, width: slider.width }
              : { opacity: 0 }
          }
        />
        {filters.map(({ value, label }, i) => (
          <button
            key={value}
            ref={el => { btnRefs.current[i] = el; }}
            className={`filter-btn${active === value ? " filter-btn--active" : ""}`}
            onClick={() => { setActive(value); moveSlider(i); }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="projects-container" key={active}>
        {rows.map((row, i) => (
          <div className="projects-row" key={i}>
            {row.map(project => {
              const description = lang === "en" ? project.descriptionEn : project.description;
              const alt = lang === "en" ? project.altEn : project.alt;
              return (
                <article className="project-card" key={project.id}>
                  <h2>{project.title}</h2>
                  <div className="project-image-wrapper">
                    <img
                      src={project.image}
                      srcSet={project.srcset}
                      sizes="(min-width: 768px) 330px, (min-width: 500px) 40vw, 85vw"
                      width={305}
                      height={200}
                      alt={alt}
                      loading="lazy"
                    />
                  </div>
                  <p className="project-description">{description}</p>
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
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.githubAriaLabel.replace("{title}", project.title)}
                      >
                        <Github />
                      </a>
                    )}
                    {project.behance && (
                      <a
                        href={project.behance}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={t.projects.behanceAriaLabel.replace("{title}", project.title)}
                      >
                        <Behance />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        ))}
      </div>
    </section>
  );
};
