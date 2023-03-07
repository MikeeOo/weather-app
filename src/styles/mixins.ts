import {css} from "styled-components";

import {IDevice} from "./mixins.types";

export const container = css`
  margin: 0 auto;
  width: 90%;
  max-width: 1728px;
`;

export const device: IDevice = {
  tabletS: css`min-width: 426px`,
  tabletM: css`min-width: 646px`,
  tabletL: css`min-width: 769px`,
  laptopS: css`min-width: 1025px`,
  laptopM: css`min-width: 1225px`,
  laptopL: css`min-width: 1325px`,
  desktopS: css`min-width: 1729px`,
  desktopM: css`min-width: 1920px`,
  desktopL: css`min-width: 2200px`
};

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
  font-size: 3rem;
  @media (${device.tabletS}) {
    font-size: 4rem;
    height: 45%;
  }
  @media (${device.laptopS}) {
    font-size: 5rem;
    height: 45%;
  }
  @media (${device.laptopL}) {
    height: 40%;
  }
  @media (${device.desktopS}) {
    font-size: 5rem;
    width: 15%;
  }
  @media (${device.desktopM}) {
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