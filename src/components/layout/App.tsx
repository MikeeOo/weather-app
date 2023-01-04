import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Default from "./Default"
import MainPage from "../pages/MainPage";
import LocationPage from "../pages/LocationPage";

import {useAppSelector} from "../../redux/store";

import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../../styles/themes";

import ResetStyles from "../../styles/ResetStyles";
import GlobalStyles from "../../styles/GlobalStyles";

export default function App(): JSX.Element {

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus)

  return (
      <ThemeProvider theme={themeChangeStatus === `Light` ? darkTheme : lightTheme}>

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