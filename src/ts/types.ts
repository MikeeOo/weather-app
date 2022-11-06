export interface ILocationDataReducer {
    locationData: ILocationDataArray
}

export interface ILocationDataArray {
    locationDataArray: Array<ILocationData>
}

export interface ILocationData {
    locationId: string,
    locationName: string,
    locationTemp: number,
    locationDesc: string,
    locationIcon: string,
    locationPicture: string
}

export interface ILocationDataProps {
    locationName: string,
    locationTemp: number,
    locationDesc: string,
    locationIcon: string,
    locationPicture: string
}

export interface IAction {
    type: string,
    payload: Array<IPayload>,
    meta: IMeta,
}

export interface IPayload {
    status: string,
    // value?: IWeatherData & IPictureData
    value?: any
    reason?: string
}

export interface IWeatherData{
    name: string
    main: IWeatherMain
    weather: Array<IWeatherWeather>
}

export interface IWeatherMain{
    temp: number
}

export interface IWeatherWeather{
    description: string,
    icon: string,
}

interface IPictureData{
    hits: Array<IPicture>
}

interface IPicture{
    largeImageURL: string
}

interface IMeta {
    arg: string,
    requestId: string,
    requestStatus: string,
}
