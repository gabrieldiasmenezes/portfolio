import { FaPython, FaJava, FaJs, FaHtml5, FaCss3Alt, FaLanguage, FaMicrosoft } from "react-icons/fa";
import { SiSqlite, SiFigma } from "react-icons/si";
import StyleSkill from "./styleSkill";

interface HardSkillsProps {
    languages: "pt" | "en";
}

export default function HardSkills({ languages }: HardSkillsProps) {
    const texts = {
        pt: {
            title: "Habilidades Técnicas",
            skills: [
                { name: "Python", description: "Intermediário", icon: <FaPython className="skillIcon" /> },
                { name: "Java", description: "Intermediário", icon: <FaJava className="skillIcon" /> },
                { name: "JavaScript", description: "Intermediário a Avançado", icon: <FaJs className="skillIcon" /> },
                { name: "HTML", description: "Avançado", icon: <FaHtml5 className="skillIcon" /> },
                { name: "CSS", description: "Avançado", icon: <FaCss3Alt className="skillIcon" /> },
                { name: "SQL", description: "Intermediário", icon: <SiSqlite className="skillIcon" /> },
                { name: "Figma", description: "Intermediário", icon: <SiFigma className="skillIcon" /> },
                { name: "Pacote Office", description: "Intermediário - Word, Excel, PowerPoint", icon: <FaMicrosoft className="skillIcon" /> },
                { name: "Inglês", description: "Intermediário", icon: <FaLanguage className="skillIcon" /> },
                { name: "Espanhol", description: "Básico", icon: <FaLanguage className="skillIcon" /> }
            ]
        },
        en: {
            title: "Technical Skills",
            skills: [
                { name: "Python", description: "Intermediate", icon: <FaPython className="skillIcon" /> },
                { name: "Java", description: "Intermediate", icon: <FaJava className="skillIcon" /> },
                { name: "JavaScript", description: "Intermediate to Advanced", icon: <FaJs className="skillIcon" /> },
                { name: "HTML", description: "Advanced", icon: <FaHtml5 className="skillIcon" /> },
                { name: "CSS", description: "Advanced", icon: <FaCss3Alt className="skillIcon" /> },
                { name: "SQL", description: "Intermediate", icon: <SiSqlite className="skillIcon" /> },
                { name: "Figma", description: "Intermediate", icon: <SiFigma className="skillIcon" /> },
                { name: "Microsoft Office", description: "Intermediate - Word, Excel, PowerPoint", icon: <FaMicrosoft className="skillIcon" /> },
                { name: "English", description: "Intermediate", icon: <FaLanguage className="skillIcon" /> },
                { name: "Spanish", description: "Basic", icon: <FaLanguage className="skillIcon" /> }
            ]
        }
    };

    return (
        <StyleSkill>
            <section className="hardSkills">
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
