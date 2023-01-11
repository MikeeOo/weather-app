import {LocationNameStyled} from "./LocationName.styled";
import {ILocationName} from "../../types/propsTypes";

const LocationName = ({locationName}: ILocationName): JSX.Element => <LocationNameStyled>{locationName}</LocationNameStyled>;

export default LocationName;