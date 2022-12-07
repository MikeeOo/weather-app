import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_API, WEATHER_API_KEY, PICTURE_API, PICTURE_API_KEY} from "./constants";
// import {IWeatherPayload, IPicturePayload, IWeatherData, IPictureData} from "../types/apiData"

export const updateLocationDataViaApi = createAsyncThunk(
    'locationData/getLocationDataFromAPI',
    async (locationDataArray): Promise<void> => {
        const updatedLocationDataArray = [];


    }
)


// async (city: string): Promise<[IWeatherPayload, IPicturePayload]> => {
//     return await Promise.allSettled([
//         (await fetch(`${WEATHER_API}weather?q=${city}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
//         (await fetch(`${PICTURE_API}?key=${PICTURE_API_KEY}&q=${city}`)).json()
//     ]) as [
//         {status: 'fulfilled' | 'rejected', value: IWeatherData},
//         {status: 'fulfilled' | 'rejected', value: IPictureData}
//     ]
// }
// )
