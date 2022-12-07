import {createSlice} from "@reduxjs/toolkit";
import {updateLocationDataViaApi} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData} from "../types/reduxData";
// import {ApiData} from "../types/apiData";

const initialState: ILocationDataArray = {
    locationDataArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        addLocationInputToArray(state,{payload}){
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },
        initialStateFromLocalStorage(state) {
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataViaApi.fulfilled, (state, action): void => {
            // state.locationDataArray = [];
        })
    }
})

export const {addLocationInputToArray, initialStateFromLocalStorage} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray

export default locationDataSlice.reducer