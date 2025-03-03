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
        overflow-x: hidden; /* 🚀 Impede a barra horizontal */
    }

    #root {
        width: 100vw;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x: hidden; /* 🚀 Garante que nenhum elemento dentro do root cause overflow */
    }
`;

export default GlobalStyle;
