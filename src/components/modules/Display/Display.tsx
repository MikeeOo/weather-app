import {useEffect} from "react";

import LocationCard from "../../elements/LocationCard";
import Loader from "../../atoms/Loader";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setLocationDataLoader, getInitialStateFromLocalStorage} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import {ILocationData} from "../../../types/common.types";

import {DisplayStyled} from "./Display.styled";

const Display = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);
    const locationDataLoader = useAppSelector(state => state.locationData.locationDataLoader);

    const handleReduxLoaderAndApi = (locationDataArrayLength: number): void => {
        if (locationDataArrayLength) {
            dispatch(setLocationDataLoader());
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
            {locationDataLoader && <Loader/>}
            {!locationDataLoader && <DisplayStyled>{locationDataArray.map((location: ILocationData) => <LocationCard key={location.locationId} {...location}/>)}</DisplayStyled>}
        </section>
    );
};

export default Display;