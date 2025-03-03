import styled from "styled-components";

const ProjectsI = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .proj {
    display: flex;
    flex-direction: column;
    gap: 30px;
    width: 100%;
    margin: 0 auto;
    padding: 40px;
    background: linear-gradient(to bottom, rgb(14, 100, 21), rgb(26, 188, 39));
    align-items: center;
    z-index: 100;
  }

  .proj-header {
    text-align: center;
    margin-bottom: 30px;
  }

  .proj-title {
    font-family: 'Poppins', sans-serif;
    font-size: 2.2em;  /* Reduzi o tamanho da fonte */
    padding: 40px;
    text-align: center;
    width: 100%;
    color: #ffffff;
  }

  .proj-list {
    height: 70%;
    width: 70%;  /* Reduzi a largura da lista de projetos */
    display: flex;
    flex-direction: column;
    gap: 40px;
    cursor: pointer;
  }

  .proj-item {
    display: flex;
    position: relative;
    background-color: #FFFFFF;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    align-items: center;
    text-decoration: none;
    transition: all 0.3s ease;
    width: 100%;
    max-width: 80%;  /* Diminui o tamanho da box */
    margin: 0 auto;
  }

  .proj-item-title {
    font-family: 'Poppins', sans-serif;
    font-size: 1.4em;  /* Reduzi o tamanho da fonte do título */
    padding: 20px;
    color: rgb(29, 29, 29);
    text-align: left;
    flex-grow: 1;
  }

  .proj-img-container {
    position: relative;
    right: 0;
    top: 0;
    height: 100%;
    width: 40%;
    overflow: hidden;
    transition: all 0.3s ease-in-out;
  }

  .proj-img {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
  }

  .proj-item:hover .proj-img-container {
    width: 40%;
    border-radius: 8px;
  }

  .proj-item:hover .proj-img {
    transform: scale(1.1);
  }

  .proj-btn {
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

  .proj-btn:hover {
    background-color: rgb(20, 94, 2);
    border: none;
    transform: translateY(-3px);
  }

  .proj-btn:active {
    transform: translateY(1px);
  }

  .proj-link {
    font-family: 'Inter', sans-serif;
    font-size: 0.9em;
    color: #fff;
    text-align: center;
    text-decoration: none;
  }

  /* Responsividade */
  @media (max-width: 1024px) {
    .proj-title {
      font-size: 2em;
    }

    .proj-list {
      width: 90%;
    }

    .proj-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 750px;  /* Ajustei a largura da box para dispositivos menores */
    }

    .proj-img-container {
      width: 100%;
      height: 200px;
    }

    .proj-img {
      width: 100%;
      height: 100%;
    }

    .proj-item-title {
      font-size: 1.3em;
    }
  }

  @media (max-width: 768px) {
    .proj-title {
      font-size: 1.8em;
      padding: 40px;
    }

    .proj-list {
      width: 100%;
    }

    .proj-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 600px;  /* Reduzi ainda mais a largura da box */
    }

    .proj-img-container {
      width: 100%;
      height: 200px;
    }

    .proj-img {
      width: 100%;
      height: 100%;
    }

    .proj-item-title {
      font-size: 1.2em;
    }
  }

  @media (max-width: 480px) {
    .proj-title {
      font-size: 1.6em;
      padding: 30px;
    }

    .proj-list {
      width: 100%;
    }

    .proj-item {
      flex-direction: column;
      align-items: flex-start;
      max-width: 400px;  /* Ajustei para tamanhos ainda menores */
    }

    .proj-img-container {
      width: 100%;
      height: 150px;
    }

    .proj-img {
      width: 100%;
      height: 100%;
    }

    .proj-item-title {
      font-size: 1.1em;
    }

    .proj-btn {
      font-size: 1em;
      padding: 10px 20px;
    }
  }
`;

export default ProjectsI;
