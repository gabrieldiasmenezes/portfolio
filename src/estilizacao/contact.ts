import styled from "styled-components";

const ContactS = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500&display=swap");

  /* =========================
     CONTAINER PRINCIPAL
  ========================== */
  .contactContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem 1rem;
    min-height: 100vh;
    width: 100%;
    position: relative;
    z-index: 10;
  }

  .content {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  /* =========================
     TÍTULOS
  ========================== */
  .heading {
    font-family: "Poppins", sans-serif;
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5),
      0 0 15px rgba(0, 0, 255, 0.7);
  }

  .subHeading {
    font-family: "Inter", sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
    color: #fff;
    margin-bottom: 3rem;
    max-width: 800px;
    text-align: center;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3),
      0 0 10px rgba(0, 0, 255, 0.6);
  }

  /* =========================
     GRID UX (CONTATOS | FORM)
  ========================== */
  .contactGrid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 3rem;
    width: 100%;
    align-items: start;
  }

  /* =========================
     LINKS DE CONTATO
  ========================== */
  .contactLinks {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    width: 100%;
    justify-content: start;
    padding-top: 0.5rem;
    margin-bottom: 20px;
  }

  .contactItem {
    display: flex;
    align-items: center;
    gap: 1rem;
    font-family: "Inter", sans-serif;
    font-size: 1.1rem;
    font-weight: 500;
    color: #fff;
    text-decoration: none;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    transition: color 0.3s ease, transform 0.2s ease;

    svg {
      font-size: 1.6rem;
      flex-shrink: 0;
    }

    &:hover {
      color: #8a2be2;
      transform: translateX(4px);
    }
  }

  /* =========================
     FORMULÁRIO
  ========================== */
  .contactForm {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
    padding: 2rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.12);
    backdrop-filter: blur(6px);
    border: 1px solid rgba(255, 255, 255, 0.25);
    box-shadow: 0 0 15px rgba(0, 0, 255, 0.5),
      0 0 30px rgba(0, 0, 255, 0.3);
  }

  .contactForm input,
  .contactForm textarea {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    padding: 1rem 1.2rem;
    border-radius: 8px;
    border: 1px solid #8a2be2;
    background: transparent;
    color: #fff;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .contactForm textarea {
    min-height: 140px;
    resize: vertical;
  }

  .contactForm input:focus,
  .contactForm textarea:focus {
    border-color: #00ffff;
    box-shadow: 0 0 8px rgba(0, 255, 255, 0.6);
  }

  .contactForm ::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }

  .contactForm button {
    margin-top: 0.5rem;
    padding: 1rem;
    border-radius: 8px;
    border: none;
    font-size: 1.1rem;
    font-family: "Inter", sans-serif;
    font-weight: 600;
    cursor: pointer;
    color: #fff;
    background: #8a2be2;
    transition: background 0.3s ease, transform 0.2s ease;
  }

  .contactForm button:hover {
    background: #8c45c5ff;
    transform: translateY(-2px);
  }

  /* =========================
     MENSAGENS
  ========================== */
  .message {
    font-family: "Inter", sans-serif;
    font-size: 1rem;
    color: #fff;
    text-align: center;
    margin-top: 0.5rem;
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2;
  }

  /* =========================
     SPLINE BACKGROUND
  ========================== */
  .backgroundAnimation {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  /* =========================
     RESPONSIVO
  ========================== */
  @media (max-width: 900px) {
    .contactGrid {
      grid-template-columns: 1fr;
    }


  }

  @media (max-width: 480px) {
    .heading {
      font-size: 2.2rem;
    }

    .subHeading {
      font-size: 1.1rem;
    }

    .contactForm {
      padding: 1.5rem;
    }
  }
`;

export default ContactS;
