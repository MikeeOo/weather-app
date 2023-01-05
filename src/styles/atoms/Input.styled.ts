import styled, {css} from "styled-components";

export const InputStyled = styled.input<{placeholderColor?: any}>`
  font-size: 1.2rem;
  padding: 1em 0 1em 2em;
  width: 100%;
  border-radius: 5px 0 0 5px;
  max-width: 20em;
  ${props => props.placeholderColor === `error` && css`
    opacity: 1;
    box-shadow: 0 0 15px 0 #FF0000;
  `};

  &:focus {
    ${props => props.placeholderColor === `error` && css`
      box-shadow: 0 0 15px 0 #FF0000;
    `};
  };
  
  &::placeholder {
    color: ${({theme}) => theme.color.text};
    ${props => props.placeholderColor === `error` && css`
      color: #FF0000;
    `};
  };
`;