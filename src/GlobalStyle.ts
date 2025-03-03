import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100vw;
        min-height: 100vh;
        overflow-x: hidden; 
        overflow-y: auto;
    }

    #root {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }
    body, html {
        overflow-x: hidden; /* Garantir que nenhuma rolagem horizontal seja permitida */
    }
`;

export default GlobalStyle;
