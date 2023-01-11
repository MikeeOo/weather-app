import {ILink} from "../../types/propsTypes";
import {LinkStyled} from "./Link.styled";
import LocationImg from "../../atoms/LocationImg";
import ImgError from "../../atoms/ImgError";

const Link = ({locationName, locationId, locationImages, locationImageIndex}: ILink): JSX.Element => {

  return (
      <LinkStyled to={`/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>

          {locationImages?.length ? <LocationImg locationImages={locationImages} locationImageIndex={locationImageIndex}/> : <ImgError/>}
      </LinkStyled>
  );
};

export default Link;