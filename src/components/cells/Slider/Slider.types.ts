export interface ISliderSettings {
    beforeChange: (current: number, next: number) => void,
    infinite: boolean,
    speed: number,
    fade: boolean,
    slidesToShow: number,
    slidesToScroll: number,
    arrows : boolean,
    initialSlide: number,
}