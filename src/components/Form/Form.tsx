import { FormStyled } from "./Form.styled";
import {IForm} from "../../types/propsTypes";

const Form = ({children, onSubmit}: IForm): JSX.Element => {

  return (
      <FormStyled onSubmit={onSubmit}>
          {children}
      </FormStyled>
  );
};

export default Form;