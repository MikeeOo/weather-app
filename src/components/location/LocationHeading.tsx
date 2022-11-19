import {useDispatch} from "react-redux";

import {LocationHeadingStyled} from "./LocationHeading.styled";
import {deleteLocationData} from "../../redux/locationDataSlice";

import DeleteSvg from "../atoms/svg/DeleteSvg";

import {ILocationHeading} from "../../types/componentsProps"
import {Link} from "react-router-dom";


const LocationHeading = ({locationId, locationName}: ILocationHeading): JSX.Element => {

    const dispatch = useDispatch()

  return (
      <LocationHeadingStyled>

          <Link to="/location" style={{color: 'white', fontSize: `20px`}}>{locationName}</Link>

          <button onClick={() => dispatch(deleteLocationData(locationId))}>

              <DeleteSvg/>
          </button>
      </LocationHeadingStyled>
  );
};

export default LocationHeading;