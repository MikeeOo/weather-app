import {LocationPictureStyled} from "./LocationPicture.styled";

import {ILocationPicture} from "../../types/componentsProps";

const LocationPicture = ({locationPicture}: ILocationPicture): JSX.Element => {

  return (
      <LocationPictureStyled style={{backgroundImage: `url(${locationPicture})`}}/>
  );
};

export default LocationPicture;