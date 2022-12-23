import {useEffect, useState} from "react";

import {useDispatch, useSelector} from "react-redux";
import {
    locationDataArray as reduxLocationDataArray,
    loader as reduxLoader,
    setLoader,
    getLocationFromLocalStorage
} from "../../redux/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../api/thunks";
import type {} from 'redux-thunk/extend-redux';

import {DisplayStyled} from "./Display.styled";
import Location from "../location/Location";
import {ILocationData} from "../../types/reduxData";
import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import LoaderSvg from "../atoms/svg/LoaderSvg";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

const Display = (): JSX.Element => {

    const dispatch: Dispatch<AnyAction> = useDispatch();

    const locationDataArray: Array<ILocationData> = useSelector(reduxLocationDataArray)

    const loader: boolean = useSelector(reduxLoader)
    // DLACZEGO TO TERAZ NIE JEST POTRZEBNE?!?!?!?!
    useEffect(() => {

        dispatch(getLocationFromLocalStorage())
    },[])

    useEffect(() => {
        // dispatch(setLoader())
        // tutaj możesz wrzucić info o dodaniu miasta zamiast loadera
        if(locationDataArray.length){

            dispatch(setLoader())

                const timeout: TimeoutId = setTimeout((): void => {

                    dispatch(updateLocationDataArrayViaApi(locationDataArray))
                }, 250)

                return () => clearTimeout(timeout)
            }
    },[locationDataArray.length])

    // console.log(locationDataArray)
    return (
      <DisplayStyled>

          {!locationDataArray.length ? <div style={{color: "white"}}>Search for location...</div> : null}

          <>
              {!loader && locationDataArray.map((location) =>
                  <Location key={location.locationId}
                            locationId={location.locationId}
                            locationName={location.locationName}
                            locationTemp={location.locationTemp}
                            locationDesc={location.locationDesc}
                            locationIcon={location.locationIcon}
                            locationPicture={location.locationPicture}
                            locationPictureIndex={location.locationPictureIndex}/>
              )}
              {loader && <div style={{width: `300px`, height:`100vh`, margin:`0 auto`, display: `flex`, alignItems:`center`}}><LoaderSvg/></div>}
          </>

      </DisplayStyled>
  )
}

export default Display