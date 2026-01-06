"use client"
import NavBar from "../../components/navBar";
import ProjectsS from "../../estilizacao/projects";
import Spline from "@splinetool/react-spline";
import { gitHubRepositories } from "./gitHubRepo";
import { useLanguage } from "../../context/LanguageContext";
import projects from "../../data/projects";

export default function Projetos() {
  const { repositories, loading } = gitHubRepositories();
  const {language}=useLanguage();
  const texts=projects[language];
  
  return (
    <ProjectsS>
      <div className="projectsContainer">
        <main className="content">
          <h1 className="title">{texts.title}</h1>
          <p className="subTitle">{texts.subTitle}</p>
          {loading ? (
            <div className="loaderContainer">
                <div className="loader"></div>
            </div>
          ) : (
            <section
              className="repoContainer"
              aria-labelledby="project-repositories"
            >
              {repositories.map((repo) => (
                <a
                  key={repo.id}
                  className="linkP"
                  href={repo.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <article className="repoBox">
                    <div className="repoContent">
                      <h2 className="repoTitle">{repo.name}</h2>
                      <p className="repoDescription">{repo.description}</p>

                      {/* Barra de linguagens */}
                      <div className="languageBar">
                        {repo.languages.map((lang) => (
                          <div
                            key={lang.name}
                            className="languageSegment"
                            style={{
                              width: `${lang.percentage}%`,
                              backgroundColor: lang.color,
                            }}
                          />
                        ))}
                      </div>

                      {/* Lista de linguagens abaixo */}
                      {repo.languages && repo.languages.length > 0 && (
                        <div className="languageList">
                            {repo.languages.map((lang) => (
                            <div key={lang.name} className="languageItem">
                                <span
                                className="languageDot"
                                style={{ backgroundColor: lang.color }}
                                />
                                <span className="languageName">
                                {lang.name} {lang.percentage}%
                                </span>
                            </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </article>
                </a>
              ))}
            </section>
          )}
        </main>
      </div>

      <NavBar/>

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/v-Fe-h8dCehvBZw7/scene.splinecode"
        aria-hidden="true"
      />
    </ProjectsS>
  );
}
