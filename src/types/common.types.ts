export interface ILocationData {
    locationId?: string,
    locationInput?: string,
    locationName?: string,
    locationTemp?: string,
    locationDesc?: string,
    locationIcon?: string,
    locationImages?: Array<ILocationImagesURLs>,
    locationImageIndex?: string,
    locationRequestCod?: string
}

export interface ILocationImagesURLs {
    largeImageURL: string
}