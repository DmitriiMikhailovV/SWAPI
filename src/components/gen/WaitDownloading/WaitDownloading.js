import { StyledBlur, StyledAllPage, StyledContainer } from "./styles"

const WaitDownloading = (show) => (
  <StyledBlur show={show}>
    <StyledAllPage>
      <StyledContainer>LOADING...</StyledContainer>
    </StyledAllPage>
  </StyledBlur>
)

export default WaitDownloading
