import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Inter:wght@400&display=swap");
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
