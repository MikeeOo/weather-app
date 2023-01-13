import {LocationNameStyled} from "./LocationName.styled";
import {ILocationName} from "./LocationName.types";

const LocationName = ({locationName}: ILocationName): JSX.Element => <LocationNameStyled>{locationName}</LocationNameStyled>;

export default LocationName;