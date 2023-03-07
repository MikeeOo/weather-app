import {IP} from "./P.types";
import {PStyled} from "./P.styled";

const P = ({children, cardWeatherPStyled, detailsWeatherPStyled, borderBottom, borderTop, fontSize}: IP): JSX.Element =>
    <PStyled cardWeatherPStyled={cardWeatherPStyled} detailsWeatherPStyled={detailsWeatherPStyled} borderBottom={borderBottom} borderTop={borderTop} fontSize={fontSize}>{children}</PStyled>;

export default P;