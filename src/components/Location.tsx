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
      </div>
  )
}

export default Location