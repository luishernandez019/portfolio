import { SocialMedia } from "./SocialMedia";
import ProfileDesktop from "../assets/images/header_profile.webp";
import "../styles/Presentation.css";

export const Presentation = () => {
  return (
    <section className="presentation-section" id="start">

      <article>
        <header className="profile-header">
          <h1>Luis Ordóñez</h1>
          <h2>Desarrollador Web</h2>
        </header>

        <p className="profile-description">
          +2 años de experiencia.
          <span> Ingeniero en Desarrollo de Software </span>
          de Chiapas, México. Especializado en el desarrollo de aplicaciones web atractivas y funcionales.
          <span> Let's code!</span>
        </p>

        <div className="profile-buttons">
          <a href="/CV_LUIS_ANGEL_HERNANDEZ_ORDOÑEZ.pdf" target="_blank">Ver CV</a>
          <a href="mailto:luishdz.dev@gmail.com" target="_blank">Contáctame</a>
        </div>
      </article>

      <aside className="profile-aside">
        <img src={ProfileDesktop} width={467} height={530} alt="Foto de Luis Ordóñez"/>
        <SocialMedia/>
      </aside>

    </section>
  );
};