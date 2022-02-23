import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
${reset}

a{
  text-decoration: none;
}

body{
    background-color: rgb(231, 240, 234);
    max-width: 530px;
    margin-left: auto;
  margin-right: auto;
}

`;

export default GlobalStyle;
