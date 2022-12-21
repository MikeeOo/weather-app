import {LocationPictureStyled} from "./LocationPicture.styled";

import {ILocationPicture} from "../../types/componentsProps";

const LocationPicture = ({locationPicture}: ILocationPicture): JSX.Element => {

  console.log(locationPicture)

  return (
      <>xd</>
      // <LocationPictureStyled style={{backgroundImage: `url(${locationPicture})`}}/>
  );
};

export default LocationPicture;