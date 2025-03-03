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
        position: absolute;
        top: 20%;
        overflow: hidden;
        z-index: 100;
    }

    .content {
        width: 100%;
        max-width: 1200px;
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: 50px;
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
        gap: 20px;
        justify-content: center;
        flex-direction: column;
    }
    .linkP{text-decoration:none}

    .repoBox {
        background: rgba(255, 136, 0, 0.2);
        border: 2px solid #ff8800;
        border-radius: 20px;
        width: 100%;
        min-height: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 15px;
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
        width: 80%;
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
        width: 30%;
        opacity: 0.8;
        color: #ffffff;
    }

    .backgroundAnimation {
        position: fixed;
        top: 0%;
        left: 0%;
        width: 100%;
        height: 100%;
        z-index:0;
    }
`;

export default ProjectsS;
