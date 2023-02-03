import {useEffect, SyntheticEvent, ChangeEvent, useState} from "react";

import Form from "../../cells/Form"
import Input from "../../cells/Input";
import Button from "../../cells/Button";
import Guide from "../../cells/Guide";

import { v4 as uuid } from 'uuid';

import { useAppDispatch, useAppSelector } from "../../../redux/store";

import { addLocationInputDataToState, removeLocationNotFoundError, removeLocationDuplicateError } from "../../../redux/slices/locationDataSlice";

import { AiOutlineSearch } from "react-icons/ai";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import { SearchWrapped, SearchStyled } from "./Search.styled";

const Search = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const [locationInput, setLocationInput] = useState<string>(``);

    const [locationInputTooShort, setLocationInputTooShort] = useState<boolean>(false);

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const locationDataLoader = useAppSelector(state => state.locationData.locationDataLoader);

    const locationLastDuplicate = useAppSelector(state => state.locationData.locationLastDuplicate);

    const locationNotFoundError = useAppSelector(state=> state.locationData.locationNotFoundError);

    const locationDuplicateError = useAppSelector(state=> state.locationData.locationDuplicateError);

    useEffect(() => {
        const timeout: TimeoutId = setTimeout((): void => {

            locationInputTooShort && setLocationInputTooShort(false);

            locationNotFoundError && dispatch(removeLocationNotFoundError());

            locationDuplicateError && dispatch(removeLocationDuplicateError());
        }, 1000 * 5);

        return () => clearTimeout(timeout);
    },[locationInputTooShort, locationNotFoundError, locationDuplicateError]);

    const handleGuideStatus = (): string => {
        if (locationDataLoader) {
            return "Updating...";
        } else if(locationNotFoundError) {
            return `Error: Location not found!`;
        } else if(locationInputTooShort) {
            return `Location must be at last 3 characters long...`;
        }  else if(locationDuplicateError) {
            return `You've already added ${locationLastDuplicate}!`;
        } else {
            if (locationDataArray.length === 1) {
                return "Add another one ;))";
            } else if (locationDataArray.length >= 8) {
                return "Oh! Isn't enough?";
            } else if (locationDataArray.length === 2) {
                return "Add more! ;)";
            } else if (locationDataArray.length >= 3) {
                return `You successfully added ${locationDataArray[locationDataArray.length - 1].locationName} ;)`;
            } else {
                return "Search for location... ;)";
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
        dispatch(removeLocationDuplicateError());
        setLocationInput(``);
    };

  return (
      <SearchWrapped>

          <SearchStyled>

              <Form onSubmit={handleSubmit}
                    errorColor={(locationNotFoundError || locationInputTooShort || locationDuplicateError) && `error`}>

                  <Input type="search"
                         value={locationInput}
                         placeholder={`City, Country or Landmark...`}
                         onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                         onClick={(): void => {
                             dispatch(removeLocationNotFoundError());
                             dispatch(removeLocationDuplicateError());
                             setLocationInputTooShort(false);
                         }}/>

                  <Button fontSize="1.6rem"
                          borderRadius="0 5px 5px 0"
                          padding=".5em 1em">
                      <AiOutlineSearch/>
                  </Button>
              </Form>

              <Guide guideStatus={handleGuideStatus()} errorColor={(locationNotFoundError || locationInputTooShort || locationDuplicateError) && `error`}/>

          </SearchStyled>
      </SearchWrapped>
  );
};

export default Search;