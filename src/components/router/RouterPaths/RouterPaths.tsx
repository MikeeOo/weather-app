import {Route, Routes} from "react-router-dom";

import Default from "../Default";
import MainPage from "../../pages/MainPage";
import DetailsPage from "../../pages/DetailsPage";

const RouterPaths = (): JSX.Element => {
    return (
        <Routes>
            <Route path="/" element={<Default/>}>
                <Route index element={<MainPage/>}/>
                <Route path="details/:locationName/slide=:locationImageIndex/id=:locationId/" element={<DetailsPage/>}/>
            </Route>
        </Routes>
    );
};

export default RouterPaths;