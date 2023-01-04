import {createGlobalStyle, DefaultTheme, GlobalStyleComponent} from "styled-components";

import {ITheme} from "../types/themeTypes";

import {shadowOutline} from "./mixins";

const GlobalStyles: GlobalStyleComponent<{theme: ITheme}, DefaultTheme> = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  };
  
  html, body, #root {
    color: ${({theme}) => theme.color.text};
    font-family: 'Nunito Sans', sans-serif;
    font-size: 62.5%;
  };
  
  a {
    text-decoration: none;
    color: ${({theme}) => theme.color.text};

    &:hover{
          text-decoration: underline;
    };
  };
  
  input, button {
    border: none;
    background-color: ${({theme}) => theme.color.elements};
    color: ${({theme}) => theme.color.text};
    border-radius: 5px;
    opacity: .7;
    
    &:hover {
      opacity: 1;
    };
  };
  
  input {
    &:focus {
      ${shadowOutline};
    };
    
    &::placeholder {
      color: ${({theme}) => theme.color.text};
    };
  };
  
  button {
    &:active {
      ${shadowOutline};
    };
  };
`;

export default GlobalStyles;
