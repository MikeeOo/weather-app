import React, {useEffect, useState} from "react";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    locationDataPage as reduxLocationDataPage,
    filterLocationDataArrayViaParams,
} from "../redux/locationDataSlice";
import Slider from "react-slick";
import {current} from "@reduxjs/toolkit";


const LocationPage = (): JSX.Element => {

    const params = useParams()

    const dispatch = useDispatch()

    const locationDataPage = useSelector(reduxLocationDataPage)

    const [currSlide, setCurrSlide] = useState<number>(0)

    useEffect(() => {
        dispatch(filterLocationDataArrayViaParams(params))
    },[])

    console.log(locationDataPage.locationPicture)
    console.log(currSlide)

    const settings = {
        "beforeChange": (current: number, next: number): void => setCurrSlide(next),
        // beforeChange: (current: number, next: number): void => setCurrSlide(next),
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
      <div style={{color: `white`, fontSize: `20px`}}>

          <Link to="/">BACK</Link>


          <div style={{width: `600px`,backgroundColor: `black`, margin: `0 auto`}}>
              <h2>Center Mode</h2>

              <Slider {...settings}>
              {locationDataPage.locationPicture && locationDataPage.locationPicture.map((img, index) =>
                  <div key={index} ><img src={img.largeImageURL} alt="" style={{width: `100%`, height: `400px`, objectFit: `cover`,}}/></div>
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

