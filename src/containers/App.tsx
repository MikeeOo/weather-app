import RouterPaths from "../router/RouterPaths";

import {useAppSelector} from "../redux/store";

import {ThemeProvider} from "styled-components";
import {darkTheme, lightTheme} from "../styles/common/themes";

import ResetStyles from "../styles/common/ResetStyles";
import GlobalStyles from "../styles/common/GlobalStyles";

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