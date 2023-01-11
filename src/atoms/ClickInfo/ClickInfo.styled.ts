import styled from "styled-components";

export const ClickInfoStyled = styled.div`
  position: absolute;
  color: ${({theme}) => theme.color.text};
  background-color: ${({theme}) => theme.color.elements};
  border-radius: 0 5px 0 0;
  padding: 0.25em;
  bottom: 0;
  font-weight: 700;
`;