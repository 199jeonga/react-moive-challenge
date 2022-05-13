import { createGlobalStyle } from "styled-components";

import reset from "styled-reset";
const GlobalStyles = createGlobalStyle`
//font
@font-face {
    font-family: 'SDSamliphopangche_Outline';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts-20-12@1.0/SDSamliphopangche_Outline.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'LeferiPoint-WhiteObliqueA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-WhiteObliqueA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
@font-face {
    font-family: 'LeferiPoint-BlackA';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2201-2@1.0/LeferiPoint-BlackA.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}

//css
  ${reset}
  body{
    background-color: ${(props) => props.theme.color_yellow};
  }
  h3{
    font-family: 'LeferiPoint-BlackA';;
    font-size: 22px;
    color:${(props) => props.theme.color_white};
    margin-bottom: 60px;
    text-align: center;
  }
  span, p{
    font-family: 'LeferiPoint-WhiteObliqueA';
  }
`;
export default GlobalStyles;
