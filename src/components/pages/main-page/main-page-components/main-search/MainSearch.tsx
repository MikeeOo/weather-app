import {useState, useEffect, SyntheticEvent, ChangeEvent} from "react";

import { v4 as uuid } from 'uuid';

import {useAppDispatch, useAppSelector} from "../../../../../redux/store";
import {addLocationInputDataToState, removeLocationNotFoundError} from "../../../../../redux/slices/locationDataSlice";

import { AiOutlineSearch } from "react-icons/ai";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import Button from "../../../../../styles/atoms/Button";

import {MainSearchStyled} from "./MainSearch.styled";
import { ButtonStyled } from "../../../../../styles/atoms/Button.styled";

const MainSearch = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const locationNotFoundError = useAppSelector(state=> state.locationData.locationNotFoundError);

    const [locationInput, setLocationInput] = useState<string>(``)

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            dispatch(removeLocationNotFoundError())
        }, 1000 * 7)

        return () => clearTimeout(timeout)
    },[locationNotFoundError])

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault();

        if(locationInput.length > 2) {
            dispatch(addLocationInputDataToState({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }));
        }
        dispatch(removeLocationNotFoundError());
        setLocationInput(``);
    };

  return (
      <MainSearchStyled>

          <form onSubmit={handleSubmit}>

              <input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}/>

              <ButtonStyled fontSize="1.6rem"
                            borderRadius="0 5px 5px 0"
                            padding=".5em 1em">

                  <AiOutlineSearch/>
              </ButtonStyled>
          </form>

          {locationNotFoundError && <div style={{color: `red`}}>location not found</div>}
      </MainSearchStyled>
  );
};

export default MainSearch;