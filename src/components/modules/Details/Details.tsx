import {useAppSelector} from "../../../redux/store";
import {IDetails} from "../../../types/common.types";
import {DetailsStyled, DetailsWeatherStyled, Em} from "./Details.styled";
import Slider from "../../elements/Slider";
import H2 from "../../blocks/H2";
import P from "../../blocks/P";

const Details = ({setCurrSlide}: IDetails): JSX.Element => {
    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);
    return (
        <DetailsStyled>
            <Slider setCurrSlide={setCurrSlide}/>
            <DetailsWeatherStyled>
                <H2 detailsWeatherH2Styled fontSize={`2.2rem`}>{locationDataDetails.locationName}</H2>
                <P detailsWeatherPStyled fontSize={`1.8rem`}><Em>Current temperature:&nbsp;</Em>{locationDataDetails.locationTemp}&nbsp;°C</P>
                <P detailsWeatherPStyled fontSize={`1.8rem`}><Em>Weather description:&nbsp;</Em>{locationDataDetails.locationDesc}</P>
            </DetailsWeatherStyled>
        </DetailsStyled>
    );
};

export default Details;