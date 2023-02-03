import {LocationIconStyled} from "./LocationIcon.styled";
import {ILocationIcon} from "./LocationIcon.types";

const LocationIcon = ({locationIcon}: ILocationIcon): JSX.Element => <div><LocationIconStyled src={locationIcon} alt="weather icon"/></div>;

export default LocationIcon;