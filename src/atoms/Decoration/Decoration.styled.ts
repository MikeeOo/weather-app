import styled from "styled-components";
import {IDecoration} from "./Decoration.types";

export const DecorationStyled = styled.div<IDecoration>`
  background-color: ${({theme}) => theme.color.pseudoElement};
  display: inline-block;
  height: ${props => props.h};
  //width: ${props => props.w};
  //max-width: 200px;
  //width: 100%;
`;