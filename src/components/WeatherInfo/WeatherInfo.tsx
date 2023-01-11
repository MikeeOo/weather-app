import {WeatherInfoStyled} from "./WeatherInfo.styled";
import LocationDesc from "../../atoms/LocationDesc/LocationDesc";
import PseudoElement from "../../atoms/PseudoElement/PseudoElment";
import LocationTemp from "../../atoms/LocationTemp/LocationTemp";
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