import styled from "styled-components/macro"

export const StyledBlur = styled.div`
  display: ${(props) => (props.show ? "block" : "none")};
  position: absolute;
  z-index: 5;
  top: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(2px);
`

export const StyledAllPage = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const StyledContainer = styled.div`
  padding: 10px 20px;
  position: relative;
  border-radius: 15px;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  z-index: 6;
  background: ${({ theme }) => theme.element};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`
