import {GuideStyled} from "./Guide.styled";
import {IGuide} from "./Guide.types";

const Guide = ({guideStatus, errorColor}: IGuide): JSX.Element => <GuideStyled errorColor={errorColor}>{guideStatus}</GuideStyled>;

export default Guide;