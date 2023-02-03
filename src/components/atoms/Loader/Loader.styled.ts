import styled from "styled-components";
import {flexBox} from "../../../styles/mixins";

export const LoaderWrapped = styled.div`
  margin: 0 auto;
  ${flexBox({ai: "center"})}
  width: 80%;
  max-width: 22rem;
  height: calc(100vh - 21rem);
`;

export const LoaderStyled = styled.svg`
  fill: ${({theme}) => theme.color.text};
`;