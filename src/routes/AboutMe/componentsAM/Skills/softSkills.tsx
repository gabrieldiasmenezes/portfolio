import { FaTrophy, FaBrain, FaClock } from "react-icons/fa"; // Ícones de soft skills
import StyleSkill from "./styleSkill";

interface SoftSkillsProps {
    languages: "pt" | "en";
}

export default function SoftSkills({ languages }: SoftSkillsProps) {
    const texts = {
        pt: {
            title: "Habilidades Interpessoais",
            skills: [
                { name: "Comprometimento com a Qualidade", description: "Entrego sempre resultados além das expectativas.", icon: <FaTrophy className="skillIcon" /> },
                { name: "Criatividade", description: "Capacidade de criar soluções inovadoras.", icon: <FaBrain className="skillIcon" /> },
                { name: "Raciocínio Rápido", description: "Tomada de decisões rápidas para resolver problemas eficazmente.", icon: <FaClock className="skillIcon" /> }
            ]
        },
        en: {
            title: "Interpersonal Skills",
            skills: [
                { name: "Commitment to Quality", description: "I consistently deliver results beyond expectations.", icon: <FaTrophy className="skillIcon" /> },
                { name: "Creativity", description: "Ability to create innovative solutions.", icon: <FaBrain className="skillIcon" /> },
                { name: "Quick Thinking", description: "Rapid decision-making to solve problems effectively.", icon: <FaClock className="skillIcon" /> }
            ]
        }
    };

    return (
        <StyleSkill>
            <section className="softSkills">
                <h2 className="titleSkills">{texts[languages].title}</h2>
                <div className="skillsContainer">
                    {texts[languages].skills.map((skill, index) => (
                        <article className="skill" key={index}>
                            {skill.icon}
                            <p className="skillName">{skill.name}</p>
                            <p className="skillDiscription">{skill.description}</p>
                        </article>
                    ))}
                </div>
            </section>
        </StyleSkill>
    );
}
