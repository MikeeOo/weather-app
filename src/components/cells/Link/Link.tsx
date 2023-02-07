import {LinkStyled} from "./Link.styled";
import Img from "../../blocks/Img";
import ImgError from "../../blocks/ImgError";
import {ILink} from "./Link.types";

const Link = ({locationName, locationId, locationImages, locationImageIndex}: ILink): JSX.Element => {

  return (
      <LinkStyled to={`details/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>

          {locationImages?.length ?

              <Img linkImgStyled
                   src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`}
                   alt="current location image"

              /> : <ImgError fontSize={"1.4rem"}/>}
      </LinkStyled>
  );
};

export default Link;