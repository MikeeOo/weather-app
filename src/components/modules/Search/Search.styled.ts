import styled, {css} from "styled-components";
import {container, device, extraBold} from "../../../styles/mixins";

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

export const GuideStyled = styled.div<{errorColor: string | boolean;}>`
  padding-top: 2.4rem;
  text-align: center;
  color: ${({theme}) => theme.color.text};
  font-size: 2rem;
  font-weight: ${extraBold};
  opacity: 0.2;
  ${props => props.errorColor === `error` && css`
    color: ${({theme}) => theme.color.err};
    opacity: 1;
  `};
`;