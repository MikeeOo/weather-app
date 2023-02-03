import LocationDetails from "../../elements/LocationDetails";

import {IDetails} from "../../../types/common.types";

import { DetailsStyled } from "./Details.styled";

const Details = ({params, setCurrSlide}: IDetails): JSX.Element => {

  return (
      <DetailsStyled>
          <LocationDetails params={params} setCurrSlide={setCurrSlide}/>
      </DetailsStyled>
  );
};

export default Details;