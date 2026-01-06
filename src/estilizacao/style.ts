import styled from "styled-components";

const Style = styled.div`
  .backgroundAnimation{
    top: 0%;
    left: 0%;
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 0;
    pointer-events: none;
  }
  .portfolioIntro {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    z-index: 100;
  }
  
  .mainText {
    font-family: "Poppins", sans-serif;
    font-size: 3.5em;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
  }

  .smallText {
    font-family: "Inter", sans-serif;
    font-size: 1.5em;
    color: white;
    margin-top: 20px;
  }
  .buttons{
    display: flex;
    gap: 20px;
    margin-top: 30px;
  }
  .button{
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
    color: white;
    background: none;
    border: 2px solid white;
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    overflow: hidden;
    transition: color 0.3s ease;
    text-decoration: none;
    border-radius: 8px;
  }
  .button::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: white;
    transform: scaleY(0);
    transform-origin: bottom;
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
  .button:hover::before {
    transform: scaleY(1);
  }
  .button:hover {
    color: black;
    border: none;
  }
  @media (max-width: 768px) {
    .portfolioIntro {
      width: 90%;
    }
    .mainText {
      font-size: 2.5em;
    }
    .smallText {
      font-size: 1.2em;
    }
    .buttons {
      flex-direction: column;
    }
  }
`;

export default Style;

