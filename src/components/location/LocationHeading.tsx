import {useDispatch} from "react-redux";

import {LocationHeadingStyled} from "./LocationHeading.styled";
import {deleteLocationData} from "../../redux/locationDataSlice";

import DeleteSvg from "../atoms/svg/DeleteSvg";

import {ILocationHeading} from "../../ts/types"

const LocationHeading = ({locationId, locationName}: ILocationHeading): JSX.Element => {

    const dispatch = useDispatch()

  return (
      <LocationHeadingStyled>

          <h2>{locationName}</h2>

          <button onClick={() => dispatch(deleteLocationData(locationId))}>

              <DeleteSvg/>
          </button>
      </LocationHeadingStyled>
  );
};

export default LocationHeading;