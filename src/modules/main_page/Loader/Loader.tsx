import { LoaderStyled } from "./Loader.styled";
import Spinner from "../../../components/Spinner";

const Loader = (): JSX.Element => {

  return (
      <LoaderStyled>

          <Spinner/>
      </LoaderStyled>
  );
};

export default Loader;