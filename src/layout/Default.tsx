import {Outlet} from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const Default = (): JSX.Element => {

  return (
      <DefaultStyled>

          <Header/>
          <Outlet/>
      </DefaultStyled>
  );
};

export default Default;

const DefaultStyled = styled.div`
  max-width: 100%;
  min-height: 100vh;
  background-color: ${({theme}) => theme.color.primary};
`