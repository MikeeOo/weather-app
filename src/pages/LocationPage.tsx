import React, {useEffect, useState} from "react";
import {useParams, Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    locationDataPage as reduxLocationDataPage,
    filterLocationDataArrayViaParams,
    editLocationPicture, locationDataArray as reduxLocationDataArray,
} from "../redux/locationDataSlice";
import Slider from "react-slick";
import {updateLocationDataArrayViaApi} from "../api/thunks";
import {ILocationData} from "../types/reduxData";

const LocationPage = (): JSX.Element => {


    const params = useParams()

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const locationDataArray: Array<ILocationData> = useSelector(reduxLocationDataArray)


    const locationDataPage = useSelector(reduxLocationDataPage)

    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationPictureIndex))

    const [initialSlide, setInitialSlide] = useState<number>(0)

    useEffect(() => {
        dispatch(filterLocationDataArrayViaParams(params))

        // setInitialSlide(params.locationPictureIndex)
    },[])


    // console.log(locationDataPage.locationPicture)
    // console.log(currSlide)

    const returnToMain = () => {


        dispatch(editLocationPicture({
            currLocationSlide: currSlide,
            currLocationId: params.id
        }))
        // dispatch(updateLocationDataArrayViaApi({
        //     locationDataArray: locationDataArray,
        //     id: currSlide
        // }))
        navigate("/");
    }

    const settings = {
        "beforeChange": (current: number, next: number): void => setCurrSlide(next),
        // beforeChange: (current: number, next: number): void => setCurrSlide(next),
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: parseInt(params.locationPictureIndex),
    };

    console.log(currSlide)
    return (
      <div style={{color: `white`, fontSize: `20px`}}>

          <button onClick={returnToMain}>BACK</button>


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

