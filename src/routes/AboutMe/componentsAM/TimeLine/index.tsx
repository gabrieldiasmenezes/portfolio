import { useState } from "react";
import { TimeLineCont } from "./timeLineCont";
interface TimeLineProps {
  languages: "pt" | "en";
}

const courses = [
  { name: "Design Thinking Process - FIAP", year: "2024", link: "/pdfs/disignThin.pdf" },
  { name: "Future-Proof Organizations - FIAP", year: "2024", link: "/pdfs/futurePO.pdf" },
  { name: "HTML e CSS - Alura", year: "2024", link: "/pdfs/JavaA.pdf" },
  { name: "Java: Primeira Aplicação - Alura", year: "2024", link: "/pdfs/HTCSA.pdf" },
  { name: "Python para Data Science - Alura", year: "2024", link: "pdfs/pyA.pdf" },
  { name: "SQLite Online - Alura", year: "2024", link: "/pdfs/SQLA.pdf" }
];

export default function TimeLine({ languages }: TimeLineProps) {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const toggleTooltip = (courseName: string) => {
    setActiveTooltip(prevState => (prevState === courseName ? null : courseName));
  };

  const texts = {
    pt: {
      title: "Certificações",
      course: "Curso",
      year: "Ano de conclusão",
      certificate: "Certificado"
    },
    en: {
      title: "Certifications",
      course: "Course",
      year: "Year of Completion",
      certificate: "Certificate"
    }
  };

  return (
    <TimeLineCont>
      <section className="courses">
        <header>
          <h2 className="title">{texts[languages].title}</h2>
        </header>
        <ol className="line">
          {courses.map((course, index) => (
            <li key={index} className="point" onClick={() => toggleTooltip(course.name)}>
              <div className={`tooltip ${activeTooltip === course.name ? 'active' : ''}`}>
                <p className="text">
                  <strong>{texts[languages].course}:</strong> {course.name}
                </p>
                <p className="text">
                  <strong>{texts[languages].year}:</strong> {course.year}
                </p>
                <a href={course.link} className="Certificate" target="_blank" rel="noopener noreferrer">
                  {texts[languages].certificate}
                </a>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </TimeLineCont>
  );
}
