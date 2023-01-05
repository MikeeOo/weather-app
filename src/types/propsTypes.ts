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
    locationId?: string,
    locationName?: string,
    locationImages?: Array<ILocationImagesURLs>,
    locationImageIndex? : string

}

export interface ILocationHeader {
    locationId?: string,
    locationName?: string
    locationImageIndex?: string,
}
export interface ILocationWeather {
    locationTemp?: string,
    locationDesc?: string
    locationIcon?: string,
}