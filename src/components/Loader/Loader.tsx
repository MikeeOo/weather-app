import { LoaderStyled } from "./Loader.styled";
import {ILoader} from "../../types/propsTypes";

const Loader = ({children}: ILoader): JSX.Element => {

  return (
      <LoaderStyled>
          {children}
      </LoaderStyled>
  );
};

export default Loader;