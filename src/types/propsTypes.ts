import {ILocationImagesURLs} from "./commonTypes";

export interface ILocation {
    locationId?: string,
    locationName?: string,
    locationTemp?: string,
    locationDesc?: string,
    locationIcon?: string,
    locationImages?: Array<ILocationImagesURLs>,
    locationImageIndex?: string,
}

export interface ILocationImage {
    locationImages?: Array<ILocationImagesURLs>,
    locationImageIndex? : string

}

export interface ILocationName {
    locationId?: string,
    locationName?: string
    locationImageIndex?: string,
}