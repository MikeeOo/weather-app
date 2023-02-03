import styled, {css} from "styled-components";
import {flexBox} from "../../../styles/mixins";

export const FormStyled = styled.form<{errorColor?: any}>`
  ${flexBox({jc: "center"})};
  ${props => props.errorColor === `error` && css`
    box-shadow: 0 0 15px 0 #FF0000;
  `};
`;