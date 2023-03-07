import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import {useAppDispatch} from "../../../redux/store";
import {filterLocationDataArrayViaParams, getInitialStateFromLocalStorage} from "../../../redux/slices/locationDataSlice";
import Details from "../../modules/Details";
import Navigate from "../../modules/Navigate";

export const DetailsPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();
    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));

    useEffect((): void => {
        dispatch(getInitialStateFromLocalStorage());
        dispatch(filterLocationDataArrayViaParams(params));
    },[]);

    return (
        <>
            <Navigate currSlide={currSlide}/>
            <Details setCurrSlide={setCurrSlide}/>
        </>
    );
};

export default DetailsPage;