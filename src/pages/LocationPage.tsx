import React, {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    locationDataPage as reduxLocationDataPage,
    filterLocationDataArrayViaParams,
} from "../redux/locationDataSlice";

const LocationPage = (): JSX.Element => {

    const params = useParams()

    const dispatch = useDispatch()

    const locationDataPage = useSelector(reduxLocationDataPage)

    useEffect(() => {
        dispatch(filterLocationDataArrayViaParams(params))
    },[])


    // console.log(locationDataPage)
  return (
      <div style={{color: `white`, fontSize: `20px`}}>

          <Link to="/">BACK</Link>
          <div>{locationDataPage.locationName}</div>
          <img src={locationDataPage.locationPicture} alt="" style={{maxWidth: `70%`, maxHeight: `300px`}}/>
          <div>{locationDataPage.locationName}</div>
          <p>Temp: {locationDataPage.locationTemp}°C</p>
          <p>Conditions: {locationDataPage.locationDesc}<img src={locationDataPage.locationIcon} alt="weather icon" /></p>
      </div>
  );
};

export default LocationPage;