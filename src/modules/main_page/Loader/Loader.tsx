import { LoaderStyled } from "./Loader.styled";
import Spinner from "../../../components/Spinner/Spinner";

const Loader = (): JSX.Element => {

  return (
      <LoaderStyled>

          <Spinner/>
      </LoaderStyled>
  );
};

export default Loader;