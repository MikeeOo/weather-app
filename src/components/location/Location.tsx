import LocationPicture from "./LocationPicture";
import LocationHeading from "./LocationHeading";
import {LocationStyled} from "./Location.styled";
import {ILocation} from "../../types/componentsProps";

const Location = (props: ILocation): JSX.Element => {

  return (

      <LocationStyled>

          <LocationPicture locationPicture={props.locationPicture} />

          <LocationHeading locationId={props.locationId}
                           locationName={props.locationName}/>

          <p>Temp: {props.locationTemp}°C</p>
          <p>Conditions: {props.locationDesc}<img src={props.locationIcon} alt="weather icon"/></p>
      </LocationStyled>
  )
}

export default Location