import styled from "styled-components/macro"
import { Link } from "react-router-dom"
import { device } from "../../../MobileViewBreackpoints"

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-image: url(${(props) => props.url});
  background-size: cover;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`

export const StyledWindow = styled.div`
  z-index: 10;
  display: block;
  position: absolute;
  text-align: center;
  background-color: ${({ theme }) => theme.base};
  opacity: 0.7;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 600px;
  height: 300px;

  @media ${device.mobileL} {
    width: 100%;
  }
`

export const StyledLink = styled(Link)`
  z-index: 11;
  width: 150px;
  padding: 10px 0;
  margin: 0 30px;
  border-radius: 15px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.element};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  font-weight: 700;
  font-size: 32px;
  transition: 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      background-color: ${({ theme }) => theme.additional};
    }
  }

  @media ${device.mobileL} {
    margin: 30px 0;
  }
`
