import {useEffect, SyntheticEvent, ChangeEvent} from "react";

import Form from "../../../components/Form/Form"
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";

import { v4 as uuid } from 'uuid';

import {addLocationInputDataToState, removeLocationNotFoundError} from "../../../redux/slices/locationDataSlice";

import { AiOutlineSearch } from "react-icons/ai";

import {IMainSearch} from "../../../types/propsTypes";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import {SearchStyled} from "./Search.styled";
import Guide from "../../../components/Guide/Guide";

const Search = ({dispatch, locationNotFoundError, locationInput, setLocationInput, locationInputTooShort, setLocationInputTooShort, locationDataArray, locationDataLoader }: IMainSearch ): JSX.Element => {

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            dispatch(removeLocationNotFoundError())
        }, 1000 * 3);

        return () => clearTimeout(timeout);
    },[locationNotFoundError]);

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            setLocationInputTooShort(false);
        }, 1000 * 3);

        return () => clearTimeout(timeout);
    },[locationInputTooShort]);

    const handleGuideStatus = (): string => {
        if (locationDataLoader) {
            return "Updating..."
        } else if(locationNotFoundError) {
            return `Error: Location not found!`;
        } else if(locationInputTooShort) {
            return `Location must be at last 3 characters long...`;
        } else {
            if (locationDataArray.length === 1) {
                return "Add another one ;))"
            } else if (locationDataArray.length >= 9) {
                return "INFINITE LOCATIOOOOOOOONS !!!"
            } else if (locationDataArray.length >= 8) {
                return "Oh! Isn't enough?"
            }
            else if (locationDataArray.length === 2) {
                return "Add more! ;)"
            } else if (locationDataArray.length === 3) {
                return "And more! ;)"
            } else if (locationDataArray.length >= 4) {
                return "Add as many as u want ;)"
            }
            else {
                return "Search for location... ;)"
            }
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
      <SearchStyled>

          <Form onSubmit={handleSubmit}>

              <Input type="search"
                     value={locationInput}
                     placeholder={`City, Country or Landmark...`}
                     onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                     onClick={() => dispatch(removeLocationNotFoundError())}
                     errorColor={(locationNotFoundError || locationInputTooShort) && `error`}/>

              <Button fontSize="1.6rem"
                      borderRadius="0 5px 5px 0"
                      padding=".5em 1em">

                  <AiOutlineSearch/>
              </Button>
          </Form>

          <Guide guideStatus={handleGuideStatus()} errorColor={(locationNotFoundError || locationInputTooShort) && `error`}/>
      </SearchStyled>
  );
};

export default Search;