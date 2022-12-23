export interface ISettings {
    beforeChange: (current: number, next: number) => void,
    dots: boolean,
    infinite: boolean,
    speed: number,
    slidesToShow: number,
    slidesToScroll: number,
    initialSlide: number,
}