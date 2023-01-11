import styled from "styled-components";
import {extraBold} from "../../styles/mixins";

export const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.elements};
  color: ${({theme}) => theme.color.text};
  display: flex;
  font-size: 1.4rem;
  font-weight: ${extraBold};
  height: 8rem;
  //padding: 2em;
  //padding: 2em;
  justify-content: space-between;
`;