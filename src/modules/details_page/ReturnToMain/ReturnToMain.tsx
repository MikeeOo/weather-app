import Button from "../../../components/Button";
import {editLocationImage} from "../../../redux/slices/locationDataSlice";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {IReturnToMain} from "../../../types/propsTypes";
import {ReturnToMainStyled} from "./ReturnToMain.styled";
import BackSave from "../../../atoms/BackSave";


const ReturnToMain = ({dispatch, currSlide, params}: IReturnToMain): JSX.Element => {

    const navigate: NavigateFunction = useNavigate();

    const returnToMain = (): void => {

        dispatch(editLocationImage({
            currLocationSlide: currSlide.toString(),
            currLocationId: params.locationId,
        }));

        navigate("/");
    };

  return (
      <ReturnToMainStyled>

          <Button onClick={returnToMain}
                  fontSize="1.4rem"
                  padding="0.5em 1em"><BackSave/></Button>
      </ReturnToMainStyled>
  );
};

export default ReturnToMain;