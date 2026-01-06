"use client"
import NavBar from "../../components/navBar";
import Spline from "@splinetool/react-spline";
import { courses } from "./certifications";
import CertificationsS from "../../estilizacao/certifications";
import { contactText } from "../../data/contact";
import { useLanguage } from "../../context/LanguageContext";

export default function Certifications() {
    const { language } = useLanguage();
    const text = contactText[language];

  return (
    <CertificationsS>
      <div className="certificationsContainer">
        <main className="content">
          <h1 className="title">{text.title}</h1>
          <p className="subTitle">{text.subTitle}</p>

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

      <NavBar/>

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/U45yiaEd3HFAXp2c/scene.splinecode"
        aria-hidden="true"
      />
    </CertificationsS>
  );
}
