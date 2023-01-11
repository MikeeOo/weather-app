import {ILocation} from "../../../types/propsTypes";
import {LocationCardStyled} from "./LocationCardAction.styled";
import LocationCardWeather from "../LocationCardWeather/LocationCardWeather";
import LocationCardAction from "../LocationCardAction/LocationCardAction";

const LocationCard = ({dispatch, locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocation): JSX.Element => {

  return (
      <LocationCardStyled>

          <LocationCardAction dispatch={dispatch} locationId={locationId} locationName={locationName} locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          <LocationCardWeather locationIcon={locationIcon} locationTemp={locationTemp} locationDesc={locationDesc}/>
      </LocationCardStyled>
  );
};

export default LocationCard;

