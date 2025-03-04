import styled from "styled-components";

const ContactS = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .contactContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    background-color: transparent;
    min-height: 100vh; /* Garante que o container ocupe a altura total da tela */
    width: 100%;
    position: relative; /* Mudei de absolute para relative para melhorar o fluxo do layout */
    top: 0%; /* Remove o top: 25% */
    left: 0%;
    z-index: 100;
    overflow-x: hidden; /* Impede o conteúdo de ultrapassar horizontalmente */
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
  }

  .heading {
    font-size: 3rem;
    font-weight: 700;
    color: #fff;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 15px rgba(0, 0, 255, 0.7);
    font-family: 'Poppins', sans-serif;
  }

  .subHeading {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 3rem;
    text-align: center;
    font-weight: 400;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3), 0 0 10px rgba(0, 0, 255, 0.6);
    font-family: 'Poppins', sans-serif;
  }

  .contactLinks {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 3rem;
    width: 100%;
  }

  .contactItem {
    display: flex;
    align-items: center;
    font-size: 1.2rem;
    color: #fff;
    margin: 0.5rem 0;
    text-decoration: none;
    width: 100%;
    font-weight: 500;
    text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    font-family: 'Inter', sans-serif;
    
    &:hover {
      color: #8a2be2; /* Cor roxa */
    }

    svg {
      margin-right: 1rem;
      font-size: 1.7rem;
    }
  }

  .contactForm {
    display: flex;
    flex-direction: column;
    width: 90%;
    gap: 10px;
    background-color: rgba(255, 255, 255, 0.1); /* Vidro fosco */
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 255, 0.6), 0 0 20px rgba(0, 0, 255, 0.4);
    backdrop-filter: blur(5px); /* Efeito vidro fosco */
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: rgba(255, 255, 255, 0.2); /* Muda um pouco o fundo ao passar o mouse */
    }

    input,
    textarea {
      padding: 1.2rem;
      border: 1px solid #8a2be2; /* Cor roxa */
      border-radius: 8px;
      font-size: 1.1rem;
      color: #fff;
      background-color: transparent;
      transition: border-color 0.3s ease-in-out;
      font-family: 'Inter', sans-serif;

      &:focus {
        border-color: #00ffff; /* Azul brilhante quando focado */
      }

      ::placeholder {
        color: rgba(255, 255, 255, 0.6);
      }
    }

    button {
      background-color: #8a2be2; /* Cor roxa */
      color: white;
      padding: 1.2rem;
      border: none;
      border-radius: 8px;
      font-size: 1.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
      font-family: 'Inter', sans-serif;

      &:hover {
        background-color: #5a1a8d; /* Roxo mais escuro */
        transform: scale(1.05);
      }
    }
  }

  .backgroundAnimation {
    position: fixed;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .message {
    font-family: "Inter", sans-serif;
    font-size: 1.2rem;
    color: white; /* Cor do texto */
    background-color: transparent; /* Fundo transparente para destacar o brilho da borda */
    padding: 10px; /* Espaçamento interno para melhorar a estética */
    border-radius: 5px; /* Bordas arredondadas, opcional */
    transition: all 0.3s ease-in-out; /* Transições suaves para todos os efeitos */
    text-shadow: 0 0 5px #8a2be2, 0 0 10px #8a2be2, 0 0 15px #8a2be2, 0 0 20px #8a2be2;
  }

  /* Responsividade para telas menores */
  @media (max-width: 768px) {
    .heading {
      font-size: 2.5rem;
    }

    .subHeading {
      font-size: 1.2rem;
    }

    .contactContainer {
      padding: 1rem;
    }

    .contactForm {
      padding: 1.5rem;
    }

    .contactItem {
      font-size: 1rem;
    }

    input,
    textarea {
      font-size: 1rem;
    }

    button {
      font-size: 1rem;
      padding: 1rem;
    }
  }

  /* Responsividade para telas muito pequenas (mobile) */
  @media (max-width: 480px) {
    .heading {
      font-size: 2rem;
    }

    .subHeading {
      font-size: 1rem;
    }

    .contactContainer {
      padding: 0.5rem;
    }

    .contactForm {
      padding: 1rem;
    }

    .contactItem {
      font-size: 0.9rem;
    }

    input,
    textarea {
      font-size: 0.9rem;
    }

    button {
      font-size: 0.9rem;
      padding: 0.8rem;
    }
  }
`;

export default ContactS;
