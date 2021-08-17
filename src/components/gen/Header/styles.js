import styled from "styled-components/macro"
import { Link } from "react-router-dom"

export const StyledHeader = styled.header`
  width: 800px;
  height: 60px;
  /* margin: -50px auto; */
  display: flex;
  z-index: 999;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.element};
  font-weight: 400;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  border-radius: 0 0 20px 20px;
  position: fixed;
  left: 50%;
  top: 30px;
  transform: translate(-50%, -50%);
  /* transition: 0.3s ease-in-out; */

  /* &:hover {
    margin: 0px auto;
  } */
`

export const StyledLink = styled(Link)`
  padding: 0px 20px;
  position: relative;
  text-align: center;
  text-decoration: none;
  color: ${({ theme }) => theme.title};
  background-color: ${({ theme }) => theme.element};
  font-weight: 700;
  font-size: 20px;

  &:after {
    display: block;
    position: absolute;
    bottom: -5px;
    left: 20px;
    width: 0;
    height: 4px;
    border-radius: 0 5px 5px 0px;
    content: "";
    background-color: ${({ theme }) => theme.additional};
    transition: width 0.5s ease-out;
  }

  &:hover:after {
    width: calc(100% - 40px);
    box-shadow: 4px 0px 6px 3px rgba(255, 255, 255, 0.64);
  }
`
