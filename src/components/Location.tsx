import {useDispatch} from "react-redux";
import {deleteLocationData} from "../redux/locationDataSlice";

import {LocationStyled} from "./Location.styled";
import {ReactComponent as DeleteSvg} from "../assets/delete-svgrepo-com.svg"


import {ILocationData} from "../ts/types";

const Location = (props: ILocationData): JSX.Element => {

    const dispatch = useDispatch()

  return (

      <LocationStyled>

          <img src={props.locationPicture} alt=""/>
          {props.locationName}
          <button onClick={() => dispatch(deleteLocationData(props.locationId))}
                  style={{width: `40px`}}>

              <DeleteSvg/>
          </button>

          <br/>
          {props.locationTemp}
          <br/>
          {props.locationDesc}
          <br/>
          <br/>
          <img src={`https://openweathermap.org/img/wn/${props.locationIcon}@2x.png`} alt="weather icon"/>
      </LocationStyled>
  )
}

export default Location