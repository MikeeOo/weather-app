import styled from "styled-components";
import {device} from "../../../styles/mixins";
import {Link} from "react-router-dom";

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

export const LocationCardHoverStyled = styled.div`
  &:hover {
    button {
      display: flex;
    }
    .clickInfo {
      display: block;
    }
  }
  @media (${device.tabletL}) {
    button {
      display: none;
    }
    .clickInfo {
      display: none;
    }
  }
`;

export const LinkStyled = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const ClickInfoStyled = styled.div`
  position: absolute;
  color: ${({theme}) => theme.color.text};
  background-color: ${({theme}) => theme.color.elements};
  border-radius: 0 5px 0 0;
  padding: 0.25em;
  bottom: 0;
  font-weight: 700;
  opacity: .8;
`;

export const LocationCardWeatherWrapped = styled.div`
  display: flex;
  align-items: center;
  padding: .7rem 0;
`;

export const LocationCardWeatherStyled = styled.div`
  width: 100%;
  padding: 0 .7rem;
  border-left: 2px solid ${({theme}) => theme.color.border};
`;