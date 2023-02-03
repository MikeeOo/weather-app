import {useEffect, useState} from "react";

import {useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../../../redux/store";
import {filterLocationDataArrayViaParams} from "../../../redux/slices/locationDataSlice";

import Slider from "../../modules/details-page/Slider";
import CardWeather from "../../divisions/CardWeather";

import styled from "styled-components";
import ReturnToMain from "../../modules/details-page/ReturnToMain";

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
          <CardWeather locationIcon={locationDataDetails.locationIcon} locationTemp={locationDataDetails.locationTemp} locationDesc={locationDataDetails.locationDesc}/>
      </DetailsPageStyled>
  );
};

export default DetailsPage;

export const DetailsPageStyled = styled.div`
  font-size: 20px;
  //background-color: green;
  max-width: 375px;
  margin: 0 auto;
`;
