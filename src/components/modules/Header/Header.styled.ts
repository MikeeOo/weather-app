import styled from "styled-components";
import {container} from "../../../styles/mixins";

export const HeaderWrapped = styled.section`
  background-color: ${({theme}) => theme.color.elements};
`;

export const HeaderStyled = styled.header`
  ${container};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.7em 0;
`;

export const H1 = styled.h1`
  font-size: 1.4rem;
  font-weight: 700;
`;