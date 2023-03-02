import {useEffect, useState} from "react";

import Details from "../../modules/Details";
import Navigate from "../../modules/Navigate";

import {useParams} from "react-router-dom";

import {useAppDispatch} from "../../../redux/store";
import {filterLocationDataArrayViaParams} from "../../../redux/slices/locationDataSlice";

export const DetailsPage = (): JSX.Element => {
    const dispatch = useAppDispatch();
    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();
    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));


    useEffect((): void => {
        dispatch(filterLocationDataArrayViaParams(params));
        console.log(params)
    },[]);

    return (
        <>
            <Navigate params={params} currSlide={currSlide}/>
            <Details params={params} setCurrSlide={setCurrSlide}/>
        </>
    );
};

export default DetailsPage;