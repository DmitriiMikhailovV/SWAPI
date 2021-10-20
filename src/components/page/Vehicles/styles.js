import styled from "styled-components/macro"
import { device } from "../../../MobileViewBreackpoints"

export const StyledContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  width: 100%;
`

export const StyledFlex = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  height: ${(props) => (props.empty ? "100vh" : "auto")};

  @media ${device.tabletLandscape} {
    width: 90%;
  }
`
