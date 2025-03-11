import styled from "styled-components";

export const TimeLineCont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    height: 100vh;
    background: linear-gradient(to bottom, rgb(0, 0, 0), transparent, black);
    padding: 60px 40px;
    gap: 120px;
    overflow-x: hidden;
  }

  .title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5em;
    padding: 80px 0;
    text-align: center;
    width: 100%;
    color: #ffffff;
  }

  .line {
    position: relative;
    width: 80%;
    height: 3px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 60px;
    box-shadow: 0 0 40px 16px green;
  }

  .point {
    position: relative;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 10px 4px green;
    cursor: pointer;
    list-style-type: none;
  }

  .tooltip {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.9);
    color: white;
    padding: 20px;
    border-radius: 8px;
    text-align: center;
    white-space: nowrap;
    box-shadow: 0 0 15px 4px green;
    width: 280px;
    font-family: "Inter", sans-serif;
    font-size: 1em;
    opacity: 1;
    transition: opacity 0.2s ease-in-out;
  }

  .point:nth-child(odd) .tooltip {
    bottom: 70px;
  }

  .point:nth-child(even) .tooltip {
    top: 70px;
  }

  .text {
    color: white;
    font-family: "Inter", sans-serif;
    font-size: 0.8em;
    margin-bottom: 10px;
  }

  .text strong {
    font-weight: bold;
    color: #72ff00;
  }

  .Certificate {
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-family: "Inter", sans-serif;
    font-size: 1.1em;
    margin-top: 10px;
    display: block;
    padding: 8px 12px;
    border-radius: 5px;
    background-color: rgba(72, 255, 0, 0.2);
    transition: background-color 0.3s ease, color 0.3s ease;
    text-align: center;
  }

  .Certificate:hover {
    background-color: rgba(72, 255, 0, 0.4);
    color: rgb(72, 255, 0);
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    .title {
      font-size: 2.2em;
      padding: 60px 0;
    }
    .line {
      width: 85%;
    }
    .tooltip {
      width: 250px;
      font-size: 0.9em;
    }
  }

  @media (max-width: 768px) {
    .title {
      font-size: 2em;
      padding: 50px 0;
    }
    .line {
      width: 90%;
    }
    .point {
      width: 14px;
      height: 14px;
    }
    .tooltip {
      width: 220px;
      font-size: 0.8em;
    }
  }

  @media (max-width: 480px) {
    .courses {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0px;
      padding: 20px;
    }

    .line {
      width: 3px;
      height: 300px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .point {
      width: 16px;
      height: 16px;
    }

    .tooltip {
      width: 200px;
      height: 100px;
      font-size: 0.7em;
      padding: 15px;
      left: auto;
      transform: none;
    }

    /* Alternar tooltip para esquerda e direita */
    .point:nth-child(odd) .tooltip {
      left: -230px;
      top: 50%;
      transform: translateY(-50%);
    }

    .point:nth-child(even) .tooltip {
      left: 30px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  /* Estilos para o componente "Objetivos" para garantir que ele não sobreponha a Timeline */
  .objective {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
    padding: 40px;
    width: 100%;
    background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(14, 100, 21));
    margin-bottom: 80px;  // Espaçamento inferior para que não sobreponha a timeline
    overflow-x: hidden;
  }

  .titleObjective {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5em;
    padding: 20px;
    text-align: center;
    width: 100%;
    color: rgb(255, 255, 255);
  }

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    width: 100%;
    max-width: 100%;
    margin: 0 auto;
    flex-wrap: wrap;  // Permite que o conteúdo se ajuste conforme necessário

    @media (max-width: 1024px) {
      flex-direction: column;
      text-align: center;
    }
  }

  .textObjective {
    font-family: 'Inter', sans-serif;
    font-size: 1.2em;
    width: 55%;
    padding: 20px;
    text-align: justify;
    color: rgb(227, 255, 215);
    line-height: 1.6;

    @media (max-width: 1024px) {
      width: 90%;
      text-align: center;
    }
  }

  .Picture {
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 300px;
      height: 300px;
    }
  }
`;

export default TimeLineCont;
