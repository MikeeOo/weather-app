import RouterPaths from "./components/router/RouterPaths";

import {useAppSelector} from "./redux/store";

import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "./styles/themes";

import ResetStyles from "./styles/ResetStyles";
import GlobalStyles from "./styles/GlobalStyles";

export default function App(): JSX.Element {

    const themeChangeStatus = useAppSelector(state => state.theme.themeChangeStatus);

    return (
        <ThemeProvider theme={themeChangeStatus === `Light` ? darkTheme : lightTheme}>
            <ResetStyles/>
            <GlobalStyles/>
            <RouterPaths/>
        </ThemeProvider>
    );
};