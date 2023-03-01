import {useEffect, useState} from "react";

import LocationCard from "../../elements/LocationCard";
import Loader from "../../atoms/Loader";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import { getInitialStateFromLocalStorage, setApiOperationStatus} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import {ILocationData} from "../../../types/common.types";
import {OperationStatuses} from "../../../redux/slices/locationDataSlice.types";

import {DisplayStyled} from "./Display.styled";

const Display = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const apiOperationStatus = useAppSelector(state => state.locationData.apiOperationStatus);

    const handleReduxLoaderAndApi = (locationDataArrayLength: number): void => {
        if (locationDataArrayLength && !apiOperationStatus.message.endsWith('deleted!')) {
            dispatch(setApiOperationStatus({status: OperationStatuses.update, message: 'Updating...'}));
            dispatch(updateLocationDataArrayViaApi(locationDataArray));
        }
        else if (!locationDataArrayLength && !apiOperationStatus) {
            dispatch(setApiOperationStatus({status: OperationStatuses.idle, message: "Search for location... ;)"}));
        }
    };

    useEffect(() => {
        dispatch(getInitialStateFromLocalStorage());
        handleReduxLoaderAndApi(locationDataArray.length);
        const intervalId = setInterval(() => handleReduxLoaderAndApi(locationDataArray.length), 1000 * 60 * 10);
        return () => clearInterval(intervalId);
    }, []);

    return (
        <section>
            {apiOperationStatus.status === OperationStatuses.update && <Loader/>}
            {apiOperationStatus.status !== OperationStatuses.update && <DisplayStyled>{locationDataArray.map((location: ILocationData) => <LocationCard key={location.locationId} {...location}/>)}</DisplayStyled>}
        </section>
    );
};

export default Display;