import {useDispatch, useSelector} from "react-redux";
import {getLocationFromLocalStorage} from "../redux/locationDataSlice";
import {locationDataArray as reduxLocationDataArray} from "../redux/locationDataSlice";

import {LocationDisplayStyled} from "./LocationDisplay.styled";
import Location from "./Location";
import {useEffect} from "react";

const LocationDisplay = (): JSX.Element => {

    const dispatch = useDispatch();

    const locationDataArray = useSelector(reduxLocationDataArray)

    useEffect(() => {
        dispatch(getLocationFromLocalStorage())
    },[])

  return (
      <LocationDisplayStyled>
          {locationDataArray.map((location) =>
              <Location key={location.locationId}
                        locationId={location.locationId}
                        locationName={location.locationName}
                        locationTemp={location.locationTemp}
                        locationDesc={location.locationDesc}
                        locationIcon={location.locationIcon}
                        locationPicture={location.locationPicture}/>
          )}
      </LocationDisplayStyled>
  )
}

export default LocationDisplay