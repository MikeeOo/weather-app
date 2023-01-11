import {LocationTempStyled} from "./LocationTemp.styled";
import {ILocationTemp} from "../../types/propsTypes";

const LocationTemp = ({locationTemp}: ILocationTemp): JSX.Element => <LocationTempStyled>{locationTemp} °C</LocationTempStyled>;

export default LocationTemp;