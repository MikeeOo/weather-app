import styled from "styled-components";
import {container, device} from "../../../styles/mixins";

export const SearchWrapped = styled.section`
  margin-top: 2.4rem;
`;

export const SearchStyled = styled.div`
  ${container};
  

  @media (${device.tabletS}) {
    max-width: 294px;
  }
  @media (${device.tabletM}) {
    max-width: 354px;
  }
  @media (${device.tabletL}) {
    max-width: 368px;
  }
  @media (${device.laptopM}) {
    max-width: 400px;
  }
  @media (${device.desktopS}) {
    max-width: 468px;
  }
`;