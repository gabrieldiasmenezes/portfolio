import { useState } from "react";
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
export default function SobreMim(){
    const texts={
        pt:{
            title:"Muito mais do que linhas de código, crio experiências e soluções que transformam ideias em realidade.",
            button:"Baixar currículo"
        },
        en:{
            title:"More than just lines of code, I create experiences and solutions that bring ideas to life.",
            button:"Download CV"
        }
    }
    const [languages,setLanguages]=useState<"pt"|"en">("pt")
    const changeLanguages=()=>{
        setLanguages((prev)=>prev==="pt"?"en":"pt")
    }
    return(
        <AboutMe>
            <NavBar changeLanguage={changeLanguages} languages={languages} />
                    
            {/* Introdução */}
            <header className="Intro">
                <h1 className="textIntro">{texts[languages].title}</h1>
                <button className="buttonIntro" aria-label="Desça para ver minha jornada">
                    <Download className="icon" size={30} />
                    <a className="cv" href="/pdfs/Gabriel_Dias_Curriculo.pdf">{texts[languages].button}</a>
                </button>
            </header>
            <div className="degrade">o</div>
            <section className="components">
            {/* Seção sobre mim */}
            <AboutMeContent languages={languages}/>
            {/* Hard Skills */}
            <HardSkills languages={languages}/>
            {/* Soft Skills */}
            <SoftSkills languages={languages}/>
            {/* Timeline dos cursos que fiz */}
            <Timeline languages={languages}/>
            {/* Objetivos profissionais */}
            <Objective languages={languages}/>
            {/* Introdução aos meus projetos */}
            <ProjectsIntro languages={languages}/>
            {/* Icones de contato */}
            </section>
            {/* Animação 3D */}
            <Spline className="backgroundAnimation" scene="https://prod.spline.design/b9EhrOrNMBuhMUKL/scene.splinecode" />
        </AboutMe>
    );
}