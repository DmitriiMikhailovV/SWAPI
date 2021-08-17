import styled from "styled-components/macro"

export const StyledHeadline = styled.h1`
  padding: 80px 0px 20px 0px;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
  color: ${({ theme }) => theme.title};
`
