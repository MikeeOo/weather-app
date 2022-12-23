import {createGlobalStyle, DefaultTheme, GlobalStyleComponent} from "styled-components";

const GlobalStyles: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 10px;
  }
  
`

export default GlobalStyles;
