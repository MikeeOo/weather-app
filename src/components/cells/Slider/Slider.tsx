import SlickSlider from "react-slick";
import {IDetails, ILocationImagesURLs} from "../../../types/common.types";
import {MutableRefObject, useRef} from "react";
import {useAppSelector} from "../../../redux/store";
import {ISliderSettings} from "./Slider.types";
import { SliderButtonNextStyled, SliderButtonPrevStyled } from "./Slider.styled";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
          <SlickSlider ref={slider} {...sliderSettings}>

              {locationDataDetails.locationImages && locationDataDetails.locationImages.map((imgURL: ILocationImagesURLs, index: number) =>
                  <div key={index} ><img src={imgURL.largeImageURL} alt="" style={{width: `100%`, height: `230px`, objectFit: `cover`, borderRadius: "1rem"}}/></div>)}
          </SlickSlider>

          <SliderButtonNextStyled onClick={() => slider?.current?.slickNext()}><BsChevronRight/></SliderButtonNextStyled>
          <SliderButtonPrevStyled onClick={() => slider?.current?.slickPrev()}><BsChevronLeft/></SliderButtonPrevStyled>
      </>
  );
};

export default Slider;