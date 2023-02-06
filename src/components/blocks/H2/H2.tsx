import {H2Styled} from "./H2.styled";
import {IH2} from "./H2.types";

const H2 = ({children, locationCardStyled, detailsWeatherH2Styled, fontSize}: IH2): JSX.Element =>

    <H2Styled locationCardStyled={locationCardStyled}
              detailsWeatherH2Styled={detailsWeatherH2Styled}
              fontSize={fontSize}
    >
        {children}
    </H2Styled>;

export default H2;