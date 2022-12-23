import {ILocationImage} from "../../types/propsTypes";

import styled from "styled-components";

const LocationImage = ({locationImages, locationImageIndex}: ILocationImage): JSX.Element =>
    <LocationImageStyled style={{backgroundImage: `url(${locationImages && locationImages[parseInt(locationImageIndex as string)].largeImageURL})`}}/>;

export default LocationImage;

const LocationImageStyled = styled.div`
  width: 100%;
  height: 16rem;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 10px 10px 0 0;
`