import {LocationImgStyled} from "./LocationImg.styled";
import {ILocationImg} from "./LocationImg.types";

const LocationImg = ({locationImages, locationImageIndex}: ILocationImg): JSX.Element =>
    <LocationImgStyled src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`} alt="current location image"/>;


export default LocationImg;