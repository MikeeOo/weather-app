import styled from "styled-components";
import {flexBox} from "../../styles/mixins/logicalMixins";

export const ImgErrorStyled = styled.div`
  ${flexBox({jc: `center`, ai: `center`})};
  height: 12em;
  font-weight: 600;
`;