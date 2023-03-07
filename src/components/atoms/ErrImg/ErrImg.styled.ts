import styled, {css} from "styled-components";

import {IErrImg} from "./ErrImg.types";
import {flexBox} from "../../../styles/mixins";

export const ErrImgStyled = styled.div<IErrImg>`
  ${flexBox({jc: `center`, ai: `center`})};
  height: 16.8rem;
  font-weight: bold;
  font-size: ${props => props.fontSize};
  ${props => props.errorBorder && css`
    border: 2px solid ${({theme}) => theme.color.err};
    height: 12em;
  `};
`;