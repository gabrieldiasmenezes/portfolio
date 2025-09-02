import { Link } from "react-router-dom";
import TimeLineCont from "./timeLineCont";
interface ProjectsIntroProps{
  languages:"pt"|"en";
}
export default function ProjectsIntro({languages}:ProjectsIntroProps) {
  const texts={
    pt:{
      projTitle:"Minhas Certificações",
      projItemTitle1:"Design Thinking Process - FIAP",
      projItemTitle2:"Python para Data Science - Alura",
      projBtn:"Veja Mais Certificações"
    },
    en:{
      projTitle: "My Certifications",
      projItemTitle1:"Design Thinking Process - FIAP",
      projItemTitle2:"Python para Data Science - Alura",
      projBtn: "See More of My Certifications"
    }
  }
  return (
    <TimeLineCont>
      <section className="container">
        <header className="cert-header">
          <h2 className="cert-title">{texts[languages].projTitle}</h2>
        </header>
        <div className="cert-list">
          <a href="/pdfs/disignThin.pdf" className="cert-item">
            <h3 className="cert-item-title">{texts[languages].projItemTitle1}</h3>
          </a>
          <a href="pdfs/pyA.pdf" className="cert-item">
            <h3 className="cert-item-title">{texts[languages].projItemTitle2}</h3>
          </a>
        </div>
        <button className="cert-btn">
          <Link className="cert-link" to="/certificacoes">{texts[languages].projBtn}</Link>
        </button>
      </section>
    </TimeLineCont>
  );
}
