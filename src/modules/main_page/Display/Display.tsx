import {useEffect} from "react";

import {setLocationDataLoader, getInitialStateFromLocalStorage} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import LocationCard from "../LocationCard/LocationCard";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import {ILocationData} from "../../../types/commonTypes";

import { DisplayStyled } from "./Display.styled";
import {IMainDisplay} from "../../../types/propsTypes";
import Loader from "../Loader/Loader";

const Display = ({dispatch, locationDataArray, locationDataLoader}: IMainDisplay): JSX.Element => {

    useEffect((): void => {
        dispatch(getInitialStateFromLocalStorage())
    },[]);

    useEffect(() => {
        if(locationDataArray.length){

            dispatch(setLocationDataLoader())

            // dispatch(updateLocationDataArrayViaApi(locationDataArray))

            // smoother
            const timeout: TimeoutId = setTimeout((): void => {

                    dispatch(updateLocationDataArrayViaApi(locationDataArray))
                }, 250)

                return () => clearTimeout(timeout)
            }
    },[locationDataArray.length]);

    return (
        <>
            {locationDataLoader && <Loader/>}

            <DisplayStyled>

                {!locationDataLoader && locationDataArray.map((location: ILocationData) =>
                    <LocationCard key={location.locationId}
                                  dispatch={dispatch}
                                  locationId={location.locationId}
                                  locationName={location.locationName}
                                  locationTemp={location.locationTemp}
                                  locationDesc={location.locationDesc}
                                  locationIcon={location.locationIcon}
                                  locationImages={location.locationImages}
                                  locationImageIndex={location.locationImageIndex}/>
                )}
            </DisplayStyled>
        </>
    );
};

export default Display;