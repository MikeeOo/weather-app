import H2 from "../../blocks/H2";
import P from "../../blocks/P";

import {useAppSelector} from "../../../redux/store";

import {DetailsWeatherStyled, Em} from "./DetailsWeather.styled";

const DetailsWeather = (): JSX.Element => {
    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);
    return (
        <DetailsWeatherStyled>
            <H2 detailsWeatherH2Styled fontSize={`2.2rem`}>{locationDataDetails.locationName}</H2>
            <P detailsWeatherPStyled fontSize={`1.8rem`}><Em>Current temperature:&nbsp;</Em>{locationDataDetails.locationTemp}&nbsp;°C</P>
            <P detailsWeatherPStyled fontSize={`1.8rem`}><Em>Weather description:&nbsp;</Em>{locationDataDetails.locationDesc}</P>
        </DetailsWeatherStyled>
    );
};

export default DetailsWeather;