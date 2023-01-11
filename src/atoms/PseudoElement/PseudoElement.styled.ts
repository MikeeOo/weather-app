import styled from "styled-components";

export const PseudoElementStyled = styled.div`
  height: 2px;
  background-color: ${({theme}) => theme.color.pseudoElement};
`