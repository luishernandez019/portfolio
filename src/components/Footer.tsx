import { SocialMedia } from "./SocialMedia";
import "../styles/Footer.css";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mobile-footer">
        <p className="credits">
          Diseñado y desarrollado por... 
          <span> ¡mi! </span>
          🤙🗿
        </p>
        <SocialMedia/>
        <p className="copyright">
          © {currentYear}
          <span> Luis Hernández</span>
          . Todos los derechos reservados.
        </p>
      </div>

      <div className="longer-footer">
        <div className="a">
          <p className="credits">
            Diseñado y desarrollado por... 
            <span> ¡mi! </span>
            🤙🗿
          </p>
          <p className="copyright">
            © {currentYear}
            <span> Luis Hernández</span>
            . Todos los derechos reservados.
          </p>
        </div>
        <SocialMedia/>
      </div>
    </footer>
  );
};