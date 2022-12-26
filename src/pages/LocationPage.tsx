import {useEffect, useState} from "react";

import {useParams, useNavigate, NavigateFunction} from "react-router-dom";

import Slider from "react-slick";

import {useDispatch, useSelector} from "react-redux";
import {locationDataPage as reduxLocationDataPage} from "../redux/locationDataSlice";
import {filterLocationDataArrayViaParams, editLocationImage} from "../redux/locationDataSlice";

import {AnyAction, Dispatch} from "@reduxjs/toolkit";

import {ILocationData, ILocationImagesURLs} from "../types/commonTypes";
import {ISettings} from "../types/sliderTypes";

const LocationPage = (): JSX.Element => {

    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();

    const navigate: NavigateFunction = useNavigate();
    
    const dispatch: Dispatch<AnyAction> = useDispatch();
    
    const locationDataPage: ILocationData = useSelector(reduxLocationDataPage);

    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));

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

    const settings: ISettings = {
        beforeChange: (current: number, next: number): void => setCurrSlide(next),
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: parseInt(params.locationImageIndex as string),
    };

    return (
      <div style={{color: `white`, fontSize: `20px`}}>

          <button onClick={returnToMain}>BACK</button>

          <div style={{width: `600px`,backgroundColor: `black`, margin: `0 auto`}}>
              <h2>Center Mode</h2>

              <Slider {...settings}>
              {locationDataPage.locationImages && locationDataPage.locationImages.map((imgURL: ILocationImagesURLs, index: number) =>
                  <div key={index} ><img src={imgURL.largeImageURL} alt="" style={{width: `100%`, height: `400px`, objectFit: `cover`,}}/></div>
              )}
              </Slider>
          </div>

          <div>{locationDataPage.locationName}</div>
          <p>Temp: {locationDataPage.locationTemp}°C</p>
          <p>Conditions: {locationDataPage.locationDesc}<img src={locationDataPage.locationIcon} alt="weather icon" /></p>
      </div>
  );
};

export default LocationPage;

