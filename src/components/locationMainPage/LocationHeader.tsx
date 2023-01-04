import {useAppDispatch} from "../../redux/store";
import {deleteLocationData} from "../../redux/locationDataSlice";

import {ILocationName} from "../../types/propsTypes";

import { BsXLg } from "react-icons/bs";

import styled from "styled-components";
import {fontWeightBold} from "../../styles/mixins";
import { ButtonStyled } from "../atoms/Button.styled";
import {LinkStyled} from "../atoms/Link.styled";
import {flexBox} from "../../styles/logicalMixins";

const LocationHeader = ({locationId, locationName, locationImageIndex}: ILocationName): JSX.Element => {

    const dispatch = useAppDispatch()

  return (
      <LocationNameStyled>

          <LinkStyled to={`/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>{locationName}</LinkStyled>

          <ButtonStyled onClick={() => dispatch(deleteLocationData(locationId))}
                        borderRadius="1rem"
                        contrast
                        fontSize="1.2rem"
                        padding="1em">
              <BsXLg/>
          </ButtonStyled>
      </LocationNameStyled>
  );
};

export default LocationHeader;

const LocationNameStyled = styled.div`
  ${flexBox({jc: "space-between", ai: "center"})}
  //margin: 1.8rem 0 0 0;
  margin: 2.4rem 0 0 0;
`