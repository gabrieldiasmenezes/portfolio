import styled from "styled-components";

const ProjectsS = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

    .projectsContainer {
        background: transparent;
        width: 100%;
        min-height: 200vh;
        font-family: "Poppins", sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
        top: 20%;
        left: 0%;
        overflow-x: hidden;
        z-index: 100;
    }

    .content {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 50px;
        padding: 0 15px; /* Adiciona um pouco de padding para que o conteúdo não fique colado nas bordas da tela */
    }

    .heading {
        font-size: 2.5rem;
        text-transform: uppercase;
        border-bottom: 3px solid #ff8800;
        display: inline-block;
        padding-bottom: 5px;
        margin-bottom: 30px;
        color: #ffffff;
    }

    .subHeading {
        font-size: 1.5rem;
        color: #ffffff;
        opacity: 0.8;
        margin-bottom: 20px;
    }

    .repoContainer {
        display: flex;
        flex-wrap: wrap;
        gap: 40px; /* Maior espaçamento entre as boxes */
        justify-content: center; /* Centraliza as boxes */
        flex-direction: row;
    }

    .linkP {
        text-decoration: none;
    }

    .repoBox {
        background: rgba(255, 136, 0, 0.2);
        border: 2px solid #ff8800;
        border-radius: 20px;
        width: 100%;
        min-height: 200px; /* Aumenta a altura mínima das boxes */
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        transition: transform 0.3s, box-shadow 0.3s;
        position: relative;
        overflow: hidden;
    }

    .repoBox:hover {
        transform: scale(1.05);
        box-shadow: 0 0 15px #ff8800;
    }

    .repoContent {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        gap: 30px; /* Aumenta o espaçamento entre os elementos dentro da box */
        flex-direction: row;
    }

    .repoImage {
        width: 200px;
        height: 120px;
        border-radius: 10px;
        object-fit: cover;
        margin-right: 20px;
        border: 2px solid #ff8800;
    }

    .repoText {
        flex: 1;
        text-align: left;
        color: #ffffff;
    }

    .repoTitle {
        font-size: 1.8rem;
        margin-bottom: 5px;
        text-decoration: none;
        color: #ffffff;
    }

    .repoDescription {
        font-size: 1rem;
        width: 50%;
        opacity: 0.8;
        color: #ffffff;
    }

    .backgroundAnimation {
        position: fixed;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    /* --- Responsividade --- */

    @media (max-width: 1200px) {
        .content {
            max-width: 100%; /* Remove a largura máxima para dispositivos menores */
            padding: 0 20px;
        }

        .heading {
            font-size: 2rem;
        }

        .repoBox {
            min-height: 180px;
            padding: 20px;
        }

        .repoTitle {
            font-size: 1.6rem;
        }

        .repoDescription {
            font-size: 0.9rem;
            width: 60%;
        }

        .repoImage {
            width: 150px;
            height: 90px;
        }
    }

    @media (max-width: 900px) {
        .heading {
            font-size: 1.8rem;
        }

        .subHeading {
            font-size: 1.3rem;
        }

        .repoBox {
            min-height: 150px;
            padding: 20px;
        }

        .repoImage {
            width: 120px;
            height: 80px;
        }

        .repoTitle {
            font-size: 1.4rem;
        }

        .repoDescription {
            width: 70%;
        }

        .repoContent {
            flex-direction: column;
            align-items: center; /* Centraliza os elementos dentro da box */
            gap: 20px; /* Aumenta o espaçamento entre os itens */
        }

        .repoImage {
            margin-right: 0;
        }
    }

    @media (max-width: 600px) {
        .heading {
            font-size: 1.6rem;
            margin-bottom: 20px;
        }

        .subHeading {
            font-size: 1.2rem;
        }

        .repoBox {
            min-height: 130px;
            padding: 15px;
        }

        .repoImage {
            width: 100px;
            height: 60px;
        }

        .repoTitle {
            font-size: 1.2rem;
        }

        .repoDescription {
            font-size: 0.8rem;
            width: 80%;
        }

        .repoContainer {
            gap: 30px; /* Aumenta o espaçamento entre as boxes */
        }

        .repoContent {
            flex-direction: column;
            align-items: center;
            gap: 15px; /* Aumenta o espaçamento entre os itens */
        }
    }

    @media (max-width: 400px) {
        .heading {
            font-size: 1.4rem;
        }

        .repoBox {
            min-height: 120px;
            padding: 10px;
        }

        .repoImage {
            width: 80px;
            height: 50px;
        }

        .repoDescription {
            font-size: 0.7rem;
        }

        .repoContainer {
            gap: 40px; /* Mais espaço entre as boxes */
        }

        .repoContent {
            flex-direction: column;
            align-items: center;
            gap: 10px;
        }
    }
`;

export default ProjectsS;
