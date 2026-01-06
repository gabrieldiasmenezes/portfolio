import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "../context/LanguageContext";
import menuItens from "../data/navBar";
import { Link } from "react-router-dom";
import NavBarS from "../estilizacao/navBar";

export default function NavBar() {
  const { language, setLanguage } = useLanguage();
  const [showMenu, setShowMenu] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const itens = menuItens(language);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <NavBarS>
      <nav className="menu-container">
        <div className="menu-icon" onClick={() => setShowMenu((prev) => !prev)}>
          ☰
        </div>

        <div className={`menu ${showMenu ? "open" : ""}`}>
          {itens.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="menu-item"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link to={item.link} className="links">
                  <Icon className="menu-icon-item" />
                  {hoveredItem === item.label && (
                    <span className="menu-label">{item.label}</span>
                  )}
                </Link>
              </div>
            );
          })}
        </div>
      </nav>

      <button className="change-language" onClick={toggleLanguage}>
        {language === "pt" ? "EN" : "PT-BR"}
      </button>

      <section className="socialIcons">
        <a
          href="https://github.com/gabrieldiasmenezes"
          className="icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/gabriel-dias-5851382b5/"
          className="icons"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
      </section>
    </NavBarS>
  );
}
