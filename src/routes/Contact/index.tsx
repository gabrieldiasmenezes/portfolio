// pages/contato.tsx
import { useState } from "react";
import NavBar from "../../components/navBar";
import ContactS from "../../estilizacao/contact";
import Spline from "@splinetool/react-spline";
import { FaEnvelope, FaLinkedin, FaGithub, FaPhone } from "react-icons/fa";
import Form from "./FormProps";

export default function Contato() {
  const [languages, setLanguages] = useState<"pt" | "en">("pt");

  const changeLanguage = () => {
    setLanguages((prev) => (prev === "pt" ? "en" : "pt"));
  };

  const contactText = {
    pt: {
      title: "Entre em Contato",
      subTitle: "Fale comigo através dos canais abaixo ou envie uma mensagem.",
    },
    en: {
      title: "Get in Touch",
      subTitle: "Contact me through the channels below or send a message.",
    },
  };

  return (
    <ContactS>
      <section className="contactContainer">
        <main className="content">
          <h1 className="heading">{contactText[languages].title}</h1>
          <p className="subHeading">{contactText[languages].subTitle}</p>

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
          <Form language={languages} />
        </main>
      </section>

      <NavBar changeLanguage={changeLanguage} languages={languages} />

      <Spline
        className="backgroundAnimation"
        scene="https://prod.spline.design/GQNXY9MhxMeWv2P1/scene.splinecode"
        aria-hidden="true"
      />
    </ContactS>
  );
}
