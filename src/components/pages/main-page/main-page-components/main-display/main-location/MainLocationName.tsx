import styled from "styled-components";

const MainLocationName = ({locationName}: {locationName?: string}): JSX.Element => {

  return (
      <MainLocationNameStyled>
          <h2>{locationName}</h2>
      </MainLocationNameStyled>
  );
};

export default MainLocationName;

export const MainLocationNameStyled = styled.div`
  background-color: ${({theme}) => theme.color.elements};
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-size: 1.8rem;
  padding: 0.5em 0;
  border-radius: 5px;
  font-weight: 700;
  width: 100%;
  max-width: 50%;
`