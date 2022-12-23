import styled from "styled-components";

const Header = (): JSX.Element => {

  return (
      <HeaderStyled>


          <h1>🌈MikeeOo's weather-app🌈</h1>
          {/*<h1>Where in the world?</h1>*/}
          <button>Light Mode</button>
      </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  align-items: center;
  background-color: ${({theme}) => theme.color.secondary};
  //background-color: ${({theme}) => theme.color.log};
  
  color: ${({theme}) => theme.color.white};
  display: flex;
  font-size: 1.4rem;
  font-weight: ${({theme}) => theme.weight.bold};
  height: 8rem;
  //padding: 2em;
  //padding: 2em;
  justify-content: space-between;
`

