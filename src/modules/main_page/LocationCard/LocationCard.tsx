import {ILocation} from "../../../types/propsTypes";
import {
    ClickInfo,
    LinkStyled,
    LocationCardStyled,
    LocationImgContainer,
} from "./LocationStyles";
import {useState} from "react";
import {BsXLg} from "react-icons/bs";
import {ButtonStyled} from "../../../components/Button/Button.styled";
import {deleteLocationData} from "../../../redux/slices/locationDataSlice";
import {useAppDispatch} from "../../../redux/store";
import {LocationName} from "./LocationStyles";
import {ImgStyled} from "./LocationStyles";
import {LocationImageNotFoundStyled} from "../../../styles/atoms/LocationImgeNotFound.styled";
import LocationCardWeather from "../LocationCardWeather/LocationCardWeather";
const LocationCard = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocation): JSX.Element => {

    const dispatch = useAppDispatch();

    const [state, setState] = useState<boolean>(false);

  return (
      <LocationCardStyled>

          <LocationImgContainer onMouseEnter={e => setState(true)}
                                onMouseLeave={e => setState(false)}
                                onTouchMove={e => setState(true)}>

              <LocationName>{locationName}</LocationName>

              <LinkStyled to={`/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>
                  {locationImages?.length ?
                      <ImgStyled src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`} alt="searched location image"/>
                      :
                      <LocationImageNotFoundStyled>Image not found...</LocationImageNotFoundStyled>}
              </LinkStyled>

              {state && <ButtonStyled
                            onClick={() => dispatch(deleteLocationData(locationId))} borderRadius="1rem"
                            contrast
                            imgPosition
                            fontSize="1.2rem"
                            padding="1em"><BsXLg/></ButtonStyled>}

              {state &&  <ClickInfo>click to change image...</ClickInfo>}
          </LocationImgContainer>

          <LocationCardWeather locationIcon={locationIcon} locationTemp={locationTemp} locationDesc={locationDesc}/>
      </LocationCardStyled>


  );
};

export default LocationCard;

