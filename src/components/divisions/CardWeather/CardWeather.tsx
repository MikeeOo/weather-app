import {CardWeatherWrapped, CardWeatherStyled} from "./CardWeather.styled";
import Img from "../../blocks/Img";
import P from "../../blocks/P";

import {ICardWeather} from "./CardWeather.types";

const CardWeather = ({locationIcon, locationTemp, locationDesc}: ICardWeather): JSX.Element => {

    return (
      <CardWeatherWrapped>

          <div>

              <Img cardWeatherImgStyled
                   src={locationIcon}
                   alt="weather icon"
              />
          </div>

          <CardWeatherStyled>

              <P cardWeatherPStyled
                 borderBottom
                 fontSize={`3.1rem`}>

                  {locationTemp} °C
              </P>

              <P cardWeatherPStyled
                 borderTop
                 fontSize={`1.5rem`}>

                  {locationDesc}
              </P>
          </CardWeatherStyled>

      </CardWeatherWrapped>
  );
};

export default CardWeather;
