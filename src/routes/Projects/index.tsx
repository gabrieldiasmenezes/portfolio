import { useState } from "react";
import NavBar from "../../components/navBar";
import ProjectsS from "../../estilizacao/projects";
import Spline from "@splinetool/react-spline";
import { gitHubRepositories } from "./gitHubRepo";

export default function Projetos() {
  const texts = {
    pt: {
      title: "Explore Meu Universo de Projetos!",
      subTitle:
        "Descubra soluções inovadoras, aplicações criativas e minha jornada no desenvolvimento de software.",
    },
    en: {
      title: "Explore My Universe of Projects!",
      subTitle:
        "Discover innovative solutions, creative applications, and my journey in software development.",
    },
  };

  const { repositories, loading } = gitHubRepositories();
  const [languages, setLanguages] = useState<"pt" | "en">("pt");

  const changeLanguage = () => {
    setLanguages((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <ProjectsS>
      <div className="projectsContainer">
        <main className="content">
          <h1 className="title">{texts[languages].title}</h1>
          <p className="subTitle">{texts[languages].subTitle}</p>
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

      <NavBar changeLanguage={changeLanguage} languages={languages} />

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/v-Fe-h8dCehvBZw7/scene.splinecode"
        aria-hidden="true"
      />
    </ProjectsS>
  );
}
