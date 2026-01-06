"use client"
import Spline from "@splinetool/react-spline";
import NavBar from "../../components/navBar";
import { useLanguage } from "../../context/LanguageContext";
import textHome from "../../data/home";
import Style from "../../estilizacao/style";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

export default function Home() {
  const { language } = useLanguage();
  const text = textHome[language];

  return (
    <Style>
      <NavBar />
      <main className="portfolioIntro">
        <h1 className="mainText"><Typewriter words={[text.mainText]} typeSpeed={50} cursor/></h1>

        <p className="smallText"><Typewriter words={[text.smallText]} typeSpeed={30} cursor={false}/></p>

        <div className="buttons fadeIn">
          <Link to="/sobre-mim" className="button">
            {text.aboutButton}
          </Link>
          <Link to="/projetos" className="button">
            {text.projectsButton}
          </Link>
        </div>
      </main>

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/SIU5kmEWTMZ5NRZl/scene.splinecode"
      />
    </Style>
  );
}
