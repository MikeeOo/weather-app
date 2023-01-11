import {LocationCardWeatherStyled} from "./LocationCardWeather.styled";
import WeatherIcon from "../../../components/WeatherIcon/WeatherIcon";
import WeatherInfo from "../../../components/WeatherInfo/WeatherInfo";
import {ILocationCardWeather} from "../../../types/propsTypes";


const LocationCardWeather = ({locationIcon, locationTemp, locationDesc}: ILocationCardWeather): JSX.Element => {

  return (
      <LocationCardWeatherStyled>

          <WeatherIcon locationIcon={locationIcon}/>

          <WeatherInfo locationTemp={locationTemp} locationDesc={locationDesc}/>
      </LocationCardWeatherStyled>
  );
};

export default LocationCardWeather;