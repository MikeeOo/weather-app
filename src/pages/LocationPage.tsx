import React, {useEffect} from "react";
import {useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {
    locationDataPageArray as reduxLocationDataPageArray,
    filterLocationDataArrayViaParams,
} from "../redux/locationDataSlice";

const LocationPage = (): JSX.Element => {

    const params = useParams()

    const dispatch = useDispatch()

    const locationDataPageArray = useSelector(reduxLocationDataPageArray)

    useEffect(() => {
        dispatch(filterLocationDataArrayViaParams(params))
    },[])


  return (
      <div style={{color: `white`, fontSize: `20px`,}}>

          <Link to="/">BACK</Link>

          {locationDataPageArray.map((el) =>
              <React.Fragment key={el.locationId}>
                  <img src={el.locationPicture} alt="" style={{maxWidth: `70%`, maxHeight: `300px`}}/>
                  <div>{el.locationName}</div>
                  <p>Temp: {el.locationTemp}°C</p>
                  <p>Conditions: {el.locationDesc}<img src={`https://openweathermap.org/img/wn/${el.locationIcon}@2x.png`} alt="weather icon" /></p>
              </React.Fragment>)
          }
      </div>
  );
};

export default LocationPage;