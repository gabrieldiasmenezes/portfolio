import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }
    #root {
        width: 100%;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        overflow-x:hidden;
        
    }
`;

export default GlobalStyle;
