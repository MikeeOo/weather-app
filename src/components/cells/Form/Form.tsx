import { FormStyled } from "./Form.styled";
import {IForm} from "./Form.types";

const Form = ({children, onSubmit, errorColor}: IForm): JSX.Element => <FormStyled onSubmit={onSubmit} errorColor={errorColor}>{children}</FormStyled>;

export default Form;