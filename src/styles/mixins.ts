import {css} from "styled-components";

export const container = css`
  margin: 0 auto;
  width: 90%;
  max-width: 1728px;
  //background-color: rgba(0, 255, 0, 0.2);
`;

export const shadowOutline = css`
  opacity: 1;
  box-shadow: 0 0 15px 0 rgba(128, 128, 128, 0.4);
`;

export const sliderButtonsStyles = css`
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: #FFFFFF;
  display: flex;
  height: 50%;
  justify-content: center;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  max-width: 7rem;
  //max-height: 22rem;
  font-size: 3rem;
  
  @media (min-width: 426px) {
    font-size: 4rem;
    height: 45%;
  }
  @media (min-width: 1025px) {
    font-size: 5rem;
    height: 45%;
  }
  @media (min-width: 1325px) {
    height: 40%;
  }
  @media (min-width: 1729px) {
    font-size: 5rem;
    width: 15%;
  }
  @media (min-width: 1920px) {
    font-size: 6rem;
    height: 30%;
    width: 15%;
  }
`;

export const extraBold: string = `800`;

export const flexBox = ({jc = false, ai = false}: {jc?: string | boolean, ai?: string | boolean}): string => `
  display: flex;
  ${jc ? `justify-content: ${jc};` : ""}
  ${ai ? `align-items: ${ai};` : ""}
`;



export const wh = ({w, h = w}: {w: string, h?: string}): string => `
  width: ${w};
  height: ${h};
`;