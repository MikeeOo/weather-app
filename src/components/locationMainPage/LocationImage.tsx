import {ILocationImage} from "../../types/propsTypes";

import {LocationImageStyled} from "./LocationImageStyled";

const LocationImage = ({locationImages, locationImageIndex}: ILocationImage): JSX.Element =>
    <LocationImageStyled src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`} alt="searched location image"/>;

export default LocationImage;