import {LocationCardActionStyled} from "./LocationCardAction.styled";
import {deleteLocationData} from "../../../redux/slices/locationDataSlice";
import {BsXLg} from "react-icons/bs";
import {useState} from "react";
import {ILocationCardAction} from "../../../types/propsTypes";
import LocationName from "../../../atoms/LocationName/LocationName";
import ClickInfo from "../../../atoms/ClickInfo/ClickInfo";
import Link from "../../../components/Link/Link";
import Button from "../../../components/Button/Button";

const LocationCardAction = ({dispatch, locationId, locationName, locationImages, locationImageIndex}: ILocationCardAction): JSX.Element => {

    const [state, setState] = useState<boolean>(false);
    // slice => locationCardHover
    return (
      <LocationCardActionStyled onMouseEnter={e => setState(true)}
                                onMouseLeave={e => setState(false)}
                                onTouchMove={e => setState(true)}>

          <LocationName locationName={locationName}/>

          <Link locationName={locationName} locationId={locationId} locationImages={locationImages} locationImageIndex={locationImageIndex}/>

          {state && <Button
              onClick={() => dispatch(deleteLocationData(locationId))}
              borderRadius="1rem"
              contrast
              imgPosition
              fontSize="1.2rem"
              padding="1em"><BsXLg/></Button>}

          {state &&  <ClickInfo/>}
      </LocationCardActionStyled>
  );
};

export default LocationCardAction;