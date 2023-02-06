import {useAppSelector} from "../../../redux/store";
import {DetailsWeatherStyled} from "./DetailsWeather.styled";
import H2 from "../../blocks/H2";
import P from "../../blocks/P";

const DetailsWeather = (): JSX.Element => {

    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

  return (
      <DetailsWeatherStyled>
          <H2 detailsWeatherH2Styled
              fontSize={`2.2rem`}>
              {locationDataDetails.locationName}
          </H2>

          <P detailsWeatherPStyled
             fontSize={`1.8rem`}>
              <em style={{fontWeight: `600`}}>Current temperature:&nbsp;</em>{locationDataDetails.locationTemp} °C
          </P>

          <P detailsWeatherPStyled
             fontSize={`1.8rem`}>
              <em style={{fontWeight: `600`}}>Weather description:&nbsp;</em>{locationDataDetails.locationDesc}
          </P>
      </DetailsWeatherStyled>
  );
};

export default DetailsWeather;