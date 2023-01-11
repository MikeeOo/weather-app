import styled from "styled-components";
import {Link} from "react-router-dom";

export const LocationCardStyled = styled.div`
  background-color: ${({theme}) => theme.color.elements};
  font-size: 1.4rem;
  margin: 4.2rem auto 0 auto;
  max-width: 19em;
  border-radius: 10px;
`;

export const LocationImgContainer = styled.div`
  position: relative;
`;

export const LocationName = styled.h2`
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
  z-index: 1;
`;

export const LinkStyled = styled(Link)`
  display: block;
  overflow: hidden;
  border-radius: 10px 10px 0 0;
`;

export const ImgStyled = styled.img`
  position: relative;
  width: 100%;
  max-width: 100%;
  height: 12em;
  object-fit: cover;
  transition: all .5s ease-in-out;

  &:hover {
    transform: scale(1.3);
    filter: brightness(50%);
  };
`;

export const ClickInfo = styled.div`
  position: absolute;
  color: ${({theme}) => theme.color.text};
  background-color: ${({theme}) => theme.color.elements};
  border-radius: 0 5px 0 0;
  padding: 0.25em;
  bottom: 0;
  font-weight: 700;
`;