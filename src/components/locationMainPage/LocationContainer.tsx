import LocationImage from "./LocationImage";
import LocationData from "./LocationData";

import {ILocation} from "../../types/propsTypes";

import styled from "styled-components";


const LocationContainer = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocation): JSX.Element => {

  return (

      <LocationContainerStyled>

          <LocationImage locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          <LocationData locationId={locationId } locationName={locationName } locationTemp={locationTemp} locationDesc={locationDesc} locationIcon={locationIcon} locationImageIndex={locationImageIndex}/>
      </LocationContainerStyled>
  );
};

export default LocationContainer;

const LocationContainerStyled = styled.div`
  
  background-color: ${({theme}) => theme.color.elements};
  max-width: 19em;
  margin: 2.4rem auto 0 auto;
  border-radius: 10px;
  font-size: 1.4rem;
`