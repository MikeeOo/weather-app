import {createSlice} from "@reduxjs/toolkit";
import {getLocationDataFromAPI} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray, ILocationData, IAction} from "../ts/types";

const initialState: ILocationDataArray = {
    locationDataArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        getLocationFromLocalStorage(state){
            state.locationDataArray = JSON.parse(localStorage.getItem(`locationDataArray`))
        },
        deleteLocationData(state, action){

            state.locationDataArray.splice(
                state.locationDataArray.indexOf(
                    state.locationDataArray.find(
                        (location) => location.locationId === action.payload
                    )
                )
            ,1);
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        }
    },
    extraReducers: (builder): void => {
        builder.addCase(getLocationDataFromAPI.fulfilled, (state, action: IAction): void => {
            // console.log(state)
            // console.log(action.meta)
            // console.log(action.payload)

            state.locationDataArray.push({
                locationId: action.meta.requestId,
                locationName: action.payload[0].value.name,
                locationTemp: action.payload[0].value.main.temp,
                locationDesc: action.payload[0].value.weather[0].description,
                locationIcon: action.payload[0].value.weather[0].icon,
                locationPicture: action.payload[1].value.hits
                    [Math.floor(Math.random() * action.payload[1].value.hits.length)].largeImageURL,
            })
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        })
    }

})

export const {getLocationFromLocalStorage, deleteLocationData} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<ILocationData> => state.locationData.locationDataArray

export default locationDataSlice.reducer