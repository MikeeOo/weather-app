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

            if(locationApiRequest[0].value.cod === "404"){
                updatedLocationDataArray.push({
                    requestCod: locationApiRequest[0].value.cod.toString()
                })
            }
            else{
                updatedLocationDataArray.push({
                    locationId: locationData.locationId,
                    locationInput: locationData.locationInput,
                    locationName: locationApiRequest[0].value.name,
                    locationTemp: Math.round(parseFloat(locationApiRequest[0].value.main.temp.toFixed(1))).toString(),
                    locationDesc: locationApiRequest[0].value.weather[0].description,
                    locationIcon: `https://openweathermap.org/img/wn/${locationApiRequest[0].value.weather[0].icon}@2x.png`,
                    // locationPicture: locationApiRequest[1].value.hits[Math.floor(Math.random() * locationApiRequest[1].value.hits.length)].largeImageURL,
                    locationPicture: locationApiRequest[1].value.hits[2].largeImageURL,
                    requestCod: locationApiRequest[0].value.cod.toString()
                });
            }


        }


        return updatedLocationDataArray;
    }
);