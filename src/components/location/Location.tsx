import {useEffect} from "react";


import {useDispatch} from "react-redux";
import type {} from 'redux-thunk/extend-redux';

import {LocationStyled} from "./Location.styled";
import {getLocationDataFromAPI} from "../../api/thunks";

const Location = (props: any): JSX.Element => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getLocationDataFromAPI(props))
    },[])

  return (

      <LocationStyled>
          {props.locationId}
          {props.locationInput}
          {props.locationTemp}
          XDXDXDXDXDXD
          {/*<p>Conditions: {props.locationDesc}<img src={`https://openweathermap.org/img/wn/${props.locationIcon}@2x.png`} alt="weather icon"/></p>*/}
      </LocationStyled>
  )
}

export default Location