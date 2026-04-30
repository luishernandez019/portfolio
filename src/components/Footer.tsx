import { SocialMedia } from "./SocialMedia";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Footer.css";

export const Footer = () => {
  const { t } = useLanguage();
  const tf = t.footer;
  const currentYear = new Date().getFullYear();

  const Credits = () => (
    <p className="credits">
      {tf.credits}
      <span>{tf.creditsHighlight}</span>
      🤙🗿
    </p>
  );

  const Copyright = () => (
    <p className="copyright">
      © {currentYear}
      <span>{tf.copyrightName}</span>
      {tf.allRights}
    </p>
  );

  return (
    <footer>
      <div className="mobile-footer">
        <Credits />
        <SocialMedia/>
        <Copyright />
      </div>

      <div className="longer-footer">
        <div className="a">
          <Credits />
          <Copyright />
        </div>
        <SocialMedia/>
      </div>
    </footer>
  );
};
