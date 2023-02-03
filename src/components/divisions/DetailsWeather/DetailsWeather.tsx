import {useAppSelector} from "../../../redux/store";
import {DetailsWeatherStyled} from "./DetailsWeather.styled";

const DetailsWeather = (): JSX.Element => {

    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

  return (
      <DetailsWeatherStyled>
          {locationDataDetails.locationName}
          <br/>
          {/*{locationDataDetails.locationIcon}*/}
          <br/>{locationDataDetails.locationTemp}
          <br/>{locationDataDetails.locationDesc}
      </DetailsWeatherStyled>
  );
};

export default DetailsWeather;