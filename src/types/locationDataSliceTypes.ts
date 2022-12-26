import {ILocationData} from "./commonTypes";

export interface ILocationDataArray {
    locationDataArray: Array<ILocationData>,
    locationDataPage: ILocationData
    locationDataLoader: boolean,
    locationNotFoundError: boolean;
}

export interface ILocationInputData {
    locationId: string,
    locationInput: string,
    locationImageIndex: string,
}

export interface ILocationParamsData {
    locationId?: string,
    locationName?: string,
    locationImageIndex?: string,
}

export interface ILocationEditData{
    currLocationSlide: string,
    currLocationId?: string
}