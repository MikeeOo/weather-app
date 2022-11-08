import styled from "styled-components";

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.secondary};
  //background-color: ${({theme}) => theme.color.log};
  
  color: ${({theme}) => theme.color.white};
  display: flex;
  font-size: 1.4rem;
  font-weight: ${({theme}) => theme.weight.bold};
  height: 80px;
  justify-content: space-between;
`