import {ReactComponent as DeleteSvg} from "../assets/delete-svgrepo-com.svg"

import {useDispatch} from "react-redux";
import {deleteLocationData} from "../redux/locationDataSlice";

import {ILocationData} from "../ts/types";

const Location = (props: ILocationData): JSX.Element => {

    const dispatch = useDispatch()

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

          <button onClick={() => dispatch(deleteLocationData(props.locationId))}
                  style={{width: `40px`}}>

              <DeleteSvg/>
          </button>
      </div>
  )
}

export default Location