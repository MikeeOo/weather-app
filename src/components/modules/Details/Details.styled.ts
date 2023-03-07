import styled from "styled-components";

import {container, device} from "../../../styles/mixins";

export const DetailsStyled = styled.section`
  ${container};
  margin-top: 4rem;
  @media (${device.tabletL}) {
    display: grid;
    column-gap: 5%;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }
  @media (${device.laptopS}) {
    column-gap: 3%;
  }
  @media (${device.desktopS}) {
    column-gap: 2.5%;
  }
`;

export const DetailsWeatherStyled = styled.div`
    margin-top: 4rem;
`;

export const Em  = styled.em`
  font-weight: 600;
`;