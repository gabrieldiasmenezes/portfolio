import styled from "styled-components";

const CertificationsS = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");

  .certificationsContainer {
    position: relative;
    display: flex;
    position: relative;
    left:0;
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
    border-bottom: 3px solidrgb(0, 255, 242);
    text-transform: uppercase;
    font-size: 2.2rem;
    color: white;
  }

  .subTitle {
    font-size: 1.2rem;
    color: white;
    opacity: 0.85;
  }

  .certificatesGrid {
    display: grid;
    position: relative;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
    align-items: stretch;
  }

  .certificateLink {
    text-decoration: none;
    height: 100%;
  }

  .certificateBox {
    background: rgba(0, 225, 255, 0.1);
    border: 1px solid rgba(0, 255, 234, 0.6);
    border-radius: 16px;
    padding: 10px 30px;
    transition: transform 0.3s, box-shadow 0.3s;
    color: white;
    gap: 15px;;
    display: flex;
    flex-direction: column;
    justify-content: center;
    backdrop-filter: blur(8px);
    cursor: pointer;
    height: 100%;
  }

  .certificateBox:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 0 15pxrgb(0, 255, 242);
  }

  .certificateName {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 10px;
    color: #ffffff;
  }

  .certificateYear {
    font-size: 1rem;
    color: #ffffff;
    opacity: 0.8;
  }

  /* Responsividade */
  @media (max-width: 768px) {
    .certificationsContainer {
      padding: 60px 20px;
    }

    .title {
      font-size: 1.8rem;
    }

    .subTitle {
      font-size: 1rem;
    }

    .certificatesGrid {
      grid-template-columns: 1fr;
    }

    .certificateBox {
      padding: 30px 15px;
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

export default CertificationsS;
