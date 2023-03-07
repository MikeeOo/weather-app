import {Dispatch, SetStateAction} from "react";

export interface ILocationData {
    locationId?: string;
    locationInput?: string;
    locationName?: string;
    locationTemp?: string;
    locationDesc?: string;
    locationIcon?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex?: string;
    locationRequestCod?: string;
}

export interface ILocationImagesURLs {
    largeImageURL: string;
}

export interface IDetails {
    setCurrSlide: Dispatch<SetStateAction<number>>;
}

export enum RequestStatus {
    idle ,
    update,
    add,
    delete,
    error
}