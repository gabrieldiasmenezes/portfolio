import styled from "styled-components";

const AboutMeCont = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

    .aboutMe {
        background: linear-gradient(to bottom, #ffffff, rgb(26, 188, 39)); /* Gradiente de branco para verde claro */
        display: flex;
        z-index: 100;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 40px 20px;
        width: 100%;
        min-height: 80vh;
    }

    .titleAboutMe {
        font-family: 'Poppins', sans-serif;
        font-size: 2.5em;
        padding: 20px;
        text-align: center;
        width: 100%;
        color: rgb(0, 0, 0);
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        max-width: 100%;
        margin: 0 auto;
    }

    .textAboutMe {
        font-family: 'Inter', sans-serif;
        font-size: 1.2em;
        width: 55%;
        padding: 20px;
        text-align: justify;
        color: rgb(37, 37, 37);
        line-height: 1.6;
    }

    .myPerson {
        width: 300px;
        height: 300px;
        object-fit: cover;
        border-radius: 8px;
        box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
        transition: transform 0.3s ease-in-out;
    }

    .myPerson:hover {
        transform: scale(1.05);
    }

    /* Responsividade */
    @media (max-width: 1024px) {
        .titleAboutMe {
            font-size: 2.2em;
        }

        .content {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .textAboutMe {
            width: 80%;
        }

        .myPerson {
            width: 250px;
            height: 250px;
        }
    }

    @media (max-width: 768px) {
        .titleAboutMe {
            font-size: 2em;
        }

        .textAboutMe {
            font-size: 1.1em;
            width: 90%;
        }

        .myPerson {
            width: 220px;
            height: 220px;
        }
    }

    @media (max-width: 480px) {
        .titleAboutMe {
            font-size: 1.8em;
        }

        .textAboutMe {
            font-size: 1em;
            width: 95%;
        }

        .myPerson {
            width: 180px;
            height: 180px;
        }
    }
`;

export default AboutMeCont;
