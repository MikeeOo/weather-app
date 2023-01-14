import styled, {css} from "styled-components";

export const InputStyled = styled.input<{errorColor?: any}>`
  font-size: 1.2rem;
  padding: 1em 0 1em 2em;
  width: 100%;
  border-radius: 5px 0 0 5px;
  //max-width: 20em;
  //max-width: 100%;
  ${props => props.errorColor === `error` && css`
    opacity: 1;
    box-shadow: 0 0 15px 0 #FF0000;
  `};

  &:focus {
    ${props => props.errorColor === `error` && css`
      box-shadow: 0 0 15px 0 #FF0000;
    `};
  };
  
  &::placeholder {
    color: ${({theme}) => theme.color.text};
  };
`;