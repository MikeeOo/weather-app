import {LocationCardActionStyled} from "./LocationCardAction.styled";
import {deleteLocationData} from "../../../redux/slices/locationDataSlice";
import {BsXLg} from "react-icons/bs";
import {useState} from "react";
import LocationName from "../../../atoms/LocationName";
import ClickInfo from "../../../atoms/ClickInfo";
import Link from "../../../components/Link";
import Button from "../../../components/Button";
import {useAppDispatch} from "../../../redux/store";
import {ILocationCardAction} from "./LocationCardAction.types";

const LocationCardAction = ({locationId, locationName, locationImages, locationImageIndex}: ILocationCardAction): JSX.Element => {

    const dispatch = useAppDispatch();

    const [isHover, setIsHover] = useState<boolean>(false);

    return (
      <LocationCardActionStyled onMouseEnter={() => setIsHover(true)}
                                onMouseLeave={() => setIsHover(false)}
                                onTouchMove={() => setIsHover(true)}>

          <LocationName locationName={locationName}/>

          <Link locationName={locationName} locationId={locationId} locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          {isHover && <Button onClick={() => dispatch(deleteLocationData(locationId))}
                            borderRadius="1rem"
                            contrast
                            imgPosition
                            fontSize="1.2rem"
                            padding="1em"><BsXLg/></Button>}

          {isHover &&  <ClickInfo/>}
      </LocationCardActionStyled>
  );
};

export default LocationCardAction;