import {LocationCardStyled} from "./LocationCardAction.styled";
import LocationCardWeather from "../LocationCardWeather";
import LocationCardAction from "../LocationCardAction";
import {ILocationCard} from "./LocationCard.types";

const LocationCard = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocationCard): JSX.Element => {

    return (
      <LocationCardStyled>

          <LocationCardAction locationId={locationId} locationName={locationName} locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          <LocationCardWeather locationIcon={locationIcon} locationTemp={locationTemp} locationDesc={locationDesc}/>
      </LocationCardStyled>
  );
};

export default LocationCard;