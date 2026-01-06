import StyleSkill from "./styleSkill";
import hard from "../../../../data/aboutMe/hardskills";


export default function HardSkills({ languages }: LanguageProps) {
  const texts=hard[languages]

  return (
    <StyleSkill>
      <section className="hardSkills">
        <h2 className="titleSkills">{texts.title}</h2>

        {texts.categories.map((category, index) => (
          <div className="category" key={index}>
            <h3 className="categoryTitle">{category.title}</h3>

            <div className="skillsContainer">
              {category.skills.map((skill, i) => (
                <article className="skillCard" key={i}>
                  <div className="icon">{skill.icon}</div>
                  <p>{skill.name}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </section>
    </StyleSkill>
  );
}
