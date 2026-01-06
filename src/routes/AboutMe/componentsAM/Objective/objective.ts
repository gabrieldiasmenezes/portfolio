import styled from "styled-components";

const ObjectiveSty = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .objective {
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(14, 100, 21));
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;
  }

  .titleObjective {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 48px;
    text-align: center;
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    width: 100%;
    max-width: 1400px;
  }

  .textObjective {
    font-family: "Inter", sans-serif;
    font-size: 1.15rem;
    line-height: 1.7;
    color: rgb(227, 255, 215);
    text-align: justify;
    flex: 1;
  }

  .Picture {
    width: 340px;
    height: 340px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.35);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .Picture:hover {
    transform: scale(1.05);
  }

  /* =====================
     RESPONSIVIDADE
  ====================== */

  /* Tablets */
  @media (max-width: 1024px) {
    .titleObjective {
      font-size: 2.2rem;
    }

    .content {
      gap: 40px;
    }

    .Picture {
      width: 300px;
      height: 300px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .content {
      flex-direction: column;
      text-align: center;
      gap: 32px;
    }

    .textObjective {
      text-align: left;
      font-size: 1.05rem;
    }

    .Picture {
      width: 240px;
      height: 240px;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    .titleObjective {
      font-size: 1.8rem;
    }

    .textObjective {
      font-size: 1rem;
    }

    .Picture {
      width: 200px;
      height: 200px;
    }
  }
`;

export default ObjectiveSty;
