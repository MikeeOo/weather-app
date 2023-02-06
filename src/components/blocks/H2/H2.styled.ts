import styled, {css} from "styled-components";
import {IH2} from "./H2.types";

export const H2Styled = styled.h2<IH2>`
  font-size: ${props => props.fontSize};
  font-weight: bold;
  
  ${props => props.locationCardStyled && css`
    background-color: ${({theme}) => theme.color.elements};
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 0.5em 0;
    border-radius: 5px;
    width: 100%;
    max-width: 50%;
    z-index: 1;
  `};
`;