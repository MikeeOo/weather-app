import {LocationTempStyled} from "./LocationTemp.styled";
import {ILocationTemp} from "./LocationTemp.types";

const LocationTemp = ({locationTemp}: ILocationTemp): JSX.Element => <LocationTempStyled>{locationTemp} °C</LocationTempStyled>;

export default LocationTemp;