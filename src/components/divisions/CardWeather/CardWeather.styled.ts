import styled from "styled-components";

export const CardWeatherWrapped = styled.div`
  display: flex;
  align-items: center;
  padding: .7rem 0;
`;

export const CardWeatherStyled = styled.div`
  width: 100%;
  padding: 0 .7rem;
  border-left: 2px solid ${({theme}) => theme.color.border};
`;