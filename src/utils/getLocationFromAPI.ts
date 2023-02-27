import {IImagesData, IImagesResponse, IWeatherData, IWeatherResponse} from "../redux/api/thunks.types";
import {IMAGE_API, IMAGE_API_KEY, WEATHER_API, WEATHER_API_KEY} from "../redux/api/constants";
import {ILocationData} from "../types/common.types";

const getLocationFromAPI = async (locationData: ILocationData): Promise<ILocationData> => {
    const locationApiRequest: [IWeatherResponse, IImagesResponse] = await Promise.allSettled([
        (await fetch(`${WEATHER_API}weather?q=${locationData.locationInput}&appid=${WEATHER_API_KEY}&units=metric`)).json(),
        (await fetch(`${IMAGE_API}?key=${IMAGE_API_KEY}&q=${locationData.locationInput}`)).json()
    ]) as [
        {status: 'fulfilled' | 'rejected', value: IWeatherData},
        {status: 'fulfilled' | 'rejected', value: IImagesData}
    ];

    if(locationApiRequest[0].value.cod === "404"){
        return {
            locationRequestCod: locationApiRequest[0].value.cod
        };
    }

    return {
        locationId: locationData.locationId,
        locationInput: locationData.locationInput,
        locationName: locationApiRequest[0].value.name,
        locationTemp: Math.round(parseFloat(locationApiRequest[0].value.main.temp.toFixed(1))).toString(),
        locationDesc: locationApiRequest[0].value.weather[0].description,
        locationIcon: `https://openweathermap.org/img/wn/${locationApiRequest[0].value.weather[0].icon}@2x.png`,
        locationImages: locationApiRequest[1].value.hits,
        locationImageIndex: "0",
        locationRequestCod: locationApiRequest[0].value.cod.toString()
    };
}

export default getLocationFromAPI;