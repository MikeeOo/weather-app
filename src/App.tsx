import {ThemeProvider} from "styled-components";

import {useAppSelector} from "./redux/store";
import {darkTheme, lightTheme} from "./styles/themes";
import ResetStyles from "./styles/ResetStyles";
import GlobalStyles from "./styles/GlobalStyles";
import RouterPaths from "./components/router/RouterPaths";

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