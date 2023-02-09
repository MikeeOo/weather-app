import {ILocationData} from "../../types/common.types";

export interface ILocationDataState {
    locationDataArray: Array<ILocationData>;
    locationDataDetails: ILocationData;
    locationDataLoader: boolean;
    locationLastDuplicate: string | undefined;
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