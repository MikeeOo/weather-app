import {ILocationData, ILocationImagesURLs} from "./commonTypes";
import {store} from "../redux/store";
import {ChangeEvent, Dispatch, SetStateAction, SyntheticEvent} from "react";

export interface ILocation {
    locationId?: string;
    locationName?: string;
    locationTemp?: string;
    locationDesc?: string;
    locationIcon?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex?: string;
}

export interface ILocationImage {
    locationId?: string;
    locationName?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex? : string;
}

export interface ILocationHeader {
    locationId?: string;
    locationName?: string;
    locationImageIndex?: string;
}
export interface ILocationCardWeather {
    locationTemp?: string;
    locationDesc?: string;
    locationIcon?: string;
}

export interface IWeatherIcon {
    locationIcon?: string;
}

export interface IWeatherInfo {
    locationTemp?: string;
    locationDesc?: string;
}

export interface ILocationTemp {
    locationTemp?: string;
}

export interface ILocationDesc {
    locationDesc?: string;
}

export interface IMainSearch {
    dispatch: typeof store.dispatch;
    locationNotFoundError: boolean;
    locationInput: string;
    setLocationInput: Dispatch<SetStateAction<string>>;
    locationInputTooShort: boolean;
    setLocationInputTooShort: Dispatch<SetStateAction<boolean>>;
    locationDataArray: Array<ILocationData>;
    locationDataLoader: boolean;
}

export interface IMainDisplay {
    dispatch: typeof store.dispatch;
    locationDataArray: Array<ILocationData>;
    locationDataLoader: boolean;
}

export interface IButton {
    children: JSX.Element;
    fontSize: string;
    borderRadius: string;
    padding: string;
}

export interface IInput {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    onClick: () => {payload: undefined; type: string;};
    errorColor: string | boolean;
}

export interface IForm {
    children: Array<JSX.Element>;
    onSubmit: (e: SyntheticEvent) => void;
}

export interface IGuide {
    guideStatus: string;
    errorColor: string | boolean;
}