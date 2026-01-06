import { Link } from "react-router-dom";
import TimeLineCont from "./timeLineCont";
import certifications from "../../../../data/aboutMe/certifications";

export default function Timeline({languages}:LanguageProps) {
  const texts=certifications[languages];
  return (
    <TimeLineCont>
      <section className="container">
        <header className="cert-header">
          <h2 className="cert-title">{texts.projTitle}</h2>
        </header>
        <div className="cert-list">
          <a href="/pdfs/disignThin.pdf" className="cert-item">
            <h3 className="cert-item-title">{texts.projItemTitle1}</h3>
          </a>
          <a href="pdfs/pyA.pdf" className="cert-item">
            <h3 className="cert-item-title">{texts.projItemTitle2}</h3>
          </a>
        </div>
        <button className="cert-btn">
          <Link className="cert-link" to="/certificacoes">{texts.projBtn}</Link>
        </button>
      </section>
    </TimeLineCont>
  );
}
