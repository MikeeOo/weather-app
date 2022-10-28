import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_API, WEATHER_API_KEY, PICTURE_API, PICTURE_API_KEY} from "./constants";

export const getLocationDataFromAPI = createAsyncThunk(
    'locationData/getLocationDataFromAPI',
    async (city: string) => {
        return Promise.allSettled([
            (await fetch(`${WEATHER_API}weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
            (await fetch(`${PICTURE_API}?key=${PICTURE_API_KEY}&q=${city}`)).json()
        ])
    }
)