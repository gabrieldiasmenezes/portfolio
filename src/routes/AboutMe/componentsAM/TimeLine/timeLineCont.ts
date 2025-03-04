import styled from "styled-components";

export const TimeLineCont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .courses {
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
    width: 100%;
    height: 60vh;
    gap: 50px;
    background: linear-gradient(to bottom, rgb(0, 0, 0), transparent, black);
    border: 1px solid black;
    padding: 20px;
    overflow-x: hidden;
  }

  .title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.5em;
    padding: 50px;
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
    margin-top: 20px;
    box-shadow: 0 0 40px 16px green;
    transition: transform 0.2s ease-in-out;
  }

  .point {
    position: relative;
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 10px 4px green;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
    list-style-type: none;
  }

  .point:hover {
    transform: scale(1.3);
  }

  .point:hover .tooltip {
    display: block;
  }

  .tooltip {
    display: none;
    position: absolute;
    bottom: 40px;
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
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
  }

  .tooltip.active {
    display: block;
    opacity: 1;
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
      padding: 40px;
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
      padding: 30px;
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
    align-items: center;
    height: 100vh; /* Ajusta a altura para o conteúdo */
    padding: 10px;
  }

  .line {
    width: 3px;
    height: 100%; /* Ajusta a altura para a linha */
    box-shadow: 0 0 40px 16px green;
    margin: 20px 0;
    position: relative; /* Necessário para posicionar os pontos corretamente */
    display: flex;
    flex-direction: column;
    justify-content: space-between; /* Distribui os pontos igualmente */
    padding: 10px 0;
  }

  .point {
    width: 16px;
    height: 16px;
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 10px 4px green;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }

  .tooltip {
    width: 200px;
    font-size: 0.7em;
    padding: 15px;
    bottom: 50px; /* Ajuste a posição para se alinhar com os pontos */
  }

  .Certificate {
    font-size: 1em;
  }
}

`;
