import styled from "styled-components";
import {container, device} from "../../../styles/mixins";

export const DisplayStyled = styled.div`
  ${container};
  padding-bottom: 2.4rem;
  @media (${device.tabletS}) {
    display: grid;
    column-gap: 5%;
    grid-template-columns: 1fr 1fr;
  }
  @media (${device.tabletL}) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  @media (${device.laptopS}) {
    column-gap: 3%;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
  @media (${device.desktopS}) {
    column-gap: 2.5%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;