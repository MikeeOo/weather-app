import styled from "styled-components";

export const LocationStyled = styled.div`
  background-color: ${({theme}) => theme.color.secondary};
  width: 26.4rem;
  margin: 2.4rem auto 0 auto;
  border-radius: 25px;

  img {
    width: 100%;
    border-radius: 25px;
  }
`