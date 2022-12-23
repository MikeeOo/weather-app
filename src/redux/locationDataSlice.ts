import {createSlice} from "@reduxjs/toolkit";

import {updateLocationDataArrayViaApi} from "../api/thunks";

import {ILocationDataReducer, ILocationDataArray} from "../types/locationDataSliceTypes";
import {IUpdatedLocationData} from "../types/thunksTypes";
import {ILocationData} from "../types/commonTypes"

const initialState: ILocationDataArray = {
    locationDataArray: [],
    locationDataPage: {},
    locationDataLoader: false,
    locationNotFoundError: false
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setLocationDataLoader(state): void{
            state.locationDataLoader = true;
        },
        removeLocationNotFoundError(state): void{
            state.locationNotFoundError = false;
        },
        addLocationInputDataToState(state, {payload}): void{

            state.locationDataArray.push(payload)

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },
        // change this name!!!
        getLocationFromLocalStorage(state): void{
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },
        deleteLocationData(state, action): void{

            state.locationDataArray.splice(state.locationDataArray.findIndex((location): boolean => location.locationId === action.payload),1);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));

            if(!JSON.parse(localStorage.getItem(`locationDataArray`) as string).length){
                localStorage.clear();
            }
        },
        filterLocationDataArrayViaParams(state, {payload}: any): void{
            state.locationDataPage = JSON.parse(localStorage.getItem(`locationDataArray`) as string).find((location: ILocationData): boolean => location.locationId === payload.id);
        },
        editLocationImage(state, {payload}): void {
            state.locationDataArray = state.locationDataArray.map(locationData => locationData.locationId === payload.currLocationId ? {...locationData, locationImageIndex: payload.currLocationSlide} : locationData);
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, action: IUpdatedLocationData): void => {

                if(action.payload[action.payload.length - 1].locationRequestCod === `200`) {

                    state.locationDataArray = action.payload;
                    localStorage.setItem(`locationDataArray`, JSON.stringify(action.payload))
                    state.locationDataLoader = false;
                } else {

                    const updatedLocationArray: Array<ILocationData> = action.payload
                    updatedLocationArray.pop()
                    state.locationDataArray = updatedLocationArray
                    localStorage.setItem(`locationDataArray`, JSON.stringify(updatedLocationArray))
                    state.locationDataLoader = false;
                    state.locationNotFoundError = true;
                }
        });
    }
});

export const {editLocationImage,removeLocationNotFoundError,setLocationDataLoader, addLocationInputDataToState ,getLocationFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray
export const locationDataPage = (state: ILocationDataReducer): ILocationData => state.locationData.locationDataPage
export const locationDataLoader = (state: ILocationDataReducer): boolean => state.locationData.locationDataLoader
export const locationNotFoundError = (state: ILocationDataReducer): boolean => state.locationData.locationNotFoundError

export default locationDataSlice.reducer