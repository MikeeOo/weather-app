import {createAsyncThunk} from "@reduxjs/toolkit";
import {WEATHER_API, WEATHER_API_KEY, IMAGE_API, IMAGE_API_KEY} from "./constants";
import {ILocationData} from "../../types/common.types";
import {IWeatherResponse, IImagesResponse, IWeatherData, IImagesData} from "./thunks.types";

export const updateLocationDataArrayViaApi = createAsyncThunk(
    'locationData/updateLocationDataArrayViaApi',
    async (locationDataArray: Array<ILocationData>): Promise<Array<ILocationData>> => {

        const updatedLocationDataArray: Array<ILocationData> = [];

        for(const locationData  of locationDataArray){

            const locationApiRequest: [IWeatherResponse, IImagesResponse] = await Promise.allSettled([
                (await fetch(`${WEATHER_API}weather?q=${locationData.locationInput}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
                (await fetch(`${IMAGE_API}?key=${IMAGE_API_KEY}&q=${locationData.locationInput}`)).json()
            ]) as [
                {status: 'fulfilled' | 'rejected', value: IWeatherData},
                {status: 'fulfilled' | 'rejected', value: IImagesData}
            ];

            if(locationApiRequest[0].value.cod === "404"){
                updatedLocationDataArray.push({
                    locationRequestCod: locationApiRequest[0].value.cod
                });
            }
            else{
                updatedLocationDataArray.push({
                    locationId: locationData.locationId,
                    locationInput: locationData.locationInput,
                    locationName: locationApiRequest[0].value.name,
                    locationTemp: Math.round(parseFloat(locationApiRequest[0].value.main.temp.toFixed(1))).toString(),
                    locationDesc: locationApiRequest[0].value.weather[0].description,
                    locationIcon: `https://openweathermap.org/img/wn/${locationApiRequest[0].value.weather[0].icon}@2x.png`,
                    locationImages: locationApiRequest[1].value.hits,
                    locationImageIndex: locationData.locationImageIndex !== "0" ? locationData.locationImageIndex : "0",
                    locationRequestCod: locationApiRequest[0].value.cod.toString()
                });
            }
        }

        return updatedLocationDataArray;
    }
);