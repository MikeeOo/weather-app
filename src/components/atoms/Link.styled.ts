import {Link} from "react-router-dom";
import styled from "styled-components";
import {extraBold} from "../../styles/mixins";

export const LinkStyled = styled(Link)`
  font-size: 1.8rem;
  font-weight: ${extraBold};
`