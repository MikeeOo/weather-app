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
        builder.addCase(getLocationDataFromAPI.fulfilled, (state, {meta, payload}) => {
            // if(data[0].value.cod !== "404")

            state.locationDataArray.push({

                locationId: meta.requestId,
                locationName: payload[0].value.name,
                locationTemp: payload[0].value.main.temp,
                locationDesc: payload[0].value.weather[0].description,
                locationIcon: payload[0].value.weather[0].icon,
                locationPicture: payload[1].value.hits[Math.floor(Math.random() * payload[1].value.hits.length)].largeImageURL,
            })
        })
    }

})

// export const {} = locationDataSlice.actions

export const locationDataArray = (state: ILocationDataReducer): Array<any> => state.locationData.locationDataArray

export default locationDataSlice.reducer