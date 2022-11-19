import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {getLocationFromLocalStorage} from "../../redux/locationDataSlice";
import {locationDataArray as reduxLocationDataArray} from "../../redux/locationDataSlice";

import {DisplayStyled} from "./Display.styled";
import Location from "../location/Location";

const Display = (): JSX.Element => {

    const dispatch = useDispatch();

    const locationDataArray = useSelector(reduxLocationDataArray)

    useEffect(() => {
        dispatch(getLocationFromLocalStorage())
    },[])

  return (
      <DisplayStyled>
          {locationDataArray.map((location) =>
              <Location key={location.locationId}
                        locationId={location.locationId}
                        locationName={location.locationName}
                        locationTemp={location.locationTemp}
                        locationDesc={location.locationDesc}
                        locationIcon={location.locationIcon}
                        locationPicture={location.locationPicture}/>
          )}
      </DisplayStyled>
  )
}

export default Display