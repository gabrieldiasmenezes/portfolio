"use client"
import NavBar from "../../components/navBar";
import ContactS from "../../estilizacao/contact";
import Spline from "@splinetool/react-spline";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Form from "./FormProps";
import { useLanguage } from "../../context/LanguageContext";
import { contactText } from "../../data/contact";

export default function Contato() {
  const { language } = useLanguage();
  const text = contactText[language];

  return (
    <ContactS>
      <section className="contactContainer">
        <main className="content">
          <h1 className="heading">{text.title}</h1>
          <p className="subHeading">{text.subTitle}</p>

          <section className="contactLinks">
            <a href="mailto:g.dias120306@gmail.com" className="contactItem">
              <FaEnvelope /> g.dias120306@gmail.com
            </a>
            <a href="https://linkedin.com/in/gabrieldiasmenezes" className="contactItem" target="_blank">
              <FaLinkedin /> LinkedIn
            </a>
            <a href="https://github.com/gabrieldiasmenezes" className="contactItem" target="_blank">
              <FaGithub /> GitHub
            </a>
            <a href="tel:+5511973605983" className="contactItem">
              <FaPhone /> +55 11 97360-5983
            </a>
          </section>

          {/* Usando o Form no componente Contato */}
          <Form language={language} />
        </main>
      </section>

      <NavBar/>

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/GQNXY9MhxMeWv2P1/scene.splinecode"
        aria-hidden="true"
      />
    </ContactS>
  );
}
