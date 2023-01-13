import {ILocationData} from "./commonTypes";

export interface ILocationDataState {
    locationDataArray: Array<ILocationData>;
    locationDataDetails: ILocationData;
    locationDataLoader: boolean;
    locationNotFoundError: boolean;
    locationDuplicateError: boolean;
}

export interface ILocationInputData {
    locationId: string;
    locationInput: string;
    locationImageIndex: string;
}

export interface ILocationParamsData {
    locationId?: string;
    locationName?: string;
    locationImageIndex?: string;
}

export interface ILocationEditData{
    currLocationSlide: string;
    currLocationId?: string;
}