import {Outlet} from "react-router-dom";

import {DefaultStyled} from "./Default.styled";
import Header from "../../modules/Header";

const Default = (): JSX.Element => {
    return (
        <DefaultStyled>
            <Header/>
            <Outlet/>
        </DefaultStyled>
    );
};

export default Default;