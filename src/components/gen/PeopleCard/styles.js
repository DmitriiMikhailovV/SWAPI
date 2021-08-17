import styled from "styled-components/macro"

export const StyledContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`

export const StyledCard = styled.div`
  width: 240px;
  margin: 10px;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  background-color: ${({ theme }) => theme.element};
  display: flex;
  flex-direction: column;
  transition: 0.3s ease-in-out;

  @media (hover: hover) {
    &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.additional};
    }
  }
`

export const StyledItem = styled.p`
  font-size: ${(props) => (props.title ? "18px" : "14px")};
  font-weight: 500;
  margin: 5px;
  color: ${(props) =>
    props.title ? ({ theme }) => theme.title : ({ theme }) => theme.text};
  text-decoration: ${(props) => (props.title ? "underline" : "none")};
`
