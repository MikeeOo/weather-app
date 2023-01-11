import {WeatherInfoStyled} from "./WeatherInfo.styled";
import LocationDesc from "../../atoms/LocationDesc";
import PseudoElement from "../../atoms/PseudoElement";
import LocationTemp from "../../atoms/LocationTemp";
import {IWeatherInfo} from "../../types/propsTypes";

const WeatherInfo = ({locationTemp, locationDesc}: IWeatherInfo): JSX.Element => {

  return (
      <WeatherInfoStyled>

          <LocationTemp locationTemp={locationTemp}/>

          <PseudoElement/>

          <LocationDesc locationDesc={locationDesc}/>
      </WeatherInfoStyled>
  );
};

export default WeatherInfo;