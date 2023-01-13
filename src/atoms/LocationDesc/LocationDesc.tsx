import {LocationDescStyled} from "./LocationDesc.styled";
import {ILocationDesc} from "./LocationDesc.types";

const LocationDesc = ({locationDesc}: ILocationDesc): JSX.Element => <LocationDescStyled>{locationDesc}</LocationDescStyled>;

export default LocationDesc;