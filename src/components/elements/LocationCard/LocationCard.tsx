import {useState} from "react";

import ClickInfo from "../../atoms/ClickInfo";
import LocationHeader from "../../blocks/LocationHeader";

import Link from "../../cells/Link";
import Button from "../../cells/Button";
import CardWeather from "../../divisions/CardWeather";

import {useAppDispatch} from "../../../redux/store";
import {deleteLocationData} from "../../../redux/slices/locationDataSlice";

import {BsXLg} from "react-icons/bs";

import {LocationCardStyled, LocationCardWrapped} from "./LocationCard.styled";

import {ILocationCard} from "./LocationCard.types";

const LocationCard = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocationCard): JSX.Element => {

    const dispatch = useAppDispatch();

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
      <LocationCardWrapped>

          <LocationCardStyled onMouseEnter={() => setIsHover(true)}
                              onMouseLeave={() => setIsHover(false)}
                              onTouchMove={() => setIsHover(true)}>

              <LocationHeader locationName={locationName}/>

              <Link locationName={locationName} locationId={locationId} locationImages={locationImages} locationImageIndex={locationImageIndex}/>

              {isHover && <Button onClick={() => dispatch(deleteLocationData(locationId))}
                                  borderRadius="1rem"
                                  contrast
                                  imgPosition
                                  fontSize="1.2rem"
                                  padding="1em"><BsXLg/></Button>}

              {isHover &&  <ClickInfo/>}

          </LocationCardStyled>

          <CardWeather locationIcon={locationIcon} locationTemp={locationTemp} locationDesc={locationDesc}/>

      </LocationCardWrapped>
  );
};

export default LocationCard;