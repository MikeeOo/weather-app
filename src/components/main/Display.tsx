import {useSelector} from "react-redux";
import {DisplayStyled} from "./Display.styled";
import {locationDataArray as reduxLocationDataArray} from "../../redux/locationDataSlice";
import Location from "../location/Location";

const Display = (): JSX.Element => {

    const locationDataArray = useSelector(reduxLocationDataArray)

  return (
      <DisplayStyled>
          {locationDataArray.map((location: any) => <Location
              key={location.locationId}
              locationId={location.locationId}
              locationInput={location.locationInput}
              locationName={location.locationName}
              locationTemp={location.locationTemp}
              locationDesc={location.locationDesc}
          />)}
      </DisplayStyled>
  )
}

export default Display