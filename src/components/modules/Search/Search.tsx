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
import getPlaceholderText from "../../../utils/getPlaceholderText";
import {OperationStatuses} from "../../../redux/slices/locationDataSlice.types";

const Search = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const [locationInput, setLocationInput] = useState<string>(``);
    const locationDataArray = useAppSelector(state => state.locationData.locationDataArray);
    const apiOperationStatus = useAppSelector(state=> state.locationData.apiOperationStatus);

    const handleSubmit = (e: SyntheticEvent): void => {
        e.preventDefault();
        if(locationInput.length > 2) {
            dispatch(setApiOperationStatus({status: OperationStatuses.update, message: 'Updating...'}));
            dispatch(addLocationDataArrayViaApi({
                locationId: uuid(),
                locationInput: locationInput,
                locationImageIndex: "0"
            }));
        } else {
           dispatch(setApiOperationStatus( {message: `Error: Location must be at last 3 characters long...`, status: OperationStatuses.error}));
        }
        setLocationInput(``);
    };

    const handleClickOnInput = (): void => {
        dispatch(setApiOperationStatus({message: getPlaceholderText(locationDataArray.length), status: OperationStatuses.idle}));
    };

    useEffect(() => {
        const timeout: TimeoutId = setTimeout(() => dispatch(setApiOperationStatus({message: getPlaceholderText(locationDataArray.length), status: OperationStatuses.idle})), 1000 * 5);
        return () => clearTimeout(timeout);
    },[apiOperationStatus.status]);

    return (
        <SearchWrapped>
            <SearchStyled>
                <Form onSubmit={handleSubmit}
                      errorColor={apiOperationStatus.status === OperationStatuses.error && `error`}>
                    <Input type="search"
                           value={locationInput}
                           placeholder={`City, Country or Landmark...`}
                           onChange={(e :ChangeEvent<HTMLInputElement>)=> setLocationInput(e.target.value)}
                           onClick={handleClickOnInput}/>
                    <Button fontSize="1.6rem" borderRadius="0 5px 5px 0" padding=".5em 1em"><BtnContent icon={<AiOutlineSearch/>}/></Button>
                </Form>
                <GuideStyled errorColor={apiOperationStatus.status === OperationStatuses.error && `error`}>
                    {apiOperationStatus.message}
                </GuideStyled>
            </SearchStyled>
        </SearchWrapped>
    );
};

export default Search;