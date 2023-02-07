import {ImgErrorStyled} from "./ImgError.styled";
import {IImgError} from "./ImgError.types";

const ImgError = ({fontSize, errorBorder}: IImgError): JSX.Element =>
    <ImgErrorStyled fontSize={fontSize}
                    errorBorder={errorBorder}
    >

        Image not found...
    </ImgErrorStyled>;

export default ImgError;