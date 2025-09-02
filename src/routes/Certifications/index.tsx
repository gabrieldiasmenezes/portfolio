import { useState } from "react";
import NavBar from "../../components/navBar";
import Spline from "@splinetool/react-spline";
import { courses } from "./certifications";
import CertificationsS from "../../estilizacao/certifications";

export default function Certifications() {
  const texts = {
    pt: {
      title: "Minhas Certificações",
      subTitle:
        "Explore os cursos e certificações que obtive durante minha jornada de aprendizado.",
    },
    en: {
      title: "My Certifications",
      subTitle:
        "Explore the courses and certifications I've obtained during my learning journey.",
    },
  };

  const [language, setLanguage] = useState<"pt" | "en">("pt");

  const changeLanguage = () => {
    setLanguage((prev) => (prev === "pt" ? "en" : "pt"));
  };

  return (
    <CertificationsS>
      <div className="certificationsContainer">
        <main className="content">
          <h1 className="title">{texts[language].title}</h1>
          <p className="subTitle">{texts[language].subTitle}</p>

          <section className="certificatesGrid">
            {courses.map((course, index) => (
              <a
                key={index}
                className="certificateLink"
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <article className="certificateBox">
                  <div className="certificateContent">
                    <h2 className="certificateName">{course.name}</h2>
                    <p className="certificateYear">{course.year}</p>
                  </div>
                </article>
              </a>
            ))}
          </section>
        </main>
      </div>

      <NavBar changeLanguage={changeLanguage} languages={language} />

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/v-Fe-h8dCehvBZw7/scene.splinecode"
        aria-hidden="true"
      />
    </CertificationsS>
  );
}
