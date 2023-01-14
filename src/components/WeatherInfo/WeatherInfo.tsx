import {WeatherInfoStyled} from "./WeatherInfo.styled";
import LocationDesc from "../../atoms/LocationDesc";
import LocationTemp from "../../atoms/LocationTemp";
import {IWeatherInfo} from "./WeatherInfo.types";
import Flex from "../Flex";
import Decoration from "../../atoms/Decoration";

const WeatherInfo = ({locationTemp, locationDesc}: IWeatherInfo): JSX.Element => {

  return (
      <WeatherInfoStyled>


              {/*<Flex ai="center">*/}
                  <LocationTemp locationTemp={locationTemp}/>
              {/*</Flex>*/}

              {/*<Decoration/>*/}

              {/*<Flex ai="center" h="4.9rem">*/}
              {/*    <LocationDesc locationDesc={locationDesc}/>*/}
              {/*</Flex>*/}
      </WeatherInfoStyled>
  );
};

export default WeatherInfo;