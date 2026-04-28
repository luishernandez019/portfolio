import React, { useEffect, useRef, useState } from 'react';
import { SocialMedia } from "./SocialMedia";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import LogoSVG from "../assets/icons/logo.svg";
import { useTheme } from "../hooks/useTheme";
import { useActiveSection } from "../hooks/useActiveSection";
import "../styles/Navbar.css";

const Logo = LogoSVG as unknown as React.FC<React.SVGProps<SVGSVGElement>>;

const SunIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="4"/>
    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/>
  </svg>
);

const MoonIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
  </svg>
);

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const { theme, toggleTheme } = useTheme();
  const activeSection = useActiveSection();

  const handleToggleMenu = () => setMenuOpen(o => !o);

  const handleSectionsScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) closeButtonRef.current?.focus();
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  const navLinks = [
    { label: "Stack",      id: "stack"      },
    { label: "Experiencia",id: "experience" },
    { label: "Proyectos",  id: "projects"   },
    { label: "Contacto",   id: "contact"    },
  ];

  return (
    <>
      <nav>
        <Logo className="nav-logo" aria-hidden="true" />
        <ul>
          {navLinks.map(({ label, id }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={activeSection === id ? "active" : ""}
                onClick={e => handleSectionsScroll(e, id)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-actions">
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>
          <button
            className="menu-btn"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            onClick={handleToggleMenu}
          >
            <Menu />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" role="dialog" aria-modal="true" aria-label="Menú de navegación">
          <button ref={closeButtonRef} className="close-btn" aria-label="Cerrar menú" onClick={handleToggleMenu}>
            <Close />
          </button>
          <ul>
            {navLinks.map(({ label, id }) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={activeSection === id ? "active" : ""}
                  onClick={e => handleSectionsScroll(e, id)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-social-media">
            <SocialMedia />
          </div>
        </div>
      )}
    </>
  );
};
