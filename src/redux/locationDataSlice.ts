import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {updateLocationDataArrayViaApi} from "../api/thunks";

import {ILocationDataState, ILocationInputData, ILocationParamsData, ILocationEditData} from "../types/locationDataSliceTypes";
import {ILocationData} from "../types/commonTypes";

const initialState: ILocationDataState = {
    locationDataArray: [],
    locationDataPage: {},
    locationDataLoader: false,
    locationNotFoundError: false
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

            if(!JSON.parse(localStorage.getItem(`locationDataArray`) as string).length){
                localStorage.clear();
            }
        },

        filterLocationDataArrayViaParams(state, {payload}: PayloadAction<ILocationParamsData>): void {
            state.locationDataPage = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocationData): boolean => location.locationId === payload.locationId);
        },

        editLocationImage(state, {payload}: PayloadAction<ILocationEditData>): void {
            state.locationDataArray = state.locationDataArray.map(locationData => locationData.locationId === payload.currLocationId ? {...locationData, locationImageIndex: payload.currLocationSlide} : locationData);
        }
    },

    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<Array<ILocationData>>): void => {

                if(payload[payload.length - 1].locationRequestCod === `200`) {

                    state.locationDataArray = payload;
                    localStorage.setItem(`locationDataArray`, JSON.stringify(payload))
                    state.locationDataLoader = false;
                } else {

                    const updatedLocationArray: Array<ILocationData> = payload
                    updatedLocationArray.pop()
                    state.locationDataArray = updatedLocationArray
                    localStorage.setItem(`locationDataArray`, JSON.stringify(updatedLocationArray))
                    state.locationDataLoader = false;
                    state.locationNotFoundError = true;
                }
        });
    }
});

export const {editLocationImage,removeLocationNotFoundError,setLocationDataLoader, addLocationInputDataToState ,getInitialStateFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions;

export default locationDataSlice.reducer;