import LocationPicture from "./LocationPicture";
import LocationHeading from "./LocationHeading";
import {LocationStyled} from "./Location.styled";
import {ILocation} from "../../types/componentsProps";
import {useEffect, useState} from "react";

const Location = (props: ILocation): JSX.Element => {

    const [locationError, setLocationError] = useState<boolean>(false)

    useEffect(() => {
        props.locationName !== `location not found`? setLocationError(false) : setLocationError(true)
    },[])

  return (

      <LocationStyled>

          <LocationPicture locationPicture={props.locationPicture} />

          <LocationHeading locationId={props.locationId}
                           locationName={props.locationName}/>
          {!locationError && <p>Temp: {props.locationTemp}°C</p>}
          {!locationError && <p>Conditions: {props.locationDesc}</p>}
          {!locationError && <img src={props.locationIcon} alt="weather icon"/>}
      </LocationStyled>
  )
}

export default Location