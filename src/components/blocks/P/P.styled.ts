import styled, {css} from "styled-components";
import {IP} from "./P.types";
import {flexBox} from "../../../styles/mixins";

export const PStyled = styled.p<IP>`
  font-size: ${props => props.fontSize};
  
  ${props => props.cardWeatherPStyled && css`
    ${flexBox({ai: `center`})}
    height: 4.2rem;
  `};
  
  ${props => props.borderBottom && css`
    border-bottom: 1px solid ${({theme}) => theme.color.pseudoElement};
  `};
  
  ${props => props.borderTop && css`
    border-top: 1px solid ${({theme}) => theme.color.pseudoElement};
  `};
  
  ${props => props.detailsWeatherPStyled && css`
    font-weight: 300;
    margin-top: 2.2rem;
  `};
`;