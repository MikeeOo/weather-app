import {ILocationDataProps} from "../ts/types";

const Location = (props: ILocationDataProps): JSX.Element => {

  return (
      <div style={{backgroundColor: `darkgrey`, border: `2px dashed yellow`}}>
          {props.locationName}
          <br/>
          {props.locationTemp}
          <br/>
          {props.locationDesc}
          <br/>
          {props.locationIcon}
          <br/>
          {props.locationPicture}
          {/*<img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon"/>*/}
          {/*{(Math.round(weatherData.main.temp.toFixed(1)))}°C*/}
      </div>
  )
}

export default Location