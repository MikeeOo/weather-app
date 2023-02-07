import styled from "styled-components";
import { sliderButtonsStyles } from "../../../styles/mixins";

export const SliderButtonNextStyled = styled.button`
  ${sliderButtonsStyles};
  right: 0;
  border-radius: 50% 0 0 50%;
`;

export const SliderButtonPrevStyled = styled.button`
  ${sliderButtonsStyles};
  border-radius: 0 50% 50% 0;
`;