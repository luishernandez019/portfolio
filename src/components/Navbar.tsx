import React, { useEffect, useState } from 'react';
import { SocialMedia } from "./SocialMedia";
import Menu from "../assets/icons/menu.svg";
import Close from "../assets/icons/close.svg";
import "../styles/Navbar.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showInicio, setShowInicio] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleInicioScroll = () => {
    if (window.scrollY >= 300) setShowInicio(true);
    else setShowInicio(false);
  };

  const handleSectionsScroll = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    event.preventDefault();
    const element = document.getElementById(id);

    if (element?.getAttribute("id") == "start") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }

    setMenuOpen(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleInicioScroll);

    return () => {
      window.removeEventListener("scroll", handleInicioScroll);
    }
  })

  return (
    <>
      <nav>
        <ul>
          {showInicio &&
            <li>
              <a href="#start" onClick={(e) => handleSectionsScroll(e, "start")}>Inicio</a>
            </li>
          }
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
            <a href="mailto:luishdz.dev@gmail.com">Contacto</a>
          </li>
        </ul>
        <button className="menu-btn" aria-label="Abrir menú" onClick={handleToggleMenu}>
          <Menu/>
        </button>
      </nav>
      {menuOpen && (
        <div className="mobile-menu">
          <button className="close-btn" aria-label="Cerrar menú" onClick={handleToggleMenu}>
            <Close/>
          </button>
          <ul>
            {showInicio &&
              <li>
                <a href="#start" onClick={(e) => handleSectionsScroll(e, "start")}>Inicio</a>
              </li>
            }
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
              <a href="mailto:luishdz.dev@gmail.com">Contacto</a>
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