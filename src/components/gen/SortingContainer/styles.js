import styled from "styled-components/macro"

export const StyledContainer = styled.div`
  width: 100%;
  height: 80px;
`

export const StyledSortWindow = styled.div`
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  background-color: ${(props) =>
    props.opacity ? ({ theme }) => theme.base : "none"};
  opacity: ${(props) => (props.opacity ? "0.7" : "none")};
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  width: 300px;
  height: 60px;
`

export const StyledSortConditions = styled.div`
  z-index: 10;
  position: fixed;
  left: 50%;
  transform: translate(-50%, 0);
  text-align: center;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 60px;
`

export const StyledSelect = styled.select`
  font-size: "14px";
  font-weight: 500;
  height: 25px;
  width: 250px;
  margin: 5px 0;
  border-radius: 10px;
  color: ${({ theme }) => theme.text};
  text-align: center;
  outline: none;
`

export const StyledOption = styled.option`
  font-size: "14px";
  word-wrap: break-word;
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-align: center;
`
export const StyledItem = styled.p`
  font-size: "14px";
  font-weight: 500;
  color: ${({ theme }) => theme.text};
  text-align: center;
`
