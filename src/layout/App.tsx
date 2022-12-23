import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Default from "./Default"
import MainPage from "../pages/MainPage";
import LocationPage from "../pages/LocationPage";

import ResetStyles from "../styles/ResetStyles";
import GlobalStyles from "../styles/GlobalStyles";

export default function App(): JSX.Element {

  return (
    <Router>

        <ResetStyles/>
        <GlobalStyles/>

        <Routes>

            <Route path="/" element={<Default/>}>

                <Route index element={<MainPage/>}/>
                <Route path="/:locationName/slide=:locationPictureIndex/id=:id/" element={<LocationPage/>}/>
            </Route>
        </Routes>
    </Router>
  );
};