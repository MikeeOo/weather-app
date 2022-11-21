import {createSlice} from "@reduxjs/toolkit";
import {getLocationDataFromAPI} from "../api/thunks";


const initialState = {
    locationDataArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {
        addLocationName(state, {payload}: any){
            state.locationDataArray.push(payload as never)
            localStorage.setItem(`locationDataArray`, JSON.stringify(state.locationDataArray));
        }
    },
    extraReducers: (builder => {
        builder.addCase(getLocationDataFromAPI.fulfilled, (state, action) => {

            // const locationIndex = state.locationDataArray.findIndex(location =>
            //         console.log(location)
            //     // location.locationId === action.payload[2].locationId
            // )

            console.log(state.locationDataArray)

            // state.locationDataArray[locationIndex].locationTemp = action.payload[0].value.name
        })
    })
})

export const {addLocationName} = locationDataSlice.actions

export const locationDataArray = (state: any) => state.locationData.locationDataArray

export default locationDataSlice.reducer