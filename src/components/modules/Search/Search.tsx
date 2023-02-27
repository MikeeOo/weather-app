import {useEffect, SyntheticEvent, ChangeEvent, useState} from "react";

import Form from "../../cells/Form";
import Input from "../../cells/Input";
import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

import { useAppDispatch, useAppSelector } from "../../../redux/store";
import { setApiOperationStatus } from "../../../redux/slices/locationDataSlice";
import {addLocationDataArrayViaApi} from "../../../redux/api/thunks";

import { AiOutlineSearch } from "react-icons/ai";

import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";

import { SearchWrapped, SearchStyled, GuideStyled } from "./Search.styled";

import {v4 as uuid} from "uuid";

const Search = (): JSX.Element => {
    const dispatch = useAppDispatch();

    const [locationInput, setLocationInput] = useState<string>(``);

    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);

    const apiOperationStatus = useAppSelector(state=> state.locationData.apiOperationStatus);

    const getPlaceholderText = (): string => {
        if (locationDataArray.length === 1) {
            return "Add one more ;))";
        } else if (locationDataArray.length % 2 === 1) {
            return "Add more! ;)";
        }
        return "Search for location... ;)"
    }

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if(locationInput.length > 2) {
            dispatch(addLocationDataArrayViaApi({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }));
        } else {
           dispatch(setApiOperationStatus( `Error: Location must be at last 3 characters long...`));
        }
        dispatch(setApiOperationStatus(getPlaceholderText()));
        setLocationInput(``);
    };

    const handleClickOnInput = (): void => {
        dispatch(setApiOperationStatus(getPlaceholderText()));
    };

    useEffect(() => {
        const timeout: TimeoutId = setTimeout(() => dispatch(setApiOperationStatus(getPlaceholderText())), 1000 * 5);
        return () => clearTimeout(timeout);
    },[apiOperationStatus]);

    return (
        <SearchWrapped>
            <SearchStyled>
                <Form onSubmit={handleSubmit}
                      errorColor={apiOperationStatus.startsWith('Error:') && `error`}>
                    <Input type="search"
                           value={locationInput}
                           placeholder={`City, Country or Landmark...`}
                           onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                           onClick={handleClickOnInput}/>
                    <Button fontSize="1.6rem" borderRadius="0 5px 5px 0" padding=".5em 1em"><BtnContent icon={<AiOutlineSearch/>}/></Button>
                </Form>
                <GuideStyled errorColor={apiOperationStatus.startsWith('Error:') && `error`}>
                    {apiOperationStatus}
                </GuideStyled>
            </SearchStyled>
        </SearchWrapped>
    );
};

export default Search;