import {Dispatch, SetStateAction} from "react";

export interface ISlider {
    params: Readonly<Partial<Record<string, string | undefined>>>;
    setCurrSlide: Dispatch<SetStateAction<number>>;
}

export interface ISettings {
    beforeChange: (current: number, next: number) => void,
    infinite: boolean,
    speed: number,
    fade: boolean,
    slidesToShow: number,
    slidesToScroll: number,
    arrows : boolean,
    initialSlide: number,
}