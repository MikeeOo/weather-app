import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {BsArrowLeft} from "react-icons/bs";

import {INavigate} from "./Navigate.types";
import {useAppDispatch} from "../../../redux/store";
import {editLocationImage} from "../../../redux/slices/locationDataSlice";
import {NavigateStyled} from "./Navigate.styled";
import Button from "../../cells/Button";
import BtnContent from "../../atoms/BtnContent";

const Navigate = ({currSlide}: INavigate): JSX.Element => {
    const dispatch = useAppDispatch();
    const params: Readonly<Partial<Record<string, string | undefined>>> = useParams();
    const navigate: NavigateFunction = useNavigate();

    const returnToMain = (): void => {
        dispatch(editLocationImage({
            currLocationSlide: currSlide.toString(),
            currLocationId: params.locationId
        }));
        navigate("/");
    };

    return (
        <section>
            <NavigateStyled>
                <Button onClick={returnToMain} fontSize="1.4rem" padding="0.5em 1em">
                    <BtnContent iconText icon={<BsArrowLeft size="1.8rem"/>} text={`Back / Save`}/>
                </Button>
            </NavigateStyled>
        </section>
    );
};

export default Navigate;