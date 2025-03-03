import styled from "styled-components";
const ErrorPage=styled.div`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");
    .backgroundAnimation{
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    z-index: 0;
    }
    .errorContainer{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 1000px;
    display: flex;
    gap: 20px;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding: 20px;
    z-index: 100;
    }
    .errorTitle {
    font-family: "Poppins", sans-serif;
    font-size: 3.5em;
    font-weight: 600;
    color: white;
    margin-bottom: 10px;
  }

  .errorMessage {
    font-family: "Inter", sans-serif;
    font-size: 1.5em;
    color: white;
    margin-top: 20px;
  }
  .errorDescription {
    font-family: "Inter", sans-serif;
    font-size: 1.5em;
    color: white;
    margin-top: 20px;
  }
  .buttonHome{
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
    color: white;
    background: none;
    border: 2px solid black;
    border-radius: 8px;
    cursor: pointer;
    position: relative;
    padding: 10px 20px;
    overflow: hidden;
    transition: color 0.3s ease;
    text-decoration: none;
  }
  .buttonHome::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgb(114, 1, 1), rgb(54, 0, 0));
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 0.3s ease-in-out;
    z-index: -1;
  }
  .buttonHome:hover::before {
    transform: scaleY(1);
  }
  .buttonHome:hover {
    color: white;
  }

  .changeLanguage {
    font-family: "Inter", sans-serif;
    font-size: 1.2em;
    color: white;
    background-color: transparent;
    border: 2px solid linear-gradient(135deg, rgb(114, 1, 1), rgb(54, 0, 0));
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    padding: 10px 20px;
    border-radius: 5px;
    transition: background 0.3s ease, color 0.3s ease;
    z-index: 100;
  }
  .changeLanguage:hover {
    background: linear-gradient(135deg, rgb(114, 1, 1), rgb(54, 0, 0));
    color: white;
  }



`
export default ErrorPage;