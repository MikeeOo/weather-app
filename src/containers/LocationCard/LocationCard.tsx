import {LocationCardStyled} from "./LocationCard.styled";
import LocationCardWeather from "../../components/LocationCardWeather";
import LocationCardAction from "../../components/LocationCardAction";
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