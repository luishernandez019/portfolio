import Linkedin from "../assets/icons/social_media/linkedin.svg";
import Github from "../assets/icons/social_media/github_2.svg";
import Behance from "../assets/icons/social_media/behance.svg";
import "../styles/SocialMedia.css";

export const SocialMedia = () => {
  return (
    <div className="social-media">
      <a href="https://www.linkedin.com/in/luishernandez19/" target="_blank" aria-label="Perfil de LinkedIn de Luis Ordóñez">
        <Linkedin/>
      </a>
      <a href="https://github.com/luishernandez019" target="_blank" aria-label="Perfil de GitHub de Luis Ordóñez">
        <Github/>
      </a>
      <a href="https://www.behance.net/luishernandez019" target="_blank" aria-label="Perfil de Behance de Luis Ordóñez">
        <Behance/>
      </a>  
    </div>
  );
};