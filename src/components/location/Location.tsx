import LocationName from "./LocationName";
import {ILocation} from "../../types/propsTypes";
import LocationImage from "./LocationImage";

import styled from "styled-components";

const Location = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocation): JSX.Element => {

  return (

      <LocationStyled>

          <LocationImage locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          <LocationName locationId={locationId} locationName={locationName} locationImageIndex={locationImageIndex}/>

          <p>Temp: {locationTemp} °C</p>
          <p>Conditions: {locationDesc}<img src={locationIcon} alt="weather icon" style={{filter: `invert(0.2)`}}/></p>
      </LocationStyled>
  )
};

export default Location;

const LocationStyled = styled.div`
  //background-color: ${({theme}) => theme.color.secondary};
  background-color: rgba(79, 95, 110, 0.4);

  //background-color: #738494;
  //background-color: #5c6a78;
  //background-color: #556370;
  //background-color: rgba(79, 95, 110, 0.7);
  //background-color: #304152;
  max-width: 26.4rem;
  margin: 2.4rem auto 0 auto;
  border-radius: 10px;
  color: ${({theme}) => theme.color.white};
  
  p {
    //padding: 0 0.7rem;
    margin: 1rem;
    //margin-top: 0.7rem;
    font-size: 1.4rem;
  }
  //
  img {
    width: 25%;
    max-width: 100%;
    margin-top: -2rem;
    display: inline;
  }
  
`