import {MutableRefObject, useRef} from "react";

import Img from "../../blocks/Img";
import ErrImg from "../../atoms/ErrImg";

import {useAppSelector} from "../../../redux/store";

import SlickSlider from "react-slick";

import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

import {IDetails, ILocationImagesURLs} from "../../../types/common.types";
import {ISliderSettings} from "./Slider.types";

import {SliderButtonNextStyled, SliderButtonPrevStyled, SliderStyled} from "./Slider.styled";

const Slider = ({params, setCurrSlide}: IDetails): JSX.Element => {
    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);
    const slider: MutableRefObject<SlickSlider | null> = useRef(null);

    const sliderSettings: ISliderSettings = {
        beforeChange: (current: number, next: number): void => setCurrSlide(next),
        infinite: true,
        speed: 400,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        initialSlide: parseInt(params.locationImageIndex as string),
    };

    return (
        <>
            {locationDataDetails.locationImages?.length
                ?
                <SliderStyled>
                    <SlickSlider ref={slider} {...sliderSettings}>
                        {locationDataDetails.locationImages && locationDataDetails.locationImages.map((imgURL: ILocationImagesURLs, index: number) =>
                            <div key={index}><Img sliderImgStyled src={imgURL.largeImageURL} alt="one of location images"/></div>)}
                    </SlickSlider>
                    <SliderButtonNextStyled onClick={() => slider?.current?.slickNext()}><BsChevronRight/></SliderButtonNextStyled>
                    <SliderButtonPrevStyled onClick={() => slider?.current?.slickPrev()}><BsChevronLeft/></SliderButtonPrevStyled>
                </SliderStyled>
                :
                <ErrImg errorBorder fontSize={"3rem"}/>}
        </>
    );
};

export default Slider;