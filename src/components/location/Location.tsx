import LocationPicture from "./LocationPicture";
import LocationHeading from "./LocationHeading";
import {LocationStyled} from "./Location.styled";
import {ILocation} from "../../types/componentsProps";
import {LocationPictureStyled} from "./LocationPicture.styled";
import {useState} from "react";

const Location = (props: ILocation): JSX.Element => {

    // console.log(props.locationPicture)
  return (

      <LocationStyled>
          {/*<LocationPicture locationPicture={props.locationPicture} />*/}

          {props.locationPicture && <LocationPictureStyled

              style={{backgroundImage: `url(${props.locationPicture[props.locationPictureIndex].largeImageURL})`}}/>}




          <LocationHeading locationId={props.locationId}
                           locationName={props.locationName}
                           locationPictureIndex={props.locationPictureIndex}
          />

          <p>Temp: {props.locationTemp}°C</p>
          <p>Conditions: {props.locationDesc}</p>
          <img src={props.locationIcon} alt="weather icon" style={{filter: `invert(1)`}}/>
      </LocationStyled>
  )
}

export default Location