import styled from "styled-components";
import {flexBox} from "../../styles/mixins/logicalMixins";

export const LoaderStyled = styled.div`
  margin: 0 auto;
  ${flexBox({ai: "center"})}
  width: 80%;
  max-width: 22rem;
  height: calc(100vh - 21rem);
`;