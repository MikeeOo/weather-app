import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {updateLocationDataArrayViaApi} from "../api/thunks";

import {ILocationDataState, ILocationInputData, ILocationParamsData, ILocationEditData} from "./locationDataSlice.types";
import {ILocationData} from "../../types/common.types";

const initialState: ILocationDataState = {
    locationDataArray: [],
    locationDataDetails: {},
    locationDataLoader: false,
    locationLastDuplicate: ``,
    locationNotFoundError: false,
    locationDuplicateError: false
};

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setLocationDataLoader(state): void {
            state.locationDataLoader = true;
        },

        removeLocationNotFoundError(state): void {
            state.locationNotFoundError = false;
        },

        removeLocationDuplicateError(state): void {
            state.locationDuplicateError = false;
        },

        addLocationInputDataToState(state, {payload}: PayloadAction<ILocationInputData>): void {
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },

        getInitialStateFromLocalStorage(state): void {
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },

        deleteLocationData(state, {payload}: PayloadAction<undefined | string>): void {

            state.locationDataArray.splice(state.locationDataArray.findIndex((location): boolean => location.locationId === payload),1);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));

            !JSON.parse(localStorage.getItem(`locationDataArray`) as string).length && localStorage.clear();
        },

        filterLocationDataArrayViaParams(state, {payload}: PayloadAction<ILocationParamsData>): void {
            state.locationDataDetails = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocationData): boolean => location.locationId === payload.locationId);
        },

        editLocationImage(state, {payload}: PayloadAction<ILocationEditData>): void {
            state.locationDataArray = state.locationDataArray.map(locationData => locationData.locationId === payload.currLocationId ? {...locationData, locationImageIndex: payload.currLocationSlide} : locationData);
        }
    },

    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<Array<ILocationData>>): void => {

            let duplicate: number = 0;

            for(const location of payload) payload[payload.length - 1].locationName === location.locationName && (duplicate += 1);

            if (duplicate !== 2 && payload[payload.length - 1].locationRequestCod === "200") {
                state.locationDataArray = payload;
                localStorage.setItem(`locationDataArray`, JSON.stringify(payload));
                state.locationDataLoader = false;
            } else {
                state.locationLastDuplicate = payload[payload.length - 1].locationName;
                payload[payload.length - 1].locationRequestCod === "404" ? state.locationNotFoundError = true : state.locationDuplicateError = true;
                const updatedLocationArray: Array<ILocationData> = payload;
                updatedLocationArray.pop();
                state.locationDataArray = updatedLocationArray;
                localStorage.setItem(`locationDataArray`, JSON.stringify(updatedLocationArray));
                state.locationDataLoader = false;
            }
        });
    }
});

export const {editLocationImage,removeLocationNotFoundError, removeLocationDuplicateError, setLocationDataLoader, addLocationInputDataToState ,getInitialStateFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions;

export default locationDataSlice.reducer;