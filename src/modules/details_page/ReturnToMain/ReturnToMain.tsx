import Button from "../../../components/Button";
import {BsArrowLeft} from "react-icons/bs";
import {editLocationImage} from "../../../redux/slices/locationDataSlice";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {IReturnToMain} from "../../../types/propsTypes";


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
      <div style={{margin: "5rem 0"}}>

          <Button onClick={returnToMain}
                  fontSize="1.4rem"
                  padding="0.5em 1em"
          ><BsArrowLeft size="1.8rem"/>Back / Save</Button>
      </div>
  );
};

export default ReturnToMain;