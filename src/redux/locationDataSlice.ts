import {createSlice} from "@reduxjs/toolkit";
import {updateLocationDataArrayViaApi} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData} from "../types/reduxData";
import {IUpdatedLocationData} from "../types/apiData";

const initialState: ILocationDataArray = {
    locationDataArray: [],
    locationDataPageArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        addLocationInputDataToState(state, {payload}){
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray))
        },

        getLocationFromLocalStorage(state): void{
            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
        },

        deleteLocationData(state, action): void{
            state.locationDataArray.splice(
                state.locationDataArray.findIndex(
                    (location) => location.locationId === action.payload
                )
            ,1);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },
        //filterLocationDataArrayViaParams
        filterLocationDataArrayViaParams(state, {payload}: any){

            const localStorageDataArray: Array<ILocationData> = JSON.parse(localStorage.getItem(`locationDataArray`) as string)

            state.locationDataPageArray = localStorageDataArray.slice(
                localStorageDataArray.findIndex((location) => location.locationId === payload.id),
                localStorageDataArray.findIndex((location) => location.locationId === payload.id) + 1)
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(updateLocationDataArrayViaApi.fulfilled, (state, action: IUpdatedLocationData): void => {
            state.locationDataArray = action.payload;
        })
    }
})

export const {addLocationInputDataToState ,getLocationFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray
export const locationDataPageArray = (state: ILocationDataReducer): Array<ILocationData>  => state.locationData.locationDataPageArray

export default locationDataSlice.reducer