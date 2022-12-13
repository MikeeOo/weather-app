import {createSlice} from "@reduxjs/toolkit";
import {getLocationDataFromAPI} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData} from "../types/reduxData";
import {ApiData} from "../types/apiData";

const initialState: ILocationDataArray = {
    locationDataArray: [],
    locationDataPageArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        getLocationFromLocalStorage(state){

            state.locationDataArray = localStorage.getItem(`locationDataArray`) ? JSON.parse(localStorage.getItem(`locationDataArray`) as string) : [];
            // state.locationDataArray = JSON.parse(String(localStorage.getItem(`locationDataArray`)))
            // state.locationDataArray = JSON.parse(localStorage.getItem(`locationDataArray`) as string)
        },
        deleteLocationData(state, action){

            state.locationDataArray.splice(
                state.locationDataArray.findIndex(
                    (location) => location.locationId === action.payload
                )
            ,1);

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        },
        filterLocationDataArrayViaParams(state, {payload}){

            const localStorageDataArray: Array<ILocationData> = JSON.parse(localStorage.getItem(`locationDataArray`) as string)

            state.locationDataPageArray = localStorageDataArray.slice(
                localStorageDataArray.findIndex((location) => location.locationId === payload.id),
                localStorageDataArray.findIndex((location) => location.locationId === payload.id) + 1)
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(getLocationDataFromAPI.fulfilled, (state, action: ApiData): void => {

            state.locationDataArray.push({
                locationId: action.meta.requestId,
                locationName: action.payload[0].value.name,
                locationTemp: Math.round(parseFloat(action.payload[0].value.main.temp.toFixed(1))).toString(),
                locationDesc: action.payload[0].value.weather[0].description,
                locationIcon: action.payload[0].value.weather[0].icon,
                locationPicture: action.payload[1].value.hits
                    [Math.floor(Math.random() * action.payload[1].value.hits.length)].largeImageURL,
            })

            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        })
    }
})

export const {getLocationFromLocalStorage, deleteLocationData, filterLocationDataArrayViaParams} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray
export const locationDataPageArray = (state: ILocationDataReducer): Array<ILocationData>  => state.locationData.locationDataPageArray

export default locationDataSlice.reducer