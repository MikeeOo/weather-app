import {createSlice} from "@reduxjs/toolkit";
import {updateLocationDataArrayViaApi} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData} from "../types/reduxData";
import {IUpdatedLocationData} from "../types/apiData";

const initialState: ILocationDataArray = {
    locationDataArray: [],
    locationDataPageArray: [],
    loader: false,
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        setLoader(state){
            state.loader = true;
        },

        addLocationInputDataToState(state, {payload}){
            state.locationDataArray.push(payload)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray))
        },

        // change this name!!!
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
            state.loader = false;
        })
    }
})

export const {setLoader, addLocationInputDataToState ,getLocationFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray
export const locationDataPageArray = (state: ILocationDataReducer): Array<ILocationData>  => state.locationData.locationDataPageArray
export const loader = (state: ILocationDataReducer): boolean => state.locationData.loader

export default locationDataSlice.reducer