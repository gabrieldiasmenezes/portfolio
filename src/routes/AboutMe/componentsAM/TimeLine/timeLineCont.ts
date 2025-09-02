import styled from "styled-components";

const TimeLineCont = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .container {
    display: flex;
    flex-direction: column;
    padding: 100px;
    background: linear-gradient(to bottom,rgba(0, 0, 0, 1), rgba(14, 100, 21, 0), rgba(0, 0, 0, 1));
    align-items: center;
    z-index: 100;
    gap: 40px;
    overflow-x: hidden;
  }

  .cert-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .cert-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2em;  /* Reduzi o tamanho da fonte */
    padding: 20px;
    text-align: center;
    width: 100%;
    color: #ffffff;
  }

  .cert-list {
    height: 70%;
    width: 70%;  /* Reduzi a largura da lista de projetos */
    display: flex;
    flex-direction: column;
    gap: 40px;
    cursor: pointer;
  }

  .cert-item {
    display: flex;
    position: relative;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    align-items: center;
    justify-content: center;
    text-align: center;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 80%;  /* Diminui o tamanho da box */
    margin: 0 auto;
  }

  .cert-item-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4em;  /* Reduzi o tamanho da fonte do título */
    padding: 20px;
    color: rgb(29, 29, 29);
    text-align: center;
    flex-grow: 1;
  }

  .cert-btn {
    background-color: transparent;
    color: white;
    font-size: 1.1em;  /* Reduzi o tamanho da fonte do botão */
    padding: 12px 24px;
    border-radius: 5px;
    border: 2px solid white;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s ease, transform 0.3s ease;
  }

  .cert-btn:hover {
    background-color: rgba(140, 255, 111, 1);
    border: none;
    transform: translateY(-3px);
  }
  .cert-item:hover{
    background-color:rgba(36, 180, 0, 1) ;
    transform: translateY(-3px);
    color:black;
  }

  .cert-btn:active {
    transform: translateY(1px);
  }

  .cert-link {
    font-family: 'Inter', sans-serif;
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    .cert-title {
      font-size: 2em;
    }

    .cert-list {
      width: 90%;
    }

    .cert-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 750px;  /* Ajustei a largura da box para dispositivos menores */
    }
    .cert-item-title {
      font-size: 1.3em;
    }
  }

  @media (max-width: 768px) {
    .cert-title {
      font-size: 1.8em;
      padding: 40px;
    }

    .cert-list {
      width: 100%;
    }

    .cert-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 600px;  /* Reduzi ainda mais a largura da box */
    }

    .cert-item-title {
      font-size: 1.2em;
    }
  }

  @media (max-width: 480px) {
    .cert-title {
      font-size: 1.6em;
      padding: 30px;
    }

    .cert-list {
      width: 100%;
    }

    .cert-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 400px;  /* Ajustei para tamanhos ainda menores */
    }

    .cert-item-title {
      font-size: 1.1em;
    }

    .cert-btn {
      font-size: 1em;
      padding: 10px 20px;
    }
  }
`;

export default TimeLineCont;
