import {LocationHeaderStyled} from "./LocationHeader.styled";
import {ILocationHeader} from "./LocationHeader.types";

const LocationHeader = ({locationName}: ILocationHeader): JSX.Element => <LocationHeaderStyled>{locationName}</LocationHeaderStyled>;

export default LocationHeader;