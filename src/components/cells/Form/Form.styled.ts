import styled, {css} from "styled-components";

import {IForm} from "./Form.types";
import {flexBox} from "../../../styles/mixins";

export const FormStyled = styled.form<IForm>`
  ${flexBox({jc: "center"})};
  ${props => props.errorColor === `error` && css`
    box-shadow: 0 0 15px 0 ${({theme}) => theme.color.err};
  `};
`;