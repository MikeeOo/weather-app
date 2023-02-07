import Button from "../../cells/Button";
import {editLocationImage} from "../../../redux/slices/locationDataSlice";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {NavigateStyled} from "./Navigate.styled";
import {useAppDispatch} from "../../../redux/store";
import {INavigate} from "./Navigate.types";
import BtnContent from "../../atoms/BtnContent";
import {BsArrowLeft} from "react-icons/bs";

const Navigate = ({currSlide, params}: INavigate): JSX.Element => {

    const dispatch = useAppDispatch();

    const navigate: NavigateFunction = useNavigate();

    const returnToMain = (): void => {

        dispatch(editLocationImage({
            currLocationSlide: currSlide.toString(),
            currLocationId: params.locationId,
        }));

        navigate("/");
    };

  return (
      <section>

          <NavigateStyled>

              <Button onClick={returnToMain}
                      fontSize="1.4rem"
                      padding="0.5em 1em">

                  <BtnContent  content={`iconText`} icon={<BsArrowLeft size="1.8rem"/>} text={`Back / Save`}/>
              </Button>
          </NavigateStyled>
      </section>
  );
};

export default Navigate;