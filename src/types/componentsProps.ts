import {ILocationImg} from "./reduxData";

export interface ILocation {
    locationId?: string,
    locationName?: string,
    locationTemp?: string,
    locationDesc?: string,
    locationIcon?: string,
    locationPicture?: Array<ILocationImg>,
    locationPictureIndex?: string,
}

export interface ILocationPicture {
    locationPicture?: Array<ILocationImg>,
}

export interface ILocationHeading {
    locationId?: string,
    locationName?: string
    locationPictureIndex?: string,
}
