import MainLocationImage from "./MainLocationImage";
import MainLocationData from "./MainLocationData";

import {ILocation} from "../../../../../../types/propsTypes";

import styled from "styled-components";
import MainLocationName from "./MainLocationName";


const MainLocationContainer = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocation): JSX.Element => {



  return (

      <LocationContainerStyled>

          <MainLocationImage locationId={locationId} locationName={locationName} locationImages={locationImages} locationImageIndex={locationImageIndex} />

          <MainLocationData locationId={locationId} locationName={locationName} locationTemp={locationTemp} locationDesc={locationDesc} locationIcon={locationIcon} locationImageIndex={locationImageIndex}/>
      </LocationContainerStyled>
  );
};

export default MainLocationContainer;

const LocationContainerStyled = styled.div`
  
  background-color: ${({theme}) => theme.color.elements};
  max-width: 19em;
  margin: 4.2rem auto 0 auto;
  border-radius: 10px;
  font-size: 1.4rem;
  position: relative;
  overflow: hidden;
  height: 168px;
`;