import {PStyled} from "./P.styled";
import {IP} from "./P.types";

const P = ({children, cardWeatherPStyled, detailsWeatherPStyled, borderBottom, borderTop, fontSize}: IP): JSX.Element =>
    <PStyled cardWeatherPStyled={cardWeatherPStyled} detailsWeatherPStyled={detailsWeatherPStyled} borderBottom={borderBottom} borderTop={borderTop} fontSize={fontSize}>{children}</PStyled>;

export default P;