
import {LocationStyled} from "./Location.styled";

const Location = (): JSX.Element => {

  return (

      <LocationStyled>

      {/*    <LocationPicture locationPicture={props.locationPicture} />*/}

      {/*    <LocationHeading locationId={props.locationId}*/}
      {/*                     locationName={props.locationName}/>*/}

      {/*    <p>Temp: {(Math.round(parseFloat(props.locationTemp.toFixed(1))))}°C</p>*/}
      {/*    <p>Conditions: {props.locationDesc}<img src={`https://openweathermap.org/img/wn/${props.locationIcon}@2x.png`} alt="weather icon"/></p>*/}
      </LocationStyled>
  )
}

export default Location