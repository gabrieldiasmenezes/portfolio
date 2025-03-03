import styled from "styled-components";

const AboutMe = styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

    .backgroundAnimation {
        position: fixed;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        z-index: 0;
    }

    .Intro {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 100%;
        max-width: 100vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        padding: 20px;
        z-index: 100;
        gap: 60px;
    }

    .textIntro {
        font-family: 'Poppins', sans-serif;
        font-size: 3.0em;
        color: white;
    }

    .buttonIntro {
        display: flex;
        cursor: pointer;
        font-family: 'Inter', sans-serif;
        font-size: 1.2em;
        background-color: transparent;
        border: 1px solid white;
        color: white;
        gap: 20px;
        align-items: center;
        border-radius: 8px;
        padding: 10px 20px;
        position: relative;
        overflow: hidden;
    }
    .buttonIntro::before {
        content: "";
        position: absolute;
        bottom: -100%;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        border-radius: 50% 50% 0 0;
        transition: bottom 0.4s ease-in-out;
        z-index: -1;
    }
    .buttonIntro:hover::before {
        bottom: 0;
        border-radius: 0;
    }
    .buttonIntro:hover {
        color: black;
        border: none;
    }
    .cv {
        text-decoration: none;
        color: white;
    }
    .cv:hover {
        color: black;
    }

    .degrade {
        position: absolute;
        display: flex;
        width: 100%;
        height: 10%;
        top: 90%;
        color: transparent;
        background: linear-gradient(to bottom, transparent, #fff);
        z-index: 100;
    }
    .components{
        position: absolute;
        left: 0%;
        top: 100%;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 100;
    }
    /* Media Queries for Responsiveness */

    @media (max-width: 1024px) {
        .Intro {
            gap: 40px;
            width: 90%;
        }
        .textIntro {
            font-size: 2.5em;
        }
        .buttonIntro {
            font-size: 1.1em;
            padding: 8px 16px;
        }
    }

    @media (max-width: 768px) {
        .Intro {
            gap: 30px;
            width: 85%;
        }
        .textIntro {
            font-size: 2.0em;
        }
        .buttonIntro {
            font-size: 1em;
            padding: 8px 14px;
        }
    }

    @media (max-width: 480px) {
        .Intro {
            gap: 20px;
            width: 80%;
        }
        .textIntro {
            font-size: 1.5em;
        }
        .buttonIntro {
            font-size: 0.9em;
            padding: 6px 12px;
        }
    }
`;

export default AboutMe;
