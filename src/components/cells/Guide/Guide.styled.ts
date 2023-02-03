import styled, {css} from "styled-components";
import {extraBold} from "../../../styles/mixins";

export const GuideStyled = styled.div<{errorColor: string | boolean;}>`
  padding-top: 2.4rem;
  text-align: center;
  color: ${({theme}) => theme.color.text};
  font-size: 2rem;
  font-weight: ${extraBold};
  opacity: 0.2;
  
  ${props => props.errorColor === `error` && css`
    color: #FF0000;
    opacity: 1;
  `};
`