"use client";

import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import menuItens from "../data/navBar";
import NavBarS from "../estilizacao/navBar";


// import NavBarS from "../estilizacao/navBar"; // se estiver usando styled-components

export default function NavBar() {
  const { language, setLanguage } = useLanguage();

  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const items = menuItens(language);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <NavBarS>

      <nav className="menu-container">
        {/* MENU ICON */}
        <div className="menu-icon" onClick={() => setShowMenu((prev) => !prev)}>
          ☰
        </div>

        {/* MENU */}
        <div className={`menu ${showMenu ? "open" : ""}`}>
          {items.map((item) => (
            <div
              key={item.id}
              className="menu-item"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <a href={item.link} className="menu-link">
                <img src={item.img} alt={item.label} />
                {hoveredItem === item.id && (
                  <span className="menu-label">{item.label}</span>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* LANGUAGE SWITCH */}
        <button className="change-language" onClick={toggleLanguage}>
          {language === "pt" ? "EN" : "PT-BR"}
        </button>

        {/* SOCIAL */}
        <section className="socialIcons">
          <a
            href="https://github.com/gabrieldiasmenezes"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/gabriel-dias-5851382b5/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </section>
      </nav>
    </NavBarS>
  );
}
