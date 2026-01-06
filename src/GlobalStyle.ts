import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    html, body {
        width: 100%;
    }

    #root {
        width: 100%;
        min-height: 100%;
        display: flex;
        flex-direction: column;
        background-color: black;
    }
`;

export default GlobalStyle;
