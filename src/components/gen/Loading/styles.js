import styled, { keyframes } from "styled-components/macro"

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  display: ${(props) => (props.loading ? "block" : "none")};
  border-top: 5px solid ${({ theme }) => theme.title};
  border-right: 5px solid ${({ theme }) => theme.title};
  border-bottom: 5px solid ${({ theme }) => theme.text};
  border-left: 5px solid ${({ theme }) => theme.text};
  box-shadow: 0px 0px 22px -1px ${({ theme }) => theme.text};
  background: transparent;
  width: 60px;
  height: 60px;
  border-radius: 50%;
`

export const SpinnerContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 999;
`

export default Spinner
