import {ILocationData} from "../../types/common.types";

export interface ILocationRequestState{
    message: string;
    status: number;
}

export interface ILocationDataState {
    locationDataArray: Array<ILocationData>;
    locationDataDetails: ILocationData;
    locationDeleteModal: ILocationDeleteModal;
    locationRequestState: ILocationRequestState;
}

export interface ILocationDeleteModal {
    showModal?: boolean;
    locationDeleteId?: string;
    locationDeleteName?: string;
}

export interface ILocationParamsData {
    locationId?: string;
    locationName?: string;
    locationImageIndex?: string;
}

export interface ILocationEditData {
    currLocationSlide: string;
    currLocationId?: string;
}