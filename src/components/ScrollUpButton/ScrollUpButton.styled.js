import styled from "styled-components";

export const Button = styled.div`
  position: fixed;
  width: 100%;
  left: 80%;
  bottom: 60px;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: ${(props) => props.theme.colors.themeOrange};

  transition: all 250ms ease;

  &:hover {
    color: black;
  }

  @media screen and (min-width: 400px) {
    left: 85%;
  }

  @media screen and (min-width: 700px) {
    left: 90%;
  }

  @media screen and (min-width: 1440px) {
    left: 95%;
  }
`;
