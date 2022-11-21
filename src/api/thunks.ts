import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_API, WEATHER_API_KEY, PICTURE_API, PICTURE_API_KEY} from "./constants";
import {IWeatherPayload, IPicturePayload, IWeatherData, IPictureData} from "../types/apiData"

export const getLocationDataFromAPI = createAsyncThunk(
    'locationData/getLocationDataFromAPI',
    async (props: any) => {
        return await Promise.allSettled([
            (await fetch(`${WEATHER_API}weather?q=${props.locationInput}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
            (await fetch(`${PICTURE_API}?key=${PICTURE_API_KEY}&q=${props.locationInput}`)).json(),
            props
        ])
    }
)