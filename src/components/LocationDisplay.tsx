import {useSelector} from "react-redux";
import {locationDataArray as reduxLocationDataArray} from "../redux/locationDataSlice";
import Location from "./Location";

const LocationDisplay = (): JSX.Element => {

    const locationDataArray = useSelector(reduxLocationDataArray)

  return (
      <>
          {locationDataArray.map((location) =>
              <Location key={location.locationId}
                        locationId={location.locationId}
                        locationName={location.locationName}
                        locationTemp={location.locationTemp}
                        locationDesc={location.locationDesc}
                        locationIcon={location.locationIcon}
                        locationPicture={location.locationPicture}/>
          )}
      </>
  )
}

export default LocationDisplay