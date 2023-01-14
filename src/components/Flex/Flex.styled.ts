import styled from "styled-components";
import {IFlex} from "./Flex.types";

export const FlexStyled = styled.div<IFlex>`
  display: flex;
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  height: ${props => props.h};
  width: ${props => props.w};
  flex-shrink: ${props => props.fs};
  background-color: ${props => props.bc};
`;