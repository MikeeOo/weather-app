import styled from "styled-components";
import {flexBox} from "../mixins/logicalMixins";

export const LocationImageNotFoundStyled = styled.div`
  ${flexBox({jc: `center`, ai: `center`})};
  height: 12em;
  font-weight: 600;
`;