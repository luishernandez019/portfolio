import React, { useEffect, useRef, useState } from 'react';
import { SocialMedia } from "./SocialMedia";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import LogoSVG from "../assets/icons/logo.svg";
const Logo = LogoSVG as unknown as React.FC<React.SVGProps<SVGSVGElement>>;
import "../styles/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleSectionsScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setMenuOpen(false);
  };

  useEffect(() => {
    if (menuOpen) {
      closeButtonRef.current?.focus();
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [menuOpen]);

  return (
    <>
      <nav>
        <Logo className="nav-logo" aria-hidden="true"/>
        <ul>
          <li>
            <a href="#stack" onClick={(e) => handleSectionsScroll(e, "stack")}>Stack</a>
          </li>
          <li>
            <a href="#experiencia" onClick={(e) => handleSectionsScroll(e, "experience")}>Experiencia</a>
          </li>
          <li>
            <a href="#proyectos" onClick={(e) => handleSectionsScroll(e, "projects")}>Proyectos</a>
          </li>
          <li>
            <a href="#contact" onClick={(e) => handleSectionsScroll(e, "contact")}>Contacto</a>
          </li>
        </ul>
        <button
          className="menu-btn"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={handleToggleMenu}
        >
          <Menu/>
        </button>
      </nav>
      {menuOpen && (
        <div
          className="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menú de navegación"
        >
          <button
            ref={closeButtonRef}
            className="close-btn"
            aria-label="Cerrar menú"
            onClick={handleToggleMenu}
          >
            <Close/>
          </button>
          <ul>
            <li>
              <a href="#stack" onClick={(e) => handleSectionsScroll(e, "stack")}>Stack</a>
            </li>
            <li>
              <a href="#experiencia" onClick={(e) => handleSectionsScroll(e, "experience")}>Experiencia</a>
            </li>
            <li>
              <a href="#proyectos" onClick={(e) => handleSectionsScroll(e, "projects")}>Proyectos</a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleSectionsScroll(e, "contact")}>Contacto</a>
            </li>
          </ul>
          <div className="mobile-social-media">
            <SocialMedia/>
          </div>
        </div>
      )}
    </>
  );
};
