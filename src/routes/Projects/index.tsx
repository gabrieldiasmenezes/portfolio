import { useState } from "react";
import NavBar from "../../components/navBar";
import ProjectsS from "../../estilizacao/projects";
import Spline from '@splinetool/react-spline';

export default function Projetos() {
    const textProjects = {
        pt: {
            title: "Explore Meu Universo de Projetos!",
            subTitle: "Descubra soluções inovadoras, aplicações criativas e minha jornada no desenvolvimento de software.",
            projects: [
                {
                    title: "Box-Pokemon",
                    description: "Pokémon Box é um projeto em Python que permite organizar e acompanhar capturas de Pokémon, registrando detalhes e monitorando o progresso na Pokédex de forma intuitiva.",
                    link: "https://github.com/gabrieldiasmenezes/Box-Pokemon",
                    image: "pkm.jpg"
                },
                {
                    title: "Pet-Service",
                    description: "Projeto desenvolvido em React para cadastrar e gerenciar pets, permitindo que tutores acompanhem informações, histórico e agendem serviços como pet shop e veterinário de forma prática e organizada.",
                    link: "https://github.com/gabrieldiasmenezes/PetService",
                    image: "petS.png"
                },
                {
                    title: "Solar Flower",
                    description: "Solar Flower é um projeto desenvolvido em React com o objetivo de promover o uso de energia sustentável e renovável por meio da tecnologia. Inspirado no Smart Flower, essa solução foi criada para otimizar a captação e o aproveitamento de energia solar de forma eficiente e inovadora.",
                    link: "https://github.com/gabrieldiasmenezes/solarflower",
                    image: "solarFlower.png"
                },
                {
                    title: "Help Car",
                    description: "HelpCar é um projeto desenvolvido em Next.js para auxiliar motoristas com problemas mecânicos do dia a dia. Através de um chatbot interativo, os usuários podem realizar autodiagnósticos, obter autoorçamentos e até agendar serviços em mecânicas, otimizando tempo e proporcionando mais praticidade no cuidado com seus veículos.",
                    link: "https://github.com/gabrieldiasmenezes/helpcar",
                    image: "helpCar.png"
                },
                {
                    title: "Nautilus-Monitoring",
                    description: "Nautilus-Monitoring é um projeto desenvolvido em JavaScript, HTML e CSS com o objetivo de conscientizar sobre a preservação dos habitats marinhos. A plataforma fornece informações sobre a importância desses ecossistemas para a vida marinha e os impactos negativos do lixo nos ambientes marinhos, destacando a necessidade de ações para proteger esses locais vitais para o equilíbrio ambiental.",
                    link: "https://github.com/gabrieldiasmenezes/Nautilus-Monitoring",
                    image: "NM.png"
                },
                {
                    title: "Vila Sapê",
                    description: "Projeto Vila Sapê é um site desenvolvido em HTML e CSS, inspirado na pousada Vila Sapê. A plataforma apresenta os serviços e a qualidade da pousada, além de possibilitar a realização de reservas de forma prática e intuitiva, proporcionando uma experiência completa aos visitantes interessados em desfrutar do local.",
                    link: "https://github.com/gabrieldiasmenezes/site-pousada",
                    image: "pousada.png"
                }
            ]
        },
        en: {
            title: "Explore My Universe of Projects!",
            subTitle: "Discover innovative solutions, creative applications, and my journey in software development.",
            projects: [
                {
                    title: "Box-Pokemon",
                    description: "Pokémon Box is a Python project that allows users to organize and track Pokémon captures, recording details and monitoring progress in the Pokédex intuitively.",
                    link: "https://github.com/gabrieldiasmenezes/Box-Pokemon",
                    image: "pkm.jpg"
                },
                {
                    title: "Pet-Service",
                    description: "A React project designed to register and manage pets, enabling owners to track information, history, and schedule services such as pet grooming and veterinary appointments conveniently.",
                    link: "https://github.com/gabrieldiasmenezes/PetService",
                    image: "petS.png"
                },
                {
                    title: "Solar Flower",
                    description: "Solar Flower is a React project aimed at promoting the use of sustainable and renewable energy through technology. Inspired by Smart Flower, this solution was created to optimize the capture and utilization of solar energy efficiently and innovatively.",
                    link: "https://github.com/gabrieldiasmenezes/solarflower",
                    image: "solarFlower.png"
                },
                {
                    title: "Help Car",
                    description: "HelpCar is a Next.js project designed to assist drivers with everyday mechanical issues. Through an interactive chatbot, users can perform self-diagnoses, obtain instant cost estimates, and even schedule services at repair shops, optimizing time and convenience in vehicle maintenance.",
                    link: "https://github.com/gabrieldiasmenezes/helpcar",
                    image: "helpCar.png"
                },
                {
                    title: "Nautilus-Monitoring",
                    description: "Nautilus-Monitoring is a project developed using JavaScript, HTML, and CSS with the goal of raising awareness about the preservation of marine habitats. The platform provides information on the importance of these ecosystems for marine life and the negative impacts of waste on marine environments, highlighting the need for actions to protect these vital areas for environmental balance.",
                    link: "https://github.com/gabrieldiasmenezes/Nautilus-Monitoring",
                    image: "NM.png"
                },
                {
                    title: "Vila Sapê",
                    description: "Vila Sapê Project is a website developed using HTML and CSS, inspired by the Vila Sapê inn. The platform showcases the services and quality of the inn, as well as enabling practical and intuitive reservations, providing a complete experience for visitors interested in enjoying the location.",
                    link: "https://github.com/gabrieldiasmenezes/site-pousada",
                    image: "pousada.png"
                }
            ]
        }
    };

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