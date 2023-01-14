import {LocationCardWeatherStyled} from "./LocationCardWeather.styled";
import WeatherIcon from "../../atoms/WeatherIcon";
import {ILocationCardWeather} from "./LocationCardWeather.types";
import LocationTemp from "../../atoms/LocationTemp";
import LocationDesc from "../../atoms/LocationDesc";

const LocationCardWeather = ({locationIcon, locationTemp, locationDesc}: ILocationCardWeather): JSX.Element => {

    return (
      <LocationCardWeatherStyled>

          <WeatherIcon locationIcon={locationIcon}/>

          <div style={{width: "100%", padding: "0 .7rem"}}>
              <LocationTemp locationTemp={locationTemp}/>

              <LocationDesc locationDesc={locationDesc}/>
          </div>

      </LocationCardWeatherStyled>
  );
};

export default LocationCardWeather;
