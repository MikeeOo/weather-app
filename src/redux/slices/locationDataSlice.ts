import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {addLocationDataArrayViaApi, updateLocationDataArrayViaApi} from "../api/thunks";

import {ILocationDataState, ILocationInputData, ILocationParamsData, ILocationEditData, IApiOperationStatus, OperationStatuses} from "./locationDataSlice.types";
import {ILocationData} from "../../types/common.types";
import getPlaceholderText from "../../utils/getPlaceholderText";

// enum HttpStatuses{
//     ok = 200,
//     notFound = "404",
// }


//1. Update

const initialState: ILocationDataState = {
    locationDataArray: [],
    locationDataDetails: {},
    apiOperationStatus: {
        message: "Search for location... ;)",
        status: OperationStatuses.idle
    }
};

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setApiOperationStatus(state, {payload}: PayloadAction<IApiOperationStatus>): void{
            state.apiOperationStatus = payload;
        },

        // to do wywalenia
        addLocationInputDataToState(state, {payload}: PayloadAction<ILocationInputData>): void {
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },

        getInitialStateFromLocalStorage(state): void {
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },
        deleteLocationData(state, {payload}: PayloadAction<undefined | string>): void {
            const locationIndex = state.locationDataArray.findIndex((location): boolean => location.locationId === payload);
            const locationName = state.locationDataArray[locationIndex].locationName;

            state.locationDataArray.splice(locationIndex,1);
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
            !JSON.parse(localStorage.getItem(`locationDataArray`) as string).length && localStorage.clear();

            state.apiOperationStatus = {message: `Location ${locationName} deleted!`, status: OperationStatuses.delete};
        },

        filterLocationDataArrayViaParams(state, {payload}: PayloadAction<ILocationParamsData>): void {
            state.locationDataDetails = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocationData): boolean => location.locationId === payload.locationId);
        },

        editLocationImage(state, {payload}: PayloadAction<ILocationEditData>): void {
            state.locationDataArray = state.locationDataArray.map(locationData => locationData.locationId === payload.currLocationId ? {...locationData, locationImageIndex: payload.currLocationSlide} : locationData);

            console.log(state.locationDataArray);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(addLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<ILocationData>): void => {
            const duplicate: ILocationData | undefined = state.locationDataArray.find(location => location.locationName === payload.locationName);

            if (duplicate === undefined && payload.locationRequestCod === "200") {
                state.locationDataArray.push(payload);
                localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
                state.apiOperationStatus = {message: `You successfully added ${payload.locationName} ;)`, status: OperationStatuses.add};
            } else {
                state.apiOperationStatus =  {message: payload.locationRequestCod === "404" ? "Error: Location not found!" : `Error: You've already added ${payload.locationName}!`, status: OperationStatuses.error}
            }
        });
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<Array<ILocationData>>): void => {
            console.log('update')
            state.locationDataArray = payload;
            localStorage.setItem(`locationDataArray`, JSON.stringify(payload));
            // tutaj odpalić get placeholder text
            state.apiOperationStatus = {message: getPlaceholderText(state.locationDataArray.length), status: OperationStatuses.idle};
        });
    }
});

export const {editLocationImage, addLocationInputDataToState ,getInitialStateFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams, setApiOperationStatus} = locationDataSlice.actions;

export default locationDataSlice.reducer;