export interface ILocationDataReducer {
    locationData: ILocationDataArray
}

export interface ILocationDataArray {
    locationDataArray: Array<any>
}

export interface ILocationData {
    value: IData
}

export interface IData {
    name: string
}