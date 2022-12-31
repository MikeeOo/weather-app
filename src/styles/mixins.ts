import {css} from "styled-components";

// const fontStyles = ({ color, size, family }) => `
//   color: ${color || "red"};
//   font-size: ${size || "1rem"};
//   font-family: ${family || "Helvetica neue"};
// `;

export const buttonReset = css`
  border: none;
`


export const sliderButtonsStyles = css`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;
  display: flex;
  height: 50%;
  justify-content: center;
  opacity: .7;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  width: 15%;
  
  &:hover {
    opacity: 1;
  }
`