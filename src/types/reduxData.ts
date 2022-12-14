
export interface ILocationDataReducer {
    locationData: ILocationDataArray
}

export interface ILocationDataArray {
    locationDataArray: Array<ILocationData>,
    locationDataPageArray: Array<ILocationData>
}

export interface ILocationData {
    locationId: string,
    locationInput: string,
    locationName: string,
    locationTemp: string,
    locationDesc: string,
    locationIcon: string,
    locationPicture: string
}