import {Outlet} from "react-router-dom";
import Header from "../../containers/Header";

import {DefaultStyled} from "./Default.styled";

const Default = (): JSX.Element => {

  return (
      <DefaultStyled>

          <Header/>
          <Outlet/>
      </DefaultStyled>
  );
};

export default Default;