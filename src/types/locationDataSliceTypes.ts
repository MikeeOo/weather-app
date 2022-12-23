import {ILocationData} from "./commonTypes";

export interface ILocationDataReducer {
    locationData: ILocationDataArray
}

export interface ILocationDataArray {
    locationDataArray: Array<ILocationData>,
    locationDataPage: ILocationData
    locationDataLoader: boolean,
    locationNotFoundError: boolean;
}