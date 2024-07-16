import Odoo from "../assets/projects/odoo.webp";
import Cientifico from "../assets/projects/100tifico.webp";
import Matchnime from "../assets/projects/matchnime.webp";
import Combiomex from "../assets/projects/combiomex.webp";
import Github from "../assets/icons/social_media/github.svg";
import Behance from "../assets/icons/social_media/behance.svg";
import "../styles/Projects.css"

export const Projects = () => {
  return (
    <section className="projects-section" id="projects">
      <h1>Proyectos</h1>

      <div className="projects-container">
        <div className="projects-row">
          <article className="project-card">
            <h2>Prueba Técnica Odoo</h2>
            <img src={Odoo} width={305} height={200} alt="Imagen de proyecto de Odoo" loading="lazy"/>
            <div className="projects-buttons">
              <a className="demo-button" href="https://odoo-technical-test.vercel.app" target="_blank">Demo</a>
              <a href="https://github.com/luishernandez019/Odoo-Technical-Test" target="_blank" aria-label="Proyecto de GitHub de Odoo">
                <Github/>
              </a>
            </div>
          </article>
          <article className="project-card">
            <h2>100tifi.co</h2>
            <img src={Cientifico} width={305} height={200} alt="Imagen de proyecto de 100tifi.co" loading="lazy"/>
            <div className="projects-buttons">
              <a className="demo-button" href="https://luishernandez019.github.io/100tifi.co/" target="_blank">Demo</a>
              <a href="https://github.com/luishernandez019/100tifi.co" target="_blank" aria-label="Proyecto de GitHub de 100tifi.co">
                <Github/>
              </a>
            </div>
          </article>
        </div>

        <div className="projects-row">
          <article className="project-card">
            <h2>Matchnime</h2>
            <img src={Matchnime} width={305} height={200} alt="Imagen de proyecto de Matchnime" loading="lazy"/>
            <div className="projects-buttons">
              <a className="demo-button" href="https://matchnime-app.web.app" target="_blank">Demo</a>
              <a href="https://github.com/luishernandez019/Matchnime" target="_blank" aria-label="Proyecto de GitHub de Matchnime">
                <Github/>
              </a>
            </div>
          </article>
          <article className="project-card">
            <h2>Web Rebranding Combiomex</h2>
            <img src={Combiomex} width={305} height={200} alt="Imagen de proyecto de Combiomex" loading="lazy"/>
            <div className="projects-buttons">
              <a href="https://www.behance.net/gallery/134253319/Combiomex" target="_blank" aria-label="Proyecto de Behance de Combiomex">
                <Behance/>
              </a>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};