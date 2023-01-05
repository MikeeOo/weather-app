import {ILocationWeather} from "../../../../../../types/propsTypes";
import styled from "styled-components";

const MainLocationWeather = ({locationTemp, locationDesc, locationIcon}: ILocationWeather): JSX.Element => {

  return (
      <MainLocationWeatherStyled>
          <img src={locationIcon} alt="weather icon" style={{filter: `invert(0.2)`, maxWidth: "100px"}}/>

          <div>
              <p>{locationTemp}</p>
              <p>{locationDesc}</p>
          </div>
      </MainLocationWeatherStyled>
  );
};

export default MainLocationWeather;

export const MainLocationWeatherStyled = styled.div`
  
  //margin-right: -2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //outline: 2px solid red;
  p {
    //margin: 1.6rem 0 0 0;
  }
  
  img{
    object-fit: cover;
    max-width: 100px;
  }
`;