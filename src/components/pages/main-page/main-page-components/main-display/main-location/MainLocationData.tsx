import MainLocationWeather from "./MainLocationWeather";
import styled from "styled-components";


const MainLocationData = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImageIndex}: any): JSX.Element => {

  return (
      <LocationDataStyled>

          <MainLocationWeather locationTemp={locationTemp} locationDesc={locationDesc} locationIcon={locationIcon}/>
      </LocationDataStyled>
  );
};

export default MainLocationData;

export const LocationDataStyled = styled.div`
  //max-width: 90%;
  margin: 0 auto;
`;