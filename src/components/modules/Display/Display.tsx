import {useEffect} from "react";

import {setLocationDataLoader, getInitialStateFromLocalStorage} from "../../../redux/slices/locationDataSlice";
import {updateLocationDataArrayViaApi} from "../../../redux/api/thunks";

import LocationCard from "../../elements/LocationCard";
import Loader from "../../atoms/Loader";

import {ILocationData} from "../../../types/common.types";

import {DisplayStyled} from "./Display.styled";
import {useAppDispatch, useAppSelector} from "../../../redux/store";

const Display = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const locationDataLoader = useAppSelector(state => state.locationData.locationDataLoader);

    useEffect((): void => {
        dispatch(getInitialStateFromLocalStorage());
    },[]);

    useEffect(() => {
        if(locationDataArray.length){

            dispatch(setLocationDataLoader());

            dispatch(updateLocationDataArrayViaApi(locationDataArray));
        }
    },[locationDataArray.length]);

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