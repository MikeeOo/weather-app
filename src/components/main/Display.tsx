import {useEffect} from "react";

import {useSelector} from "react-redux";
import {useAppDispatch} from "../../redux/store";

import {
    locationDataArray as reduxLocationDataArray, locationDataLoader as reduxLocationDataLoader,
    setLocationDataLoader, getInitialStateFromLocalStorage} from "../../redux/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../api/thunks";

import Location from "../location/Location";
import LoaderSvg from "../atoms/svg/LoaderSvg";

// import type {} from 'redux-thunk/extend-redux';
// import {AnyAction, Dispatch} from "@reduxjs/toolkit";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import {ILocationData} from "../../types/commonTypes";

import styled from "styled-components";

const Display = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const locationDataArray: Array<ILocationData> = useSelector(reduxLocationDataArray)

    const locationDataLoader: boolean = useSelector(reduxLocationDataLoader)

    useEffect((): void => {
        dispatch(getInitialStateFromLocalStorage())
    },[])

    useEffect(() => {
        if(locationDataArray.length){

            dispatch(setLocationDataLoader())

                const timeout: TimeoutId = setTimeout((): void => {

                    dispatch(updateLocationDataArrayViaApi(locationDataArray))
                }, 250)

                return () => clearTimeout(timeout)
            }
    },[locationDataArray.length])

    return (
      <DisplayStyled>

          {!locationDataArray.length ? <div style={{color: "white"}}>Search for location...</div> : null}

          <>
              {!locationDataLoader && locationDataArray.map((location: ILocationData) =>
                  <Location key={location.locationId}
                            locationId={location.locationId}
                            locationName={location.locationName}
                            locationTemp={location.locationTemp}
                            locationDesc={location.locationDesc}
                            locationIcon={location.locationIcon}
                            locationImages={location.locationImages}
                            locationImageIndex={location.locationImageIndex}/>
              )}
              {locationDataLoader && <div style={{width: `300px`, height:`100vh`, margin:`0 auto`, display: `flex`, alignItems:`center`}}><LoaderSvg/></div>}
          </>
      </DisplayStyled>
  )
};

export default Display;

export const DisplayStyled = styled.div`
  padding: 0 0 2.4rem 0;
`