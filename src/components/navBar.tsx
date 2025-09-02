import { useState } from "react";
import NavBarS from "../estilizacao/navBar";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface MenuItem {
  id: string;
  label: string;
  img: string;
  link: string;
}

interface NavBarProps {
  changeLanguage: () => void;
  languages: "pt" | "en";
}

export default function NavBar({ changeLanguage, languages }: NavBarProps) {
  const menuItens: MenuItem[] = [
    { id: "home", label: languages === "pt" ? "Página Principal" : "Home", img: "home.png", link: "/" },
    { id: "contato", label: languages === "pt" ? "Contato" : "Contact", img: "contato.png", link: "/contato" },
    { id: "sobre", label: languages === "pt" ? "Sobre Mim" : "About Me", img: "sobre.png", link: "/sobre-mim" },
    { id: "projetos", label: languages === "pt" ? "Projetos" : "Projects", img: "projetos.png", link: "/projetos" },
    { id: "certificacoes", label: languages === "pt" ? "Certificações" : "Certifications", img: "certificacao.png", link: "/certificacoes" },
  ];

  const [showMenu, setShowMenu] = useState(false);
  const [menuHover, setMenuHover] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string>("");

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <NavBarS>
      <nav className="menu-container" onMouseEnter={() => setMenuHover(true)} onMouseLeave={() => setMenuHover(false)}>
        <div className="menu-icon" onClick={toggleMenu}>
          ☰
        </div>
        <div className={`menu ${showMenu || menuHover ? "open" : ""}`}>
          {menuItens.map((itens) => (
            <div key={itens.id} className="menu-item" onMouseEnter={() => setHoveredItem(itens.label)} onMouseLeave={() => setHoveredItem("")}>
              <Link to={itens.link} className="links">
                <img src={itens.img} alt={itens.label} />
                {hoveredItem === itens.label && <span className="menu-label">{itens.label}</span>}
              </Link>
            </div>
          ))}
        </div>
      </nav>
      <button className="change-language" onClick={changeLanguage}>
        {languages === "pt" ? "EN" : "PT-BR"}
      </button>
      <section className="socialIcons">
        <a href="https://github.com/gabrieldiasmenezes" className="icons" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/gabriel-dias-5851382b5/" className="icons" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </section>
    </NavBarS>
  );
}
