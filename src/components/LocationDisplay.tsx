import {useSelector} from "react-redux";
import {locationDataArray as reduxLocationDataArray} from "../redux/locationDataSlice";
import Location from "./Location";

const LocationDisplay = (): JSX.Element => {

    const locationDataArray = useSelector(reduxLocationDataArray)

  return (
      <>

          {locationDataArray.map((el) =>
              <Location key={el.locationId}
                        locationName={el.locationName}
                        locationTemp={el.locationTemp}
                        locationDesc={el.locationDesc}
                        locationIcon={el.locationIcon}
                        locationPicture={el.locationPicture}
              />
          )}
      </>
  )
}

export default LocationDisplay