import {createGlobalStyle, DefaultTheme, GlobalStyleComponent} from "styled-components";
import {shadowOutline} from "./mixins";
import {ITheme} from "./theme.types";

const GlobalStyles: GlobalStyleComponent<{theme: ITheme}, DefaultTheme> = createGlobalStyle`
  :root {
    font-size: 62.5%;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    color: ${({theme}) => theme.color.text};
    font-family: 'Nunito Sans', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.text};
  }
  
  input, button {
    border: none;
    background-color: ${({theme}) => theme.color.elements};
    color: ${({theme}) => theme.color.text};
    border-radius: 5px;
    opacity: .7;
    
    &:hover {
      opacity: 1;
    }
  }
  
  input {
    &:focus {
      ${shadowOutline};
    }
  }
  
  button {
    &:active {
      ${shadowOutline};
    }
  }
`;

export default GlobalStyles;