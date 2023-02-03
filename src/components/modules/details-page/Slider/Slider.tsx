import SlickSlider from "react-slick";
import {ILocationImagesURLs} from "../../../../types/common.types";
import ChevronRightSvg from "../../../00/svg/ChevronRightSvg";
import ChevronLeftSvg from "../../../00/svg/ChevronLeftSvg";
import { SliderStyled } from "./Slider.styled";
import styled from "styled-components";
import {sliderButtonsStyles} from "../../../../styles/mixins";
import {MutableRefObject, useRef} from "react";
import {useAppSelector} from "../../../../redux/store";
import {ISettings, ISlider} from "./Slider.types";

const Slider = ({params, setCurrSlide}: ISlider): JSX.Element => {

    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

    const slider: MutableRefObject<SlickSlider | null> = useRef(null);

    const settings: ISettings = {
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
      <SliderStyled>

          <SlickSlider ref={slider} {...settings}>

              {locationDataDetails.locationImages && locationDataDetails.locationImages.map((imgURL: ILocationImagesURLs, index: number) =>
                  <div key={index} ><img src={imgURL.largeImageURL} alt="" style={{width: `100%`, height: `230px`, objectFit: `cover`, borderRadius: "1rem"}}/></div>)}
          </SlickSlider>

          <SliderButtonNextStyled onClick={() => slider?.current?.slickNext()}><ChevronRightSvg/></SliderButtonNextStyled>
          <SliderButtonPrevStyled onClick={() => slider?.current?.slickPrev()}><ChevronLeftSvg/></SliderButtonPrevStyled>
      </SliderStyled>
  );
};

export default Slider;

const SliderButtonNextStyled = styled.button`
  ${sliderButtonsStyles};
  right: 0;
  border-radius: 50% 0 0 50%;
`;

const SliderButtonPrevStyled = styled.button`
  ${sliderButtonsStyles};
  border-radius: 0 50% 50% 0;
`