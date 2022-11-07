import styled from "styled-components";

export const LocationStyled = styled.div`
  border: 2px dashed yellow;
  background-color: ${({theme}) => theme.color};
  width: 25%;
  
  img {
    width: 100%;
  }
`

