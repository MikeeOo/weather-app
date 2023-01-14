import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../redux/store";
import {filterLocationDataArrayViaParams} from "../../redux/slices/locationDataSlice";

import Slider from "../../modules/details_page/Slider";
import LocationCardWeather from "../../components/LocationCardWeather";

import { DetailsPageStyled } from "./DetailsPage.styled";
import ReturnToMain from "../../modules/details_page/ReturnToMain";

export const DetailsPage = (): JSX.Element => {

    const dispatch = useAppDispatch();

    const locationDataDetails = useAppSelector(state  => state.locationData.locationDataDetails);

    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();

    const [currSlide, setCurrSlide] = useState<number>(parseInt(params.locationImageIndex as string));

    useEffect((): void => {
        dispatch(filterLocationDataArrayViaParams(params));
    },[]);

  return (
      <DetailsPageStyled>

          <ReturnToMain params={params} currSlide={currSlide}/>

          <Slider params={params} setCurrSlide={setCurrSlide}/>
          {/*///////////////////////////////////////////////////*/}
          {/*change Location Data//Weather whatever name*/}
          <LocationCardWeather locationIcon={locationDataDetails.locationIcon} locationTemp={locationDataDetails.locationTemp} locationDesc={locationDataDetails.locationDesc}/>
      </DetailsPageStyled>
  );
};

export default DetailsPage;