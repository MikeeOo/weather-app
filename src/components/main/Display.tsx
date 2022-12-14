import {useEffect} from "react";

import {useDispatch, useSelector} from "react-redux";
import {
    locationDataArray as reduxLocationDataArray,
    getLocationFromLocalStorage
} from "../../redux/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../api/thunks";
import type {} from 'redux-thunk/extend-redux';

import {DisplayStyled} from "./Display.styled";
import Location from "../location/Location";
import {ILocationData} from "../../types/reduxData";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";

const Display = (): JSX.Element => {

    const dispatch: Dispatch<AnyAction> = useDispatch();

    const locationDataArray: Array<ILocationData> = useSelector(reduxLocationDataArray)

    useEffect(() => {
        dispatch(getLocationFromLocalStorage())
    },[])

    useEffect(() => {
        if(locationDataArray.length){
            dispatch(updateLocationDataArrayViaApi(locationDataArray))
        }
    },[locationDataArray.length])


    return (
      <DisplayStyled>
          {locationDataArray.map((location) =>
              <Location key={location.locationId}
                        locationId={location.locationId}
                        locationName={location.locationName}
                        locationTemp={location.locationTemp}
                        locationDesc={location.locationDesc}
                        locationIcon={location.locationIcon}
                        locationPicture={location.locationPicture}/>
          )}
      </DisplayStyled>
  )
}

export default Display