import LocationPicture from "./LocationPicture";
import LocationHeading from "./LocationHeading";
import {LocationStyled} from "./Location.styled";
import {ILocationData} from "../../types/reduxData";

const Location = (props: ILocationData): JSX.Element => {

  return (

      <LocationStyled>

          <LocationPicture locationPicture={props.locationPicture} />

          <LocationHeading locationId={props.locationId}
                           locationName={props.locationName}/>

          <p>Temp: {props.locationTemp}°C</p>
          <p>Conditions: {props.locationDesc}<img src={`https://openweathermap.org/img/wn/${props.locationIcon}@2x.png`} alt="weather icon"/></p>
      </LocationStyled>
  )
}

export default Location