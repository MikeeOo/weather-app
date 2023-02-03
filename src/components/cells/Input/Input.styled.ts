import styled from "styled-components";

export const InputStyled = styled.input<{errorColor?: any}>`
  font-size: 1.2rem;
  padding: 1em 0 1em 2em;
  width: 100%;
  border-radius: 5px 0 0 5px;
  
  &::placeholder {
    color: ${({theme}) => theme.color.text};
  };
`;