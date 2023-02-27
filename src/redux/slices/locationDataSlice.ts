import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {addLocationDataArrayViaApi, updateLocationDataArrayViaApi} from "../api/thunks";

import {ILocationDataState, ILocationInputData, ILocationParamsData, ILocationEditData} from "./locationDataSlice.types";
import {ILocationData} from "../../types/common.types";

const initialState: ILocationDataState = {
    locationDataArray: [],
    locationDataDetails: {},
    apiOperationStatus: ""
};

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setApiOperationStatus(state, {payload}): void{
            state.apiOperationStatus = payload;
        },
        addLocationInputDataToState(state, {payload}: PayloadAction<ILocationInputData>): void {
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },
        getInitialStateFromLocalStorage(state): void {
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },
        deleteLocationData(state, {payload}: PayloadAction<undefined | string>): void {
            const locationIndex = state.locationDataArray.findIndex((location): boolean => location.locationId === payload)
            const locationName = state.locationDataArray[locationIndex].locationName

            state.locationDataArray.splice(locationIndex,1);
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
            !JSON.parse(localStorage.getItem(`locationDataArray`) as string).length && localStorage.clear();

            state.apiOperationStatus = `Location ${locationName} deleted!`
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
            state.locationDataArray = payload;
            localStorage.setItem(`locationDataArray`, JSON.stringify(payload));
            state.apiOperationStatus = `You successfully added ${payload[payload.length - 1].locationName} ;)`;
        });
        builder.addCase(addLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<ILocationData>): void => {
            const duplicate: ILocationData | undefined = state.locationDataArray.find(location => location.locationName === payload.locationName);

            if (duplicate === undefined && payload.locationRequestCod === "200") {
                state.locationDataArray.push(payload);
                localStorage.setItem(`locationDataArray`, JSON.stringify(payload));
                state.apiOperationStatus = `You successfully added ${payload.locationName} ;)`;
            } else {
                state.apiOperationStatus =  payload.locationRequestCod === "404" ? "Error: Location not found!" : `Error: You've already added ${payload.locationName}!`
            }
        });

    }
});

export const {editLocationImage, addLocationInputDataToState ,getInitialStateFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams, setApiOperationStatus} = locationDataSlice.actions;

export default locationDataSlice.reducer;