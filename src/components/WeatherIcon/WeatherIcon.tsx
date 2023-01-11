import {WeatherIconStyled} from "./WeatherIcon.styled";
import {IWeatherIcon} from "../../types/propsTypes";

const WeatherIcon = ({locationIcon}: IWeatherIcon): JSX.Element => <WeatherIconStyled src={locationIcon} alt="weather icon"/>;

export default WeatherIcon;