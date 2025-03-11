import { useEffect, useState } from "react";
import Style from "../../estilizacao/style";
import { Link } from "react-router-dom";
import Spline from '@splinetool/react-spline';
import NavBar from "../../components/navBar";

export default function Home() {
  // Variável de texto em português e em inglês
  const texts = {
    pt: {
      mainText: "Olá, meu nome é Gabriel Dias Menezes!!",
      smallText: "Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, apaixonado por tecnologia e inovação. Seja bem-vindo ao meu portfólio!",
      aboutButton: "Sobre mim",
      projectsButton: "Meus Projetos",
    },
    en: {
      mainText: "Hello, my name is Gabriel Dias Menezes!!",
      smallText: "I am a Systems Analysis and Development student at FIAP, passionate about technology and innovation. Welcome to my portfolio!",
      aboutButton: "About Me",
      projectsButton: "My Projects",
    },
  };

  // Estados de controle de idioma
  const [languages, setLanguages] = useState<"pt" | "en">("pt");
  const [firstRender, setFirstRender] = useState(true);

  // Estados para controle do texto exibido
  const [displayedMainText, setDisplayedMainText] = useState("");
  const [displayedSmallText, setDisplayedSmallText] = useState("");
  const [showSmallText, setShowSmallText] = useState(false);

  // Função para alternar o idioma
  const changeLanguage = () => {
    setLanguages((prev) => (prev === "pt" ? "en" : "pt"));
    setDisplayedMainText(texts[languages === "pt" ? "en" : "pt"].mainText);
    setDisplayedSmallText(texts[languages === "pt" ? "en" : "pt"].smallText);
    setShowSmallText(true);
    setFirstRender(false);
  };

  // Efeito de digitação do título principal
  useEffect(() => {
    if (firstRender) {
      setDisplayedMainText("");
      let index = 0;
      const text = texts[languages].mainText;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedMainText(() => text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => setShowSmallText(true), 500);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [firstRender, languages]);

  // Efeito do subtítulo e botões
  useEffect(() => {
    if (firstRender && showSmallText) {
      setDisplayedSmallText("");
      let index = 0;
      const text = texts[languages].smallText;
      const interval = setInterval(() => {
        if (index < text.length) {
          setDisplayedSmallText(() => text.substring(0, index + 1));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 40);
      return () => clearInterval(interval);
    }
  }, [firstRender, showSmallText, languages]);

  return (
    <Style>
      <main className="portfolioIntro">
        <h1 className="mainText">{displayedMainText}</h1>
        {showSmallText && <p className="smallText">{displayedSmallText}</p>}
          <div className="buttons">
            <Link to={"/sobre-mim"} className="button">{texts[languages].aboutButton}</Link>
            <Link to={"/projetos"} className="button">{texts[languages].projectsButton}</Link>
          </div>
      </main>
      <NavBar changeLanguage={changeLanguage} languages={languages} />
      <Spline className="backgroundAnimation" scene="https://prod.spline.design/SIU5kmEWTMZ5NRZl/scene.splinecode" />
    </Style>
  );
}
