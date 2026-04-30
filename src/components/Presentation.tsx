import React from "react";
import { SocialMedia } from "./SocialMedia";
import { useTypingEffect } from "../hooks/useTypingEffect";
import { useCountUp } from "../hooks/useCountUp";
import { useLanguage } from "../hooks/useLanguage";
import "../styles/Presentation.css";

const ROLES = ["Frontend Engineer", "Web Developer", "Software Developer"];

const StatItem = ({ value, suffix, label }: { value: number; suffix: string; label: string }) => {
  const { count, ref } = useCountUp(value);
  return (
    <div className="stat-item" ref={ref}>
      <span className="stat-number">{count}{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

export const Presentation = () => {
  const { t } = useLanguage();
  const { displayed, isTyping } = useTypingEffect(ROLES);

  const handleContactClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="presentation-section" id="start">

      <article>
        <div className="availability-badge">
          <span className="availability-dot" />
          {t.presentation.availability}
        </div>

        <header className="profile-header">
          <h1>Luis Hernández</h1>
          <h2>
            {displayed}
            <span className={`typing-cursor${isTyping ? "" : " typing-cursor--blink"}`}>|</span>
          </h2>
        </header>

        <p className="profile-description">
          {t.presentation.descriptionPart1}
          <span>{t.presentation.descriptionHighlight}</span>
          {t.presentation.descriptionPart2}
          <span>{t.presentation.descriptionCta}</span>
        </p>

        <div className="profile-buttons">
          <a href="/CV_LUIS_ANGEL_HERNANDEZ_ORDONEZ.pdf" target="_blank" rel="noopener noreferrer" aria-label={t.presentation.cvAriaLabel}>
            {t.presentation.cvButton}
          </a>
          <a href="#contact" onClick={handleContactClick}>{t.presentation.contactButton}</a>
        </div>

        <div className="profile-stats">
          {t.presentation.stats.map(s => (
            <StatItem key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
          ))}
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
          alt={t.presentation.imgAlt}
        />
        <SocialMedia/>
      </aside>

    </section>
  );
};
