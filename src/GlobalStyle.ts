import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
        overflow-x: hidden;
    }

    #root {
        width: 100%;
        max-width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
`;

export default GlobalStyle;
