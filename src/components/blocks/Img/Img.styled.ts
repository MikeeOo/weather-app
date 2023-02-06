import styled, {css} from "styled-components";
import {IImg} from "./Img.types";

export const ImgStyled = styled.img<IImg>`
  width: 100%;
  //max-width: 100%;
  
  ${props => props.linkImgStyled && css`
    //position: relative;
    height: 12em;
    object-fit: cover;
    transition: all .5s ease-in-out;
    
    &:hover {
      transform: scale(1.3);
      filter: brightness(50%);
    };
  `};
  
  ${props => props.cardWeatherImgStyled && css`
    filter: invert(0.2);
  `};

  ${props => props.sliderImgStyled && css`
    height: 23rem;
    object-fit: cover;
    border-radius: 1rem;
  `};
`;