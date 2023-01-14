import {ILocationImagesURLs} from "../../types/common.types";

export interface ILocationCardAction {
    locationId?: string;
    locationName?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex? : string;
}