import styled from "styled-components";

const StyleSkill = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

    .titleSkills {
        font-family: 'Poppins', sans-serif;
        font-size: 2.5em;
        padding: 20px;
        text-align: center;
        width: 100%;
        color: #ffffff; /* Branco para contraste */
    }

    .hardSkills, .softSkills {
        padding: 50px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        z-index: 100;
    }

    .hardSkills {
        background: linear-gradient(to bottom,rgb(26, 188, 39), rgb(14, 100, 21)); /* Gradiente de branco para verde claro */
        padding: 50px 20px; /* Deixa a box mais espaçada */
        gap: 40px;
    }

    .softSkills {
        background: linear-gradient(to bottom, rgb(14, 100, 21), rgb(0, 0, 0)); /* Gradiente de verde para preto (ou verde escuro) */
        padding: 100px 70px;
        gap: 20px;
    }

    .skillsContainer {
        display: flex;
        justify-content: center;
        gap: 50px; /* Ajuste do espaçamento entre as skills */
        flex-wrap: wrap;
    }

    .skill {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        background-color: rgb(255, 255, 255); /* Fundo branco para cada skill */
        padding: 15px;
        border-radius: 10px; /* Bordas arredondadas para um visual mais suave */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra suave para destacar as skills */
        transition: transform 0.3s ease-in-out; /* Suaviza a transição de aumento */
    }

    .skill:hover {
        transform: scale(1.1); /* Aumenta o tamanho da skill ao passar o mouse */
    }

    .skillIcon {
        width: 50px;
        height: 50px;
        color: rgb(22, 160, 57); /* Cor das ícones para combinar com o gradiente */
    }

    .skillName {
        font-family: 'Inter', sans-serif;
        font-size: 1.2em;
        color: #333;
        text-align: center;
    }

    .skillDiscription {
        font-family: 'Inter', sans-serif;
        font-size: 0.9em;
        color: #333;
        text-align: center;
    }
`;

export default StyleSkill;
