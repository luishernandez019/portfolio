import { SocialMedia } from "./SocialMedia";
import "../styles/Presentation.css";

export const Presentation = () => {
  return (
    <section className="presentation-section" id="start">

      <article>
        <header className="profile-header">
          <h1>Luis Hernández</h1>
          <h2>Frontend Engineer</h2>
        </header>

        <p className="profile-description">
          +3 años de experiencia.
          <span> Ingeniero en Desarrollo de Software </span>
          de Chiapas, México. Especializado en el desarrollo de aplicaciones web atractivas y funcionales.
          <span> Let's code!</span>
        </p>

        <div className="profile-buttons">
          <a href="/CV_LUIS_ANGEL_HERNANDEZ_ORDONEZ.pdf" target="_blank" rel="noopener noreferrer" aria-label="Ver CV de Luis Hernández en PDF">Ver CV</a>
          <a href="#contact">Contáctame</a>
        </div>
      </article>

      <aside className="profile-aside">
        <img
          src="/header_profile.webp"
          srcSet="/header_profile_sm.webp 280w, /header_profile_md.webp 360w, /header_profile.webp 467w"
          sizes="(min-width: 1300px) 24vw, (min-width: 1150px) 27vw, (min-width: 768px) 29vw, (min-width: 600px) 73vw, 85vw"
          width={982}
          height={1080}
          loading="eager"
          fetchPriority="high"
          alt="Foto de Luis Hernández"
        />
        <SocialMedia/>
      </aside>

    </section>
  );
};