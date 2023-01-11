import {Route, Routes} from "react-router-dom";

import Default from "../Default";
import MainPage from "../../containers/MainPage";
import DetailsPage from "../../containers/DetailsPage";

const RouterPaths = (): JSX.Element => {

  return (
      <Routes>

          <Route path="/" element={<Default/>}>

              <Route index element={<MainPage/>}/>
              <Route path="/:locationName/slide=:locationImageIndex/id=:locationId/" element={<DetailsPage/>}/>
          </Route>
      </Routes>
  );
};

export default RouterPaths;