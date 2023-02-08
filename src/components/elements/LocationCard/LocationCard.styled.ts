import styled from "styled-components";
import {device} from "../../../styles/mixins";

export const LocationCardWrapped = styled.article`
  background-color: ${({theme}) => theme.color.elements};
  font-size: 1.4rem;
  margin: 4.2rem 6% 0 6%;
  border-radius: 10px;
  
  @media (${device.tabletS}) {
    margin: 4.2rem 0 0 0;
  }
`;

export const LocationCardStyled = styled.div`
  position: relative;
`;