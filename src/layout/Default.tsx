import {Outlet} from "react-router-dom";

import Header from "./Header";

const Default = (): JSX.Element => {

  return (
      <>

          <Header/>
          <Outlet/>
      </>
  );
};

export default Default;