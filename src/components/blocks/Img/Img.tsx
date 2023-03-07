import {IImg} from "./Img.types";
import { ImgStyled } from "./Img.styled";

const Img = ({src, alt, linkImgStyled, weatherImgStyled, sliderImgStyled}: IImg): JSX.Element =>
    <ImgStyled src={src} alt={alt} linkImgStyled={linkImgStyled} weatherImgStyled={weatherImgStyled} sliderImgStyled={sliderImgStyled}/>;

export default Img;