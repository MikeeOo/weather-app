import styled from "styled-components";

export const WeatherIconStyled = styled.img`
  border-right: 2px solid ${({theme}) => theme.color.pseudoElement};
  filter: invert(0.2);
  height: 6em;
`;