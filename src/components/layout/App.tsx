import ResetStyles from "../../styles/ResetStyles";
import GlobalStyles from "../../styles/GlobalStyles";

import MainPage from "../pages/main/MainPage";

function App(): JSX.Element {

  return (
    <>

        <ResetStyles/>
        <GlobalStyles/>
        <MainPage/>
    </>
  );
}

export default App;