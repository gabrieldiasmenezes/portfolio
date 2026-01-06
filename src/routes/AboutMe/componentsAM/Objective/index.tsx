import objective from "../../../../data/aboutMe/objective";
import ObjectiveSty from "./objective";

export default function Objective({languages}:LanguageProps){
    const texts=objective[languages]
    return (
        <ObjectiveSty>
        <section className="objective">
            <h2 className="titleObjective">{texts.title}</h2>
            <div className="content">
                <p className="textObjective">{texts.text}</p>
                <img className="Picture" src="objetivoProfissional.png" alt="Foto de Gabriel Dias Menezes" />
                </div>
        </section>
        </ObjectiveSty>
    )
}