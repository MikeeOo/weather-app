import styled from "styled-components";

export const SearchStyled = styled.div`
  padding: 2.4rem 0 0 0;
  
  form {
    display: flex;
    justify-content: center;
  }
  
  input[type="search"] {
    border: none;
    border-radius: 5px 0 0 5px;
    background: ${({theme}) => theme.color.secondary};
    color: ${({theme}) => theme.color.white};
    font-size: 1.2rem;
    padding: 1em 2em;
    width: 20em;
    border-top: 4px solid ${({theme}) => theme.color.secondary};
    border-bottom: 4px solid ${({theme}) => theme.color.secondary};
    opacity: .7;
    
    &::placeholder {
      color: ${({theme}) => theme.color.white};
    }
    
    &:focus {
      opacity: 1;
      // border-top: 4px solid ${({theme}) => theme.color.primary};
      // border-bottom: 4px solid ${({theme}) => theme.color.primary};

    }
    &:hover {
      opacity: 1;
    }
  }

  button[type="submit"] {
    border: none;
    border-radius: 0 5px 5px 0;
    background: ${({theme}) => theme.color.secondary};
    // border-top: 2px solid ${({theme}) => theme.color.secondary};
    // border-bottom: 2px solid ${({theme}) => theme.color.secondary};
    // border-right: 2px solid ${({theme}) => theme.color.secondary};
    padding: 1em 2em;
    opacity: .7;
    
    &:active {
      // border-top: 2px solid ${({theme}) => theme.color.primary};
      // border-bottom: 2px solid ${({theme}) => theme.color.primary};
      // border-right: 2px solid ${({theme}) => theme.color.primary};
    }

    &:hover {
      opacity: 1;
    }

  }
`