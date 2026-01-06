import NavBar from "../../components/navBar";
import AboutMe from "../../estilizacao/aboutMe";
import Spline from "@splinetool/react-spline";
import AboutMeContent from "./componentsAM/AboutMeContent";
import HardSkills from "./componentsAM/Skills/hardSkills";
import SoftSkills from "./componentsAM/Skills/softSkills";
import Timeline from "./componentsAM/TimeLine";
import Objective from "./componentsAM/Objective";
import ProjectsIntro from "./componentsAM/ProjectsIntro";
import { Download } from "lucide-react"; 
import { useLanguage } from "../../context/LanguageContext";
import main from "../../data/aboutMe/main";
export default function SobreMim(){
    const {language}=useLanguage();
    const texts=main[language];
    return(
        <AboutMe>
            <NavBar/>
                    
            {/* Introdução */}
            <header className="Intro">
                <h1 className="textIntro">{texts.title}</h1>
                <button className="buttonIntro" aria-label="Desça para ver minha jornada">
                    <Download className="icon" size={30} />
                    <a className="cv" href="/pdfs/Gabriel_Dias_Curriculo.pdf">{texts.button}</a>
                </button>
            </header>
            <div className="degrade">o</div>
            <section className="components">
            {/* Seção sobre mim */}
            <AboutMeContent languages={language}/>
            {/* Hard Skills */}
            <HardSkills languages={language}/>
            {/* Soft Skills */}
            <SoftSkills languages={language}/>
            {/* Timeline dos cursos que fiz */}
            <Timeline languages={language}/>
            {/* Objetivos profissionais */}
            <Objective languages={language}/>
            {/* Introdução aos meus projetos */}
            <ProjectsIntro languages={language}/>
            {/* Icones de contato */}
            </section>
            {/* Animação 3D */}
            <Spline className="backgroundAnimation" scene="https://prod.spline.design/b9EhrOrNMBuhMUKL/scene.splinecode" />
        </AboutMe>
    );
}