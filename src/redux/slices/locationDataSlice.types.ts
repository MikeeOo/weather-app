import {ILocationData} from "../../types/common.types";

export interface IApiOperationStatus{
    message: string,
    status: number
}

export interface ILocationDataState {
    locationDataArray: Array<ILocationData>;
    locationDataDetails: ILocationData;
    apiOperationStatus: IApiOperationStatus,
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

export enum OperationStatuses{
    idle = 0,
    update,
    add,
    delete,
    error
}