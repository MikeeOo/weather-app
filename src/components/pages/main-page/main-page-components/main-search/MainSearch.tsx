import {useState, useEffect, SyntheticEvent, ChangeEvent} from "react";

import { v4 as uuid } from 'uuid';

import {useAppDispatch, useAppSelector} from "../../../../../redux/store";
import {addLocationInputDataToState, removeLocationNotFoundError} from "../../../../../redux/slices/locationDataSlice";

import { AiOutlineSearch } from "react-icons/ai";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import {MainSearchStyled} from "./MainSearch.styled";
import { ButtonStyled } from "../../../../../styles/atoms/Button.styled";
import {InputStyled} from "../../../../../styles/atoms/Input.styled";
import {FormStyled} from "../../../../../styles/atoms/Form.styled";

const MainSearch = (): JSX.Element => {

    const dispatch = useAppDispatch()

    const locationNotFoundError = useAppSelector(state=> state.locationData.locationNotFoundError);

    const [locationInput, setLocationInput] = useState<string>(``)

    const [locationInputTooShort, setLocationInputTooShort] = useState<boolean>(false)

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            dispatch(removeLocationNotFoundError())

        }, 1000 * 3)

        return () => clearTimeout(timeout)
    },[locationNotFoundError])

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            setLocationInputTooShort(false);

        }, 1000 * 3);

        return () => clearTimeout(timeout);
    },[locationInputTooShort]);

    const handleErrors = (): string => {
        if(locationNotFoundError) {
            return `Error: Location not found!`;
        } else if(locationInputTooShort) {
            return `Location must be at last 3 characters...`;
        } else {
            return `City, Country or Landmark...`;
        }
    };

    const handleSubmit = (e: SyntheticEvent): void => {
      e.preventDefault();

        if(locationInput.length > 2) {
            dispatch(addLocationInputDataToState({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }));
        } else {
            setLocationInputTooShort(true);
        }

        dispatch(removeLocationNotFoundError());
        setLocationInput(``);
    };

    return (
      <MainSearchStyled>

          <FormStyled onSubmit={handleSubmit}>

              <InputStyled type="search"
                     value={locationInput}
                     placeholder={handleErrors()}
                     onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                     onClick={() => dispatch(removeLocationNotFoundError())}
                     placeholderColor={(locationNotFoundError || locationInputTooShort) && `error`}
              />

              <ButtonStyled fontSize="1.6rem"
                            borderRadius="0 5px 5px 0"
                            padding=".5em 1em">

                  <AiOutlineSearch/>
              </ButtonStyled>
          </FormStyled>

      </MainSearchStyled>
  );
};

export default MainSearch;