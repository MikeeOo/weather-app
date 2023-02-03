import styled from "styled-components";
import {container} from "../../../styles/mixins";

export const DisplayStyled = styled.div`
  ${container};
  padding-bottom: 2.4rem;
  
  @media (min-width: 426px) {
    display: grid;
    column-gap: 5%;
    grid-template-columns: 1fr 1fr;
  }
  @media (min-width: 769px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (min-width: 1025px) {
    column-gap: 3%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (min-width: 1729px) {
    column-gap: 2.5%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;