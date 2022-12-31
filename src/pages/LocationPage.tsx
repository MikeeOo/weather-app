import {useEffect, useState, useRef, MutableRefObject} from "react";

import {useParams, useNavigate, NavigateFunction} from "react-router-dom";

import SlickSlider from "react-slick";

import {useAppDispatch, useAppSelector} from "../redux/store";
import {filterLocationDataArrayViaParams, editLocationImage} from "../redux/locationDataSlice";

import {ILocationImagesURLs} from "../types/commonTypes";
import {ISettings} from "../types/sliderTypes";

import ChevronRightSvg from "../components/atoms/svg/ChevronRightSvg";
import ChevronLeftSvg from "../components/atoms/svg/ChevronLeftSvg";

import styled from "styled-components";
import {sliderButtonsStyles} from "../styles/mixins";

const LocationPage = (): JSX.Element => {

    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();

    const navigate: NavigateFunction = useNavigate();

    const dispatch = useAppDispatch();

    const locationDataPage = useAppSelector(state  => state.locationData.locationDataPage);

    const slider: MutableRefObject<SlickSlider | null> = useRef(null);

    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));

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

    useEffect((): void => {
        dispatch(filterLocationDataArrayViaParams(params));
    },[]);

    const returnToMain = (): void => {

        dispatch(editLocationImage({
            currLocationSlide: currSlide.toString(),
            currLocationId: params.locationId
        }));

        navigate("/");
    };

  return (
      <LocationPageStyled>

          <button onClick={returnToMain}>BACK</button>

          <SliderStyled>

              <SlickSlider ref={slider} {...settings}>

                  {locationDataPage.locationImages && locationDataPage.locationImages.map((imgURL: ILocationImagesURLs, index: number) =>
                      <div key={index} ><img src={imgURL.largeImageURL} alt="" style={{width: `100%`, height: `230px`, objectFit: `cover`}}/></div>)}
              </SlickSlider>

              <SliderButtonNextStyled onClick={() => slider?.current?.slickNext()}><ChevronRightSvg/></SliderButtonNextStyled>
              <SliderButtonPrevStyled onClick={() => slider?.current?.slickPrev()}><ChevronLeftSvg/></SliderButtonPrevStyled>
          </SliderStyled>

          <div>{locationDataPage.locationName}</div>
          <p>Temp: {locationDataPage.locationTemp}°C</p>
          <p>Conditions: {locationDataPage.locationDesc}<img src={locationDataPage.locationIcon} alt="weather icon" /></p>
      </LocationPageStyled>
  );
};

export default LocationPage;

export const LocationPageStyled = styled.div`
  color: white;
  font-size: 20px;
  max-width: 375px;
  background-color: ${({theme}) => theme.color.log};
  margin: 0 auto;
  position: relative;
`

const SliderStyled = styled.div`
  position: relative;
`

export const SliderButtonNextStyled = styled.button`
  ${sliderButtonsStyles};
  right: 0;
  border-radius: 50% 0 0 50%;

`

export const SliderButtonPrevStyled = styled.button`
  ${sliderButtonsStyles};
  border-radius: 0 50% 50% 0;
`