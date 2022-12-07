import {useEffect} from "react";
import type {} from 'redux-thunk/extend-redux';

import {useSelector, useDispatch} from "react-redux";
import {
    initialStateFromLocalStorage,
    locationDataArray as reduxLocationDataArray
} from "../../redux/locationDataSlice";
import {updateLocationDataViaApi} from "../../api/thunks";

import {DisplayStyled} from "./Display.styled";

const Display = (): JSX.Element => {

    const dispatch = useDispatch()

    const locationDataArray = useSelector(reduxLocationDataArray)

    useEffect(() => {
        dispatch(initialStateFromLocalStorage())

        const interval = setInterval(() => {
            if(locationDataArray.length){
                dispatch(updateLocationDataViaApi(locationDataArray))
            }
        }, 1000 * 60 * 5);
    },[])

  return (
      <DisplayStyled>
          {/*{locationDataArray.map(el => <div style={{color: "white"}}>{el.id}</div>)}*/}


      </DisplayStyled>
  )
}

export default Display