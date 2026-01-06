import styled from "styled-components";

const AboutMeCont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .aboutMe {
    background: linear-gradient(to bottom, #000000ff, rgb(26, 188, 39));
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 80px 24px;
  }

  .titleAboutMe {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    color: #ffffffff;
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

  .textAboutMe {
    font-family: "Inter", sans-serif;
    font-size: 1.15rem;
    color: rgba(255, 255, 255, 1);
    line-height: 1.7;
    text-align: justify;
    flex: 1;
  }

  .myPerson {
    width: 360px;
    height: 360px;
    object-fit: cover;
    border-radius: 12px;
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease;
    flex-shrink: 0;
  }

  .myPerson:hover {
    transform: scale(1.05);
  }

  /* =====================
     RESPONSIVIDADE
  ====================== */

  /* Tablets */
  @media (max-width: 1024px) {
    .titleAboutMe {
      font-size: 2.2rem;
    }

    .content {
      gap: 40px;
    }

    .myPerson {
      width: 300px;
      height: 300px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .content {
      flex-direction: column-reverse;
      text-align: center;
      gap: 32px;
    }

    .textAboutMe {
      text-align: center;
      font-size: 1.05rem;
    }

    .myPerson {
      width: 240px;
      height: 240px;
    }
  }

  /* Mobile pequeno */
  @media (max-width: 480px) {
    .titleAboutMe {
      font-size: 1.8rem;
    }

    .textAboutMe {
      font-size: 1rem;
      text-align: center;
    }

    .myPerson {
      width: 200px;
      height: 200px;
    }
  }
`;

export default AboutMeCont;
