import styled from "styled-components";

const StyleSkill = styled.div`

  /* =========================
     BASE (Hard + Soft)
  ========================== */
  .hardSkills,
  .softSkills {
    padding: 80px 24px;
    display: flex;
    flex-direction: column;
    gap: 64px;
    align-items: center;
    width: 100%;
    position: relative;
  }

  /* =========================
     VARIAÇÕES DE FUNDO
  ========================== */
  .hardSkills {
    background: linear-gradient(
      to bottom,
      rgb(26, 188, 39),
      rgb(14, 100, 21)
    );
  }

  .softSkills {
    background: linear-gradient(
      to bottom,
      rgb(14, 100, 21),
      rgb(0, 0, 0)
    );
  }

  /* =========================
     TÍTULOS
  ========================== */
  .titleSkills {
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    color: #fff;
    text-align: center;
  }

  .category {
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 24px;
  }

  .categoryTitle {
    font-family: "Poppins", sans-serif;
    font-size: 1.4rem;
    color: #eaffea;
  }

  /* =========================
     GRID DE SKILLS
  ========================== */
  .skillsContainer {
    width: 100%;
    max-width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 24px;
  }

    .skillCard {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(6px);
    border-radius: 14px;
    padding: 22px 18px;
    display: flex;
    flex-direction: column;
    align-items: center; /* mantém central */
    gap: 10px;
    color: #fff;
    transition: all 0.3s ease;
    border: 1px solid rgba(255, 255, 255, 0.15);
    }

  .skillCard:hover {
    transform: translateY(-6px);
    background: rgba(255, 255, 255, 0.18);
  }

  .icon {
    font-size: 2.4rem;
    color: rgba(127, 235, 161, 1);
  }

  .skillName {
    font-family: "Poppins", sans-serif;
    font-size: 1rem;
  }

  .skillDescription {
    font-family: "Inter", sans-serif;
    font-size: 0.9rem;
    color: #dfffe0;
  }

  /* =========================
     RESPONSIVO
  ========================== */
  @media (max-width: 768px) {
    .titleSkills {
      font-size: 2rem;
    }

    .categoryTitle {
      font-size: 1.2rem;
      text-align: center;
    }
  }
`;

export default StyleSkill;
