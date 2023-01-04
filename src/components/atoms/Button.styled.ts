import styled from "styled-components";
import {css} from "styled-components";
import {flexBox} from "../../styles/logicalMixins";

export const ButtonStyled = styled.button<{fontSize: string, contrast?: any, padding: string, borderRadius?: string}>`
  ${flexBox({jc: "center", ai: "center"})};
  border-radius: ${props => props.borderRadius};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  
  ${props => props.contrast && css`
    background-color: ${({theme}) => theme.color.background};
  `};
`;