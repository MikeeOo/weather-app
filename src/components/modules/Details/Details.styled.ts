import styled from "styled-components";
import {container} from "../../../styles/mixins";

export const DetailsStyled = styled.section`
  ${container};
  margin-top: 4rem;
  
  @media (min-width: 769px) {
    display: grid;
    column-gap: 5%;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (min-width: 1025px) {
    column-gap: 3%;
  }
  @media (min-width: 1729px) {
    column-gap: 2.5%;
  }
`;