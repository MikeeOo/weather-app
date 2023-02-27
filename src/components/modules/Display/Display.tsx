import {useEffect, useState} from "react";

import LocationCard from "../../elements/LocationCard";
import Loader from "../../atoms/Loader";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import { getInitialStateFromLocalStorage, setApiOperationStatus} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import {ILocationData} from "../../../types/common.types";

import {DisplayStyled} from "./Display.styled";

const Display = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const apiOperationStatus = useAppSelector(state => state.locationData.apiOperationStatus);

    const handleReduxLoaderAndApi = (locationDataArrayLength: number): void => {
        if (locationDataArrayLength && !apiOperationStatus.endsWith('deleted!')) {
            dispatch(setApiOperationStatus('Updating...'))
            dispatch(updateLocationDataArrayViaApi(locationDataArray));
        }
    };

    useEffect(() => {
        dispatch(getInitialStateFromLocalStorage());
        handleReduxLoaderAndApi(locationDataArray.length);
        const intervalId = setInterval(() => handleReduxLoaderAndApi(locationDataArray.length), 1000 * 60 * 10);
        return () => clearInterval(intervalId);
    }, [locationDataArray.length]);

    return (
        <section>
            {apiOperationStatus === "Updating..." && <Loader/>}
            {apiOperationStatus !== "Updating..." && <DisplayStyled>{locationDataArray.map((location: ILocationData) => <LocationCard key={location.locationId} {...location}/>)}</DisplayStyled>}
        </section>
    );
};

export default Display;