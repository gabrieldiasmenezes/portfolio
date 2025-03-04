import styled from "styled-components";

const ObjectiveSty = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

    .objective {
        background: linear-gradient(to bottom, rgb(0, 0, 0), rgb(14, 100, 21));
        display: flex;
        z-index: 100;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 40px;
        padding: 40px 20px;
        width: 100%;
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
`

export default ObjectiveSty;
