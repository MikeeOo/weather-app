import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {ILocationDataState, ILocationParamsData, ILocationEditData, ILocationRequestState, ILocationDeleteModal} from "./locationDataSlice.types";
import {ILocationData, RequestStatus} from "../../types/common.types";
import {addLocationDataArrayViaApi, updateLocationDataArrayViaApi} from "../api/thunks";

const initialState: ILocationDataState = {
    locationDataArray: [],
    locationDataDetails: {},
    locationDeleteModal: {
        showModal: false,
        locationDeleteId: "",
        locationDeleteName: ""
    },
    locationRequestState: {
        message: "Search for location... ;)",
        status: RequestStatus.idle
    }
};

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        toggleModal(state, {payload}: PayloadAction<ILocationDeleteModal>): void {
            state.locationDeleteModal = payload;
        },
        setLocationRequestState(state, {payload}: PayloadAction<ILocationRequestState>): void {
            state.locationRequestState = payload;
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

            state.locationRequestState = {message: `Location ${locationName} deleted!`, status: RequestStatus.delete};
        },
        filterLocationDataArrayViaParams(state, {payload}: PayloadAction<ILocationParamsData>): void {
            state.locationDataDetails = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocationData): boolean => location.locationId === payload.locationId);
        },
        editLocationImage(state, {payload}: PayloadAction<ILocationEditData>): void {
            state.locationDataArray = state.locationDataArray.map(locationData => locationData.locationId === payload.currLocationId ? {...locationData, locationImageIndex: payload.currLocationSlide} : locationData);
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(addLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<ILocationData>): void => {
            const duplicate: ILocationData | undefined = state.locationDataArray.find(location => location.locationName === payload.locationName);

            if (duplicate === undefined && payload.locationRequestCod === "200") {
                state.locationDataArray.push(payload);
                localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
                state.locationRequestState = {message: `You successfully added ${payload.locationName} ;)`, status: RequestStatus.add};
            } else {
                state.locationRequestState =  {message: payload.locationRequestCod === "404" ? "Error: Location not found!" : `Error: You've already added ${payload.locationName}!`, status: RequestStatus.error};
            }
        });
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, {payload}: PayloadAction<Array<ILocationData>>): void => {
            state.locationDataArray = payload;
            localStorage.setItem(`locationDataArray`, JSON.stringify(payload));
            state.locationRequestState = {message: "Search for location... ;)", status: RequestStatus.idle};
        });
    }
});

export const {
    toggleModal,
    setLocationRequestState,
    getInitialStateFromLocalStorage,
    deleteLocationData,
    filterLocationDataArrayViaParams,
    editLocationImage
} = locationDataSlice.actions;

export default locationDataSlice.reducer;