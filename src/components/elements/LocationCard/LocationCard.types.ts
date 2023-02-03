import {ILocationImagesURLs} from "../../../types/common.types";

export interface ILocationCard {
    locationId?: string;
    locationName?: string;
    locationTemp?: string;
    locationDesc?: string;
    locationIcon?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex?: string;
}