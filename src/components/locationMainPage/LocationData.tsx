import LocationHeader from "./LocationHeader";
import styled from "styled-components";


const LocationData = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImageIndex}: any): JSX.Element => {

  return (
      <LocationDataStyled>

          <LocationHeader locationId={locationId} locationName={locationName} locationImageIndex={locationImageIndex}/>

          <p>Temp: {locationTemp} °C</p>
          <p>Conditions: {locationDesc}<img src={locationIcon} alt="weather icon" style={{filter: `invert(0.2)`}}/></p>
      </LocationDataStyled>
  );
};

export default LocationData;

export const LocationDataStyled = styled.div`
  max-width: 90%;
  margin: 0 auto;
`;