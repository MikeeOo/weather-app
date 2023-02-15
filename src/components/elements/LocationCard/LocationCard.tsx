import H2 from "../../blocks/H2";
import Img from "../../blocks/Img";
import P from "../../blocks/P";
import ErrImg from "../../atoms/ErrImg";
import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

import {useAppDispatch} from "../../../redux/store";
import {deleteLocationData} from "../../../redux/slices/locationDataSlice";

import {BsXLg} from "react-icons/bs";

import {LocationCardStyled, LocationCardWrapped, LinkStyled, ClickInfoStyled,
        LocationCardHoverStyled, LocationCardWeatherWrapped, LocationCardWeatherStyled} from "./LocationCard.styled";

import {ILocationCard} from "./LocationCard.types";

const LocationCard = ({locationId, locationName, locationTemp, locationDesc, locationIcon, locationImages, locationImageIndex}: ILocationCard): JSX.Element => {
    const dispatch = useAppDispatch();
    return (
        <LocationCardWrapped>

            <LocationCardStyled>
                <H2 locationCardStyled fontSize={`1.8rem`}>{locationName}</H2>
                <LocationCardHoverStyled>
                    <LinkStyled to={`details/${locationName}/slide=${locationImageIndex}/id=${locationId}/`}>
                        {locationImages?.length
                            ? <Img linkImgStyled
                                   src={`${locationImages?.length && locationImages[parseInt(locationImageIndex as string)].largeImageURL}`}
                                   alt="current location image"/>
                            : <ErrImg fontSize={"1.4rem"}/>}
                    </LinkStyled>
                    <Button onClick={() => dispatch(deleteLocationData(locationId))}
                            borderRadius="1rem"
                            contrast
                            hide
                            imgPosition
                            fontSize="1.2rem"
                            padding="1em">
                        <BtnContent icon={<BsXLg/>}/>
                    </Button>
                    <ClickInfoStyled className="clickInfo">Click to change image...</ClickInfoStyled>
                </LocationCardHoverStyled>
            </LocationCardStyled>

            <LocationCardWeatherWrapped>
                <div><Img weatherImgStyled src={locationIcon} alt="weather icon"/></div>
                <LocationCardWeatherStyled>
                    <P cardWeatherPStyled borderBottom fontSize={`3.1rem`}>{locationTemp} °C</P>
                    <P cardWeatherPStyled borderTop fontSize={`1.5rem`}>{locationDesc}</P>
                </LocationCardWeatherStyled>
            </LocationCardWeatherWrapped>

        </LocationCardWrapped>
    );
};

export default LocationCard;