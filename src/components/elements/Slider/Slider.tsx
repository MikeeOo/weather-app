import {MutableRefObject, useRef} from "react";

import {useParams} from "react-router-dom";
import SlickSlider from "react-slick";
import {BsChevronLeft, BsChevronRight} from "react-icons/bs";

import {IDetails, ILocationImagesURLs} from "../../../types/common.types";
import {ISliderSettings} from "./Slider.types";
import {useAppSelector} from "../../../redux/store";
import {SliderButtonNextStyled, SliderButtonPrevStyled, SliderStyled} from "./Slider.styled";
import Img from "../../blocks/Img";
import ErrImg from "../../atoms/ErrImg";

const Slider = ({setCurrSlide}: IDetails): JSX.Element => {
    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();
    const slider: MutableRefObject<SlickSlider | null> = useRef(null);
    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

    const sliderSettings: ISliderSettings = {
        beforeChange: (current: number, next: number): void => setCurrSlide(next),
        infinite: true,
        speed: 400,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows : false,
        initialSlide: parseInt(params.locationImageIndex as string)
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