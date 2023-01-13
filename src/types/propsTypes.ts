import {ILocationData, ILocationImagesURLs} from "./commonTypes";
import {store} from "../redux/store";
import {ChangeEvent, Dispatch, MutableRefObject, SetStateAction, SyntheticEvent} from "react";
import SlickSlider from "react-slick";
import {ISettings} from "./sliderTypes";

export interface ILocation {
    dispatch: typeof store.dispatch;
    locationId?: string;
    locationName?: string;
    locationTemp?: string;
    locationDesc?: string;
    locationIcon?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex?: string;
}

export interface ILocationCardAction {
    dispatch: typeof store.dispatch;
    locationId?: string;
    locationName?: string;
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex? : string;
}

export interface ILink {
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

export interface ILocationImg {
    locationImages?: Array<ILocationImagesURLs>;
    locationImageIndex?: string;
}

export interface ILocationName {
    locationName?: string;
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
    children?: JSX.Element | Array<JSX.Element | string>;
    // onClick?: MouseEventHandler<HTMLButtonElement> & (() => { payload: string | undefined; type: string; });
    onClick?: () => void;
    fontSize: string;
    borderRadius?: string;
    padding: string;
    contrast?: boolean;
    imgPosition?: boolean;
}

export interface IInput {
    type: string;
    value: string;
    placeholder: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
    // onClick: () => {payload: undefined; type: string;};
    onClick: () => void;
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

export interface IThemeStatus {
    themeChangeStatus: string;
}

export interface ISlider {
    params: Readonly<Partial<Record<string, string | undefined>>>;
    setCurrSlide: Dispatch<SetStateAction<number>>;
    locationDataDetails: ILocationData
}

export interface IReturnToMain {
    dispatch: typeof store.dispatch;
    currSlide: number;
    params: Readonly<Partial<Record<string, string | undefined>>>;
}