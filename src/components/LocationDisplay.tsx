import {useSelector} from "react-redux";
import {locationDataArray as reduxLocationDataArray} from "../redux/locationDataSlice";
import Location from "./Location";

const LocationDisplay = (): JSX.Element => {

    const locationDataArray = useSelector(reduxLocationDataArray)

  return (
      <>
          <Location/>
          {console.log(locationDataArray)}
      </>
  )
}

export default LocationDisplay