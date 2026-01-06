import about from "../../../../data/aboutMe/aboutMe";
import AboutMeCont from "./aboutMeCont";

export default function AboutMeContent({languages}:LanguageProps){
    const texts=about[languages]
    return(
        <AboutMeCont>
        <section className="aboutMe">
            <h2 className="titleAboutMe">{texts.title}</h2>
            <div className="content">
                <p className="textAboutMe">{texts.text}</p>
                <img className="myPerson" src="myPicture.jpg" alt="Foto de Gabriel Dias Menezes" />
                </div>
        </section>
        </AboutMeCont>
    );
}