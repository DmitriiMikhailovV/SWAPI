import styled from "styled-components/macro"

export const StyledContainer = styled.div`
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`

export const StyledFlex = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 0 auto;
  height: ${(props) => (props.empty ? "100vh" : "auto")};
`
