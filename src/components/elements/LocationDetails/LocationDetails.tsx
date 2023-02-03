import Slider from "../../cells/Slider";
import DetailsWeather from "../../divisions/DetailsWeather";

import {IDetails} from "../../../types/common.types";

import {LocationDetailsStyled} from "./LocationDetails.styled";

const LocationDetails = ({params, setCurrSlide}: IDetails): JSX.Element => {

  return (
      <>
          <LocationDetailsStyled>

              <Slider params={params} setCurrSlide={setCurrSlide}/>
          </LocationDetailsStyled>

          <DetailsWeather/>
      </>


  );
};

export default LocationDetails;