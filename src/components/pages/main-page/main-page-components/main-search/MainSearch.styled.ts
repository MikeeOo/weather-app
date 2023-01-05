import styled from "styled-components";
import {flexBox} from "../../../../../styles/mixins/logicalMixins";

export const MainSearchStyled = styled.div`
  padding: 2.4rem 0 0 0 ;
  
  form {
    ${flexBox({jc: "center"})};
  };
  
  input[type="search"] {
    font-size: 1.2rem;
    padding: 1em 2em;
    width: 20em;
    border-radius: 5px 0 0 5px;
  };
`;