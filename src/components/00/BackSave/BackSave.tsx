import {BsArrowLeft} from "react-icons/bs";
import {BackSaveStyled} from "./BackSave.styled";


const BackSave = (): JSX.Element => {

  return (
      <BackSaveStyled>

          <BsArrowLeft size="1.8rem"/>Back / Save
      </BackSaveStyled>
  );
};

export default BackSave;