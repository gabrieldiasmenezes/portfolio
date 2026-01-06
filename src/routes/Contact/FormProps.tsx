"use client"
import { useState } from "react";
import emailjs from "emailjs-com";
import { contactForm } from "../../data/contact";
interface FormProps {
  language: "pt" | "en";
}

const Form = ({ language }: FormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);
  const text = contactForm[language];
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Envie o formulário usando os parâmetros corretos
    emailjs
      .sendForm(
        "emailService", // Substitua pelo seu Service ID
        "id_modelo_port", // Substitua pelo seu Template ID
        event.target as HTMLFormElement,
        "8Yx-d4E-eTu87G7lb" // Substitua pelo seu User ID
      )
      .then(
        () => {
          setIsSent(true);
          setIsError(false);
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          setIsError(true);
          setIsSent(false);
          console.error("Erro ao enviar e-mail:", error);
        }
      );
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <form className="contactForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder={text.form.name}
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder={text.form.email}
        value={formData.email}
        onChange={handleChange}
        required
      />
      <textarea
        name="message"
        placeholder={text.form.message}
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">{text.form.send}</button>

      {isSent && <p className="message">{text.form.messageC}</p>}
      {isError && <p className="message">{text.form.messageE}</p>}
    </form>
  );
};

export default Form;
