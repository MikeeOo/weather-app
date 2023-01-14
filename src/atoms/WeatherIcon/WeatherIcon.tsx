import {WeatherIconStyled} from "./WeatherIcon.styled";
import {IWeatherIcon} from "./WeatherIcon.types";

const WeatherIcon = ({locationIcon}: IWeatherIcon): JSX.Element => <WeatherIconStyled src={locationIcon} alt="weather icon"/>;

export default WeatherIcon;