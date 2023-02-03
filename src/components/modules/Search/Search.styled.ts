import styled from "styled-components";
import {container} from "../../../styles/mixins";

export const SearchWrapped = styled.section`
  margin-top: 2.4rem;
`;

export const SearchStyled = styled.div`
  ${container};

  @media (min-width: 426px) {
    max-width: 294px;
  }
  @media (min-width: 646px) {
    max-width: 354px;
  }
  @media (min-width: 769px) {
    max-width: 368px;
  }
  @media (min-width: 1225px) {
    max-width: 400px;
  }
  @media (min-width: 1729px) {
    max-width: 468px;
  }
`;