
export interface ILocationDataReducer {
    locationData: ILocationDataArray
}

export interface ILocationDataArray {
    locationDataArray: Array<ILocationData>,
    locationDataPage: ILocationData
    loader: boolean,
    notFoundError: boolean;
}

export interface ILocationData {
    locationId?: string,
    locationInput?: string,
    locationName?: string,
    locationTemp?: string,
    locationDesc?: string,
    locationIcon?: string,
    locationPicture?: Array<ILocationImg>,
    locationPictureIndex?: string,
    requestCod?: string
}

export interface ILocationImg {
    largeImageURL: string
}