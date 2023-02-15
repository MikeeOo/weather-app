import styled, {css} from "styled-components";
import {IImg} from "./Img.types";
import {device} from "../../../styles/mixins";

export const ImgStyled = styled.img<IImg>`
  width: 100%;
  max-width: 100%;
  ${props => props.linkImgStyled && css`
    height: 12em;
    object-fit: cover;
    transition: all .5s ease-in-out;
    &:hover {
      transform: scale(1.3);
      filter: brightness(50%);
    };
  `};
  ${props => props.weatherImgStyled && css`
    filter: invert(0.2);
  `};
  ${props => props.sliderImgStyled && css`
    height: 23rem;
    object-fit: cover;
    border-radius: 1rem;
    @media (${device.tabletL}) {
      height: 23rem;
    }
    @media (${device.laptopS}) {
      height: 30rem;
    }
    @media (${device.laptopL}) {
      height: 35rem;
    }
    @media (${device.desktopS}) {
      height: 40rem;
    }
    @media (${device.desktopM}) {
      height: 50rem;
    }
    @media (${device.desktopL}) {
      height: 60rem;
    }
  `};
`;