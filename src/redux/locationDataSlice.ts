import {createSlice} from "@reduxjs/toolkit";
import {getLocationDataFromAPI} from "../api/thunks";
import {ILocationDataReducer, ILocationDataArray} from "../ts/types";

const initialState: ILocationDataArray = {
    locationDataArray: []
}

const locationDataSlice = createSlice({
    name: 'locationData',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getLocationDataFromAPI.fulfilled, (state, {payload}) => {
            state.locationDataArray.push(payload)
            // console.log(payload)
        })
    }

})

// export const {} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<object> => state.locationData.locationDataArray

export default locationDataSlice.reducer