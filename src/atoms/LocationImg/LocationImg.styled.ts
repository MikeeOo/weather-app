import styled from "styled-components";

export const LocationImgStyled = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 12em;
  object-fit: cover;
  transition: all .5s ease-in-out;
  
  &:hover {
    transform: scale(1.3);
    filter: brightness(50%);
  };
`;