import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_API, WEATHER_API_KEY, PICTURE_API, PICTURE_API_KEY} from "./constants";
import {IWeatherPayload, IPicturePayload, IWeatherData, IPictureData} from "../types/apiData"

import {ILocationData} from "../types/reduxData";

export const updateLocationDataArrayViaApi = createAsyncThunk(
    'locationData/updateLocationDataArrayViaApi',
    async (locationDataArray: Array<ILocationData>): Promise<Array<ILocationData>> => {

        const updatedLocationDataArray: Array<ILocationData> = [];

        for(const locationData  of locationDataArray){

            const locationApiRequest: [IWeatherPayload, IPicturePayload] = await Promise.allSettled([
                (await fetch(`${WEATHER_API}weather?q=${locationData.locationInput}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
                (await fetch(`${PICTURE_API}?key=${PICTURE_API_KEY}&q=${locationData.locationInput}`)).json()
            ]) as [
                {status: 'fulfilled' | 'rejected', value: IWeatherData},
                {status: 'fulfilled' | 'rejected', value: IPictureData}
            ]

            updatedLocationDataArray.push({
                locationId: locationData.locationId,
                locationInput: locationData.locationInput,
                locationName: locationApiRequest[0].value.cod !== `404` ? locationApiRequest[0].value.name : `location not found`,
                locationTemp: locationApiRequest[0].value.cod !== `404` ? Math.round(parseFloat(locationApiRequest[0].value.main.temp.toFixed(1))).toString() : `location not found`,
                locationDesc: locationApiRequest[0].value.cod !== `404` ? locationApiRequest[0].value.weather[0].description : `location not found`,
                locationIcon: locationApiRequest[0].value.cod !== `404` ? `https://openweathermap.org/img/wn/${locationApiRequest[0].value.weather[0].icon}@2x.png` : `location not found`,
                // locationPicture: locationApiRequest[1].value.hits[Math.floor(Math.random() * locationApiRequest[1].value.hits.length)].largeImageURL,
                locationPicture: locationApiRequest[0].value.cod !== `404` ? locationApiRequest[1].value.hits[2].largeImageURL : `location not found`,
                requestCod: locationApiRequest[0].value.cod.toString()
            });
        }


        return updatedLocationDataArray;
    }
);