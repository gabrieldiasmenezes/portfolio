import soft from "../../../../data/aboutMe/softskills";
import StyleSkill from "./styleSkill";

export default function SoftSkills({ languages }: LanguageProps) {
    const text=soft[languages]

  return (
    <StyleSkill>
      <section className="softSkills">
        <h2 className="titleSkills">{text.title}</h2>

        <div className="skillsContainer">
          {text.skills.map((skill, index) => (
            <article className="skillCard" key={index}>
              <div className="icon">{skill.icon}</div>
              <p className="skillName">{skill.name}</p>
              <p className="skillDescription">{skill.description}</p>
            </article>
          ))}
        </div>
      </section>
    </StyleSkill>
  );
}
