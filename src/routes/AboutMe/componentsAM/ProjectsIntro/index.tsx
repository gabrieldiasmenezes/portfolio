import { Link } from "react-router-dom";
import ProjectsI from "./projectIntro";
import projects from "../../../../data/aboutMe/projects";

export default function ProjectsIntro({languages}:LanguageProps) {
  const texts=projects[languages]
  return (
    <ProjectsI>
      <section className="proj">
        <header className="proj-header">
          <h2 className="proj-title">{texts.projTitle}</h2>
        </header>
        <div className="proj-list">
          <a href="https://github.com/gabrieldiasmenezes/dashVendas" className="proj-item">
            <h3 className="proj-item-title">{texts.projItemTitle1}</h3>
            <div className="proj-img-container">
              <img src="dash.jpg" alt="DashVendas" className="proj-img" />
            </div>
          </a>
          <a href="https://github.com/gabrieldiasmenezes/New-Nautilus-Monitoring" className="proj-item">
            <h3 className="proj-item-title">{texts.projItemTitle2}</h3>
            <div className="proj-img-container">
              <img src="nnm.png" alt="Solar Flower" className="proj-img" />
            </div>
          </a>
        </div>
        <button className="proj-btn">
          <Link className="proj-link" to="/projetos">{texts.projBtn}</Link>
        </button>
      </section>
    </ProjectsI>
  );
}
