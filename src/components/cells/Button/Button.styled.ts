import styled, {css} from "styled-components";

import {IButton} from "./Button.types";
import {flexBox} from "../../../styles/mixins";

export const ButtonStyled = styled.button<IButton>`
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