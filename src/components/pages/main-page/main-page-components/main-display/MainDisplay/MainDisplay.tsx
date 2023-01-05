import {useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../../../../../redux/store";
import {setLocationDataLoader, getInitialStateFromLocalStorage} from "../../../../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../../../../api/thunks";

import MainLocationContainer from "../main-location/MainLocationContainer";
import LoaderSvg from "../../../../../../svg/LoaderSvg";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import {ILocationData} from "../../../../../../types/commonTypes";

import { MainDisplayStyled } from "./MainDisplay.styled";

const MainDisplay = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray)

    const locationDataLoader = useAppSelector(state => state.locationData.locationDataLoader)

    useEffect((): void => {
        dispatch(getInitialStateFromLocalStorage())
    },[])

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
      <MainDisplayStyled>

          {!locationDataArray.length ? <div style={{color: "white"}}>Search for location...</div> : null}

          {!locationDataLoader && locationDataArray.map((location: ILocationData) =>
              <MainLocationContainer key={location.locationId}
                                     locationId={location.locationId}
                                     locationName={location.locationName}
                                     locationTemp={location.locationTemp}
                                     locationDesc={location.locationDesc}
                                     locationIcon={location.locationIcon}
                                     locationImages={location.locationImages}
                                     locationImageIndex={location.locationImageIndex}/>
          )}

          {locationDataLoader && <div style={{width: `300px`, height:`100vh`, margin:`0 auto`, display: `flex`, alignItems:`center`}}><LoaderSvg/></div>}
      </MainDisplayStyled>
  );
};

export default MainDisplay;