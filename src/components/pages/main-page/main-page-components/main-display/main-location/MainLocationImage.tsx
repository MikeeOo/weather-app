import {ILocationImage} from "../../../../../../types/propsTypes";

import styled from "styled-components";
import {useState} from "react";
import {Link} from "react-router-dom";
import {ButtonStyled} from "../../../../../../styles/atoms/Button.styled";
import {deleteLocationData} from "../../../../../../redux/slices/locationDataSlice";
import {BsXLg} from "react-icons/bs";
import {useAppDispatch} from "../../../../../../redux/store";
import MainLocationName from "./MainLocationName";

const MainLocationImage = ({locationId, locationName, locationImages, locationImageIndex}: ILocationImage): JSX.Element => {

    const dispatch = useAppDispatch()

    const [state, setState] = useState<boolean>(false)

  return (
      <div onMouseEnter={e => setState(true)} onMouseLeave={e => setState(false)}>
          <Link to={`/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>
              <MainLocationImageStyled src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`} alt="searched location image"/>
          </Link>

          <MainLocationName locationName={locationName}/>

          {state &&
              <ButtonStyled onClick={() => dispatch(deleteLocationData(locationId))} borderRadius="1rem"
                            contrast
                            imgPosition
                            fontSize="1.2rem"
                            padding="1em">
                  <BsXLg/>
              </ButtonStyled>
          }


      </div>
  );
};

export default MainLocationImage;

export const MainLocationImageStyled = styled.img`
  position: relative;
  border-radius: 10px 10px 0 0;
  width: 100%;
  max-width: 100%;
  height: 12em;
  object-fit: cover;
  transition: all .5s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;