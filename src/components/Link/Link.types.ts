import {ILocationImagesURLs} from "../../types/common.types";

export interface ILink {
    locationId?: string;
    locationName?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex? : string;
}