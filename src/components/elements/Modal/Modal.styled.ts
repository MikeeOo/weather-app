import styled from "styled-components";
import {device, flexBox} from "../../../styles/mixins";

export const OverlayStyled = styled.div`
  background-color: rgba(43,45,52,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 2;
`;

export const ModalStyled = styled.div`
  background-color: ${({theme}) => theme.color.background};
  border: 2px solid ${({theme}) => theme.color.err};
  max-width: 80%;
  border-radius: 10px;
  padding: 2em 3em 0 3em;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%);
  z-index: 3;
`;

export const ModalBtnWrapper = styled.div`
  ${flexBox({jc: "center", ai: "center"})};
  flex-direction: column;
  margin: .6rem 0;
  button {
    margin: .5em;
  }
  @media (${device.tabletS}) {
    ${flexBox({jc: "center", ai: "center"})};
    flex-direction: row;
    button {
      margin: 2em 1em;
    }
  }
`;