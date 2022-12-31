import {Link} from "react-router-dom";

import {useAppDispatch} from "../../redux/store";
import {deleteLocationData} from "../../redux/locationDataSlice";

import DeleteSvg from "../atoms/svg/DeleteSvg";

import {AnyAction, Dispatch} from "@reduxjs/toolkit";

import {ILocationName} from "../../types/propsTypes";

import styled from "styled-components";

const LocationName = ({locationId, locationName, locationImageIndex}: ILocationName): JSX.Element => {

    const dispatch = useAppDispatch()

  return (
      <LocationNameStyled>

          <Link to={`/${locationName}/slide=${locationImageIndex}/id=${locationId}/`} style={{color: 'white', fontSize: `20px`}}>{locationName}</Link>

          <button onClick={() => dispatch(deleteLocationData(locationId))}>

              <DeleteSvg/>
          </button>
      </LocationNameStyled>
  );
};

export default LocationName;

const LocationNameStyled = styled.div`
  //padding: 2em 1em 2em 2em;
  margin: 1em;

  display: flex;
  justify-content: space-between;
  align-items: center;
  
  h2 {
    font-size: 1.8rem;
    font-weight: ${({theme}) => theme.weight.bold};
  }
  
  button {
    background-color: ${({theme}) => theme.color.primary};
    border: none;
    //padding: 4px 6px;
    height: 3.6rem;
    opacity: 0.5;
    border-radius: 10px;
    
    &:hover {
      //filter: invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);
      opacity: 1;
    }
  }
`