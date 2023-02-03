import styled from "styled-components";

export const LocationHeaderStyled = styled.h2`
  background-color: ${({theme}) => theme.color.elements};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.8rem;
  padding: 0.5em 0;
  border-radius: 5px;
  font-weight: 700;
  width: 100%;
  max-width: 50%;
  z-index: 1;
`;