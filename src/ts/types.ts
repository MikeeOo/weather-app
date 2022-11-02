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

// export interface IPayload{
//     status: string,
//     value: any
// }

//
// export interface IWeatherData{
//     name: string,
//     main: any,
//     weather: any
// }

export interface IMeta {
    arg: string,
    requestId: string,
    requestStatus: string,
}