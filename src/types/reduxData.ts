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