import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
  ${reset}
  body{
    background-color: ${(props) => props.theme.color_yellow};
  }
  h3{
    font-size: 22px;
    color:${(props) => props.theme.color_white};
    margin-bottom: 60px;
    text-align: center;
  }
  
`;
export default GlobalStyles;
