import styled from "styled-components";

const ProjectsS = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .projectsContainer {
    position: relative;
    left:0;
    display: flex;
    z-index: 100;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    font-family: "Poppins", sans-serif;
    padding: 80px 40px;
  }

  .content {
    width: 100%;
    max-width: 1200px;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  .title {
    display: inline-block;
    padding-bottom: 5px;
    margin-bottom: 20px;
    border-bottom: 3px solid #ff8800;
    text-transform: uppercase;
    font-size: 2.2rem;
    color: white;
  }

  .subTitle {
    font-size: 1.2rem;
    color: white;
    opacity: 0.85;
  }
  .loaderContainer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 200px; /* altura do espaço do loader */
    }

    .loader {
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top: 4px solid #ff8800;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        animation: spin 1s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }


  .repoContainer {
    position:relative;
    left:0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 25px;
    align-items: stretch;
  }

  .linkP {
    text-decoration: none;
    height: 100%;
  }

 .repoBox {
  background: rgba(255, 136, 0, 0.1);
  border: 1px solid rgba(255, 136, 0, 0.6);
  border-radius: 16px;
  padding: 10px 30px; 
  display: flex;
  flex-direction: column;
  gap: 15px; 
  justify-content: flex-start; 
  color: white;
  backdrop-filter: blur(8px);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  height: 100%;
  box-sizing: border-box;
}

.repoBox:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 0 15px #ff8800;
}


  .repoTitle {
    font-size: 1.3rem;
    font-weight: bold;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .repoDescription {
    font-size: 0.95rem;
    opacity: 0.8;
    margin-bottom: 15px;
    line-height: 1.4;
  }

  /* Barra de linguagens */
  .languageBar {
    display: flex;
    height: 12px;
    border-radius: 6px;
    overflow: hidden;
    margin-bottom: 12px;
  }

  .languageSegment {
    height: 100%;
    transition: width 0.3s ease;
  }

  /* Lista de linguagens */
  .languageList {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    justify-content: flex-start;
  }

  .languageItem {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    font-size: 0.85rem;
    color: #ffffff;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    padding: 4px 10px;
    border-radius: 12px;
  }

  .languageDot {
    width: 10px;
    height: 10px;
    border-radius: 50%;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .projectsContainer {
      padding: 60px 20px;
    }

    .title {
      font-size: 1.8rem;
    }

    .subTitle {
      font-size: 1rem;
    }

    .repoContainer {
      grid-template-columns: 1fr;
    }
  }

  .backgroundAnimation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
`;

export default ProjectsS;
