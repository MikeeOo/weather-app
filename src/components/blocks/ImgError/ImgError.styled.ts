import styled, {css} from "styled-components";
import {flexBox} from "../../../styles/mixins";
import {IImgError} from "./ImgError.types";

export const ImgErrorStyled = styled.div<IImgError>`
  ${flexBox({jc: `center`, ai: `center`})};
  height: 16.8rem;
  font-weight: bold;
  
  font-size: ${props => props.fontSize};
  
  ${props => props.errorBorder && css`
    border: 2px solid #FF0000;
    height: 12em;
  `};
`;