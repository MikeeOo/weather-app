import styled from "styled-components";
import {css} from "styled-components";
import {flexBox} from "../mixins/logicalMixins";

export const ButtonStyled = styled.button<{fontSize: string, contrast?: any, imgPosition?: any,  padding: string, borderRadius?: string}>`
  ${flexBox({jc: "center", ai: "center"})};
  border-radius: ${props => props.borderRadius};
  font-size: ${props => props.fontSize};
  padding: ${props => props.padding};
  
  
  ${props => props.contrast && css`
    background-color: ${({theme}) => theme.color.background};
  `};
  
  ${props => props.imgPosition && css`
    position: absolute;
    top: .5em;
    right: .5em;
  `};
`;