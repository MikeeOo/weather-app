import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Default from "./Default"
import MainPage from "../pages/MainPage";
import LocationPage from "../pages/LocationPage";

import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../styles/themes";
import {themeState as reduxThemeState} from "../redux/themeSlice";


import ResetStyles from "../styles/ResetStyles";
import GlobalStyles from "../styles/GlobalStyles";
import {useSelector} from "react-redux";

export default function App(): JSX.Element {

    const themeState = useSelector(reduxThemeState)

  return (
      <ThemeProvider theme={themeState === `Dark` ? darkTheme : lightTheme}>

            <Router>

                <ResetStyles/>
                <GlobalStyles/>
                <Routes>

                    <Route path="/" element={<Default/>}>

                        <Route index element={<MainPage/>}/>
                        <Route path="/:locationName/slide=:locationImageIndex/id=:locationId/" element={<LocationPage/>}/>
                    </Route>
                </Routes>
            </Router>
      </ThemeProvider>
  );
};