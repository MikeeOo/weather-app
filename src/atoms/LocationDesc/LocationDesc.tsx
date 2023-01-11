import {LocationDescStyled} from "./LocationDesc.styled";
import {ILocationDesc} from "../../types/propsTypes";

const LocationDesc = ({locationDesc}: ILocationDesc): JSX.Element => <LocationDescStyled>{locationDesc}</LocationDescStyled>;

export default LocationDesc;