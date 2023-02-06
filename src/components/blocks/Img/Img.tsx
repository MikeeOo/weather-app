import { ImgStyled } from "./Img.styled";
import {IImg} from "./Img.types";

const Img = ({src, alt, linkImgStyled, cardWeatherImgStyled, sliderImgStyled}: IImg): JSX.Element =>
    <ImgStyled src={src}
               alt={alt}
               sliderImgStyled={sliderImgStyled}
               linkImgStyled={linkImgStyled}
               cardWeatherImgStyled={cardWeatherImgStyled}
    />;

export default Img;