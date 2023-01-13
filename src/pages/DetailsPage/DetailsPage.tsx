import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {filterLocationDataArrayViaParams} from "../../redux/slices/locationDataSlice";

import Slider from "../../modules/details_page/Slider";
import LocationCardWeather from "../../modules/main_page/LocationCardWeather";

import { DetailsPageStyled } from "./DetailsPage.styled";
import ReturnToMain from "../../modules/details_page/ReturnToMain";

export const DetailsPage = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();

    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));

    useEffect((): void => {
        dispatch(filterLocationDataArrayViaParams(params));
    },[]);

  return (
      <DetailsPageStyled>

          <ReturnToMain dispatch={dispatch} currSlide={currSlide} params={params}/>

          <Slider params={params} setCurrSlide={setCurrSlide} locationDataDetails={locationDataDetails}/>
          {/*///////////////////////////////////////////////////*/}
          {/*change Location Data//Weather whatever name*/}
          <LocationCardWeather locationIcon={locationDataDetails.locationIcon} locationTemp={locationDataDetails.locationTemp} locationDesc={locationDataDetails.locationDesc}/>
      </DetailsPageStyled>
  );
};

export default DetailsPage;