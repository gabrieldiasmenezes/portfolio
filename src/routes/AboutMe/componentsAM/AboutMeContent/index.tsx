import AboutMeCont from "./aboutMeCont";
interface AboutMeContentProps{
    languages:"pt"|"en";
}
export default function AboutMeContent({languages}:AboutMeContentProps){
    const texts={
        pt:{
            title:"Sobre Mim",
            text:"Sou estudante de Análise e Desenvolvimento de Sistemas na FIAP, no terceiro semestre, com um forte interesse por soluções tecnológicas inovadoras. Tenho experiência prática em otimização de processos,como no projeto realizado para a Porto Seguro, focando na melhoria da experiência do usuário. Além disso,participei de um projeto voltado para a sustentabilidade, em parceria com empresas como Ultragaz, Ultracargo,SAP, FIA e Mahindra, para desenvolver soluções que enfrentam desafios ambientais. Meu objetivo é continuar aplicando minhas habilidades para criar soluções que impactem positivamente as empresas e a sociedade."
        },
        en:{
            title:"About Me",
            text:"I am a student of Analysis and Systems Development at FIAP, currently in my third semester, with a strong interest in innovative technological solutions. I have practical experience in process optimization, such as in the project carried out for Porto Seguro, focusing on enhancing the user experience. Additionally, I participated in a sustainability-focused project in partnership with companies like Ultragaz, Ultracargo, SAP, FIA, and Mahindra, aimed at developing solutions to address environmental challenges. My goal is to continue applying my skills to create solutions that positively impact businesses and society"
        }
    }
    return(
        <AboutMeCont>
        <section className="aboutMe">
            <h2 className="titleAboutMe">{texts[languages].title}</h2>
            <div className="content">
                <p className="textAboutMe">{texts[languages].text}</p>
                <img className="myPerson" src="myPicture.jpg" alt="Foto de Gabriel Dias Menezes" />
                </div>
        </section>
        </AboutMeCont>
    );
}