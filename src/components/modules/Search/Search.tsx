import {useEffect, SyntheticEvent, ChangeEvent, useState} from "react";

import {v4 as uuid} from "uuid";
import {TimeoutId} from "@reduxjs/toolkit/dist/query/core/buildMiddleware/types";
import {AiOutlineSearch} from "react-icons/ai";

import {RequestStatus} from "../../../types/common.types";
import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {setLocationRequestState} from "../../../redux/slices/locationDataSlice";
import {addLocationDataArrayViaApi} from "../../../redux/api/thunks";
import {SearchWrapped, SearchStyled, GuideStyled} from "./Search.styled";
import Form from "../../cells/Form";
import Input from "../../cells/Input";
import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

const Search = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [locationInput, setLocationInput] = useState<string>(``);
    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);
    const locationRequestState = useAppSelector(state=> state.locationData.locationRequestState);

    const getPlaceholderText = (locationDataArrayLength: number): string => locationDataArrayLength === 1 ? "Add one more ;))" : "Search for location... ;)";

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if(locationInput.length > 2) {
            dispatch(setLocationRequestState({status: RequestStatus.update, message: 'Updating...'}));
            dispatch(addLocationDataArrayViaApi({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }));
        } else {
           dispatch(setLocationRequestState( {message: `Error: Location must be at least 3 characters long...`, status: RequestStatus.error}));
        }
        setLocationInput(``);
    };

    const handleClickOnInput = (): void => {
        dispatch(setLocationRequestState({message: getPlaceholderText(locationDataArray.length), status: RequestStatus.idle}));
    };

    useEffect(() => {
        const timeout: TimeoutId = setTimeout(() => {
            dispatch(setLocationRequestState({message: getPlaceholderText(locationDataArray.length), status: RequestStatus.idle}))}, 1000 * 5);
        return () => clearTimeout(timeout);
    },[locationRequestState.status]);

    return (
        <SearchWrapped>
            <SearchStyled>
                <Form onSubmit={handleSubmit} errorColor={locationRequestState.status === RequestStatus.error && `error`}>
                    <Input type="search"
                           value={locationInput}
                           placeholder={`City, Country or Landmark...`}
                           onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                           onClick={handleClickOnInput}/>
                    <Button fontSize="1.6rem" borderRadius="0 5px 5px 0" padding=".5em 1em"><BtnContent icon={<AiOutlineSearch/>}/></Button>
                </Form>
                <GuideStyled errorColor={locationRequestState.status === RequestStatus.error && `error`}>
                    {locationRequestState.message}
                </GuideStyled>
            </SearchStyled>
        </SearchWrapped>
    );
};

export default Search;