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

    useEffect(() => {
        dispatch(getInitialStateFromLocalStorage());

        handleReduxLoaderAndApi(locationDataArray.length)

        const intervalId = setInterval(() => handleReduxLoaderAndApi(locationDataArray.length), 1000 * 60 * 10);

        return () => clearInterval(intervalId);

    }, [locationDataArray.length]);

    const handleReduxLoaderAndApi = (locationDataArrayLength: number): void => {
        if (locationDataArrayLength) {

            dispatch(setLocationDataLoader());
            dispatch(updateLocationDataArrayViaApi(locationDataArray));
        }
    };

    return (
        <section>
            {locationDataLoader && <Loader/>}

            <DisplayStyled>

                {!locationDataLoader && locationDataArray.map((location: ILocationData) =>
                    <LocationCard key={location.locationId}
                                  locationId={location.locationId}
                                  locationName={location.locationName}
                                  locationTemp={location.locationTemp}
                                  locationDesc={location.locationDesc}
                                  locationIcon={location.locationIcon}
                                  locationImages={location.locationImages}
                                  locationImageIndex={location.locationImageIndex}/>
                )}
            </DisplayStyled>
        </section>
    );
};

export default Display;