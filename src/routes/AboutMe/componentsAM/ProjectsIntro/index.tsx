import { Link } from "react-router-dom";
import ProjectsI from "./projectIntro";
interface ProjectsIntroProps{
  languages:"pt"|"en";
}
export default function ProjectsIntro({languages}:ProjectsIntroProps) {
  const texts={
    pt:{
      projTitle:"Meus Projetos",
      projItemTitle1:"Pokémon Box - Gerencie suas Capturas!",
      projItemTitle2:"Solar Flower - Tecnologia de Energia Renovável",
      projBtn:"Veja mais projetos meus"
    },
    en:{
      projTitle: "My Projects",
      projItemTitle1: "Pokémon Box - Manage Your Captures!",
      projItemTitle2: "Solar Flower - Renewable Energy Technology",
      projBtn: "See More of My Projects"
    }
  }
  return (
    <ProjectsI>
      <section className="proj">
        <header className="proj-header">
          <h2 className="proj-title">{texts[languages].projTitle}</h2>
        </header>
        <div className="proj-list">
          <a href="https://github.com/gabrieldiasmenezes/Box-Pokemon" className="proj-item">
            <h3 className="proj-item-title">{texts[languages].projItemTitle1}</h3>
            <div className="proj-img-container">
              <img src="pkm.jpg" alt="Pokémon Box" className="proj-img" />
            </div>
          </a>
          <a href="https://github.com/gabrieldiasmenezes/solarflower" className="proj-item">
            <h3 className="proj-item-title">{texts[languages].projItemTitle2}</h3>
            <div className="proj-img-container">
              <img src="solarFlower.png" alt="Solar Flower" className="proj-img" />
            </div>
          </a>
        </div>
        <button className="proj-btn">
          <Link className="proj-link" to="/projetos">{texts[languages].projBtn}</Link>
        </button>
      </section>
    </ProjectsI>
  );
}
