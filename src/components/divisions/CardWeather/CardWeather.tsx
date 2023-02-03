import {CardWeatherWrapped, CardWeatherStyled} from "./CardWeather.styled";
import LocationIcon from "../../blocks/LocationIcon";
import {ICardWeather} from "./CardWeather.types";
import LocationTemp from "../../blocks/LocationTemp";
import LocationDesc from "../../blocks/LocationDesc";

const CardWeather = ({locationIcon, locationTemp, locationDesc}: ICardWeather): JSX.Element => {

    return (
      <CardWeatherWrapped>

          <LocationIcon locationIcon={locationIcon}/>

          <CardWeatherStyled>
              <LocationTemp locationTemp={locationTemp}/>

              <LocationDesc locationDesc={locationDesc}/>
          </CardWeatherStyled>

      </CardWeatherWrapped>
  );
};

export default CardWeather;
