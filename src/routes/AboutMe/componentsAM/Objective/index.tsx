import ObjectiveSty from "./objective";
interface ObjectiveProps{
    languages:"pt"|"en"

}
export default function Objective({languages}:ObjectiveProps){
    const texts={
        pt:{
            title:"Objetivos Profissionais",
            text:"Meu objetivo é aplicar minhas habilidades em tecnologia para impulsionar a inovação e a transformação digital nas empresas. Busco um ambiente dinâmico que me proporcione liberdade criativa e aprendizado constante, onde eu possa contribuir para a criação de soluções que gerem impacto real e positivo, tanto para as empresas quanto para a sociedade. Tenho um forte interesse em projetos que desafiem minha capacidade de inovação e resolução de problemas, permitindo-me crescer profissionalmente e ajudar a construir o futuro das organizações."
        },
        en: {
            title: "Professional Objectives",
            text: "My goal is to apply my skills in technology to drive innovation and digital transformation within organizations. I am seeking a dynamic environment that offers creative freedom and continuous learning, where I can contribute to the creation of solutions that have a meaningful and positive impact on both businesses and society. I have a strong interest in projects that challenge my innovation and problem-solving abilities, allowing me to grow professionally while helping shape the future of organizations."
        }
    }
    return (
        <ObjectiveSty>
        <section className="objective">
            <h2 className="titleObjective">{texts[languages].title}</h2>
            <div className="content">
                <p className="textObjective">{texts[languages].text}</p>
                <img className="Picture" src="objetivoProfissional.png" alt="Foto de Gabriel Dias Menezes" />
                </div>
        </section>
        </ObjectiveSty>
    )
}