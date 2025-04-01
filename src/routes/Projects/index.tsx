import { useState } from "react";
import NavBar from "../../components/navBar";
import ProjectsS from "../../estilizacao/projects";
import Spline from '@splinetool/react-spline';
import { textProjects } from "./ProjectContent";

export default function Projetos() {
    const [languages, setLanguages] = useState<"pt"|"en">("pt");

    const changeLanguage = () => {
        setLanguages((prev) => (prev === "pt" ? "en" : "pt"));
    };

    return (
        <ProjectsS>
            <div className="projectsContainer">
                <main className="content">
                    <h1 className="heading">{textProjects[languages].title}</h1>
                    <p className="subHeading">{textProjects[languages].subTitle}</p>
                    <section className="repoContainer" aria-labelledby="project-repositories">
                        {textProjects[languages].projects.map((repo, index) => (
                            <a key={index} className="linkP" href={repo.link} target="_blank" rel="noopener noreferrer">
                                <article className="repoBox">
                                    <div className="repoContent">
                                        <img src={repo.image} alt={repo.title} className="repoImage" />
                                        <h2 className="repoTitle">{repo.title}</h2>
                                        <p className="repoDescription">{repo.description}</p>
                                    </div>
                                </article>
                            </a>
                        ))}
                    </section>
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