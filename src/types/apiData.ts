import {ILocationData} from "./reduxData";

export interface IUpdatedLocationData {
    type: string,
    payload: Array<ILocationData>
    meta: IMeta,
}

//____________IWeatherPayload____________//
export interface IWeatherPayload {
    status: string,
    value: IWeatherData;
}

export interface IWeatherData {
    name: string
    cod: number | string,
    main: IWeatherMain
    weather: Array<IWeatherWeather>
}

interface IWeatherMain {
    temp: number
}

interface IWeatherWeather {
    description: string,
    icon: string,
}
//____________IPicturePayload____________//
export interface IPicturePayload {
    status: string,
    value: IPictureData,
}

export interface IPictureData {
    hits: Array<IPicture>
}

interface IPicture {
    largeImageURL: string
}
//________IMeta________//
interface IMeta {
    arg: Array<ILocationData>,
    requestId: string,
    requestStatus: string,
}