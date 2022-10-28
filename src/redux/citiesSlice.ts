import {createSlice} from "@reduxjs/toolkit";
import {getCitiesDataFromAPI} from "../api/thunks";
import {ICities, ICitiesReducer} from "../ts/types";

const initialState: ICities = {
    citiesData: []
}

const citiesSlice = createSlice({
    name: 'cities',
    initialState,
    reducers: {

    },
    extraReducers: builder => {
        builder.addCase(getCitiesDataFromAPI.fulfilled, (state, {payload}) => {
            state.citiesData.push(payload)
            console.log(payload)
        })
    }

})

// export const {} = citiesSlice.actions

export const citiesData = (state: ICitiesReducer): Array<object> => state.cities.citiesData

export default citiesSlice.reducer