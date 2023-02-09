import Slider from "../../cells/Slider";
import DetailsWeather from "../../divisions/DetailsWeather";

import {IDetails} from "../../../types/common.types";

import { DetailsStyled } from "./Details.styled";

const Details = ({params, setCurrSlide}: IDetails): JSX.Element => {

  return (
      <DetailsStyled>

              <Slider params={params} setCurrSlide={setCurrSlide}/>

              <DetailsWeather/>
      </DetailsStyled>
  );
};

export default Details;