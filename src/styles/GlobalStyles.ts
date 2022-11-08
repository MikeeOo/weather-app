import {createGlobalStyle} from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body, #root {
    font-family: 'Nunito Sans', sans-serif;
    font-size: 10px;
  }
  
`

export default GlobalStyles