import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LogoLink = styled(NavLink)`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0;
`;

export const LogoText = styled.p`
  padding: 8px;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  letter-spacing: -0.02em;
  color: ${(props) => props.theme.colors.textColor};

  /* ===============animation============ */

  &:hover {
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colors.themeOrange} 0,
      ${(props) => props.theme.colors.textColor} 20%,

      ${(props) => props.theme.colors.textColor} 40%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: shine 2s infinite linear;

    @keyframes shine {
      0% {
        background-position: 0;
      }
      60% {
        background-position: 110px;
      }
      100% {
        background-position: 110px;
      }
    }
  }
`;

export const PagesList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  padding: 20px 0;
`;
export const PagesLink = styled(NavLink)`
  color: ${(props) => props.theme.colors.textColor};
  transition: all 200ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.themeOrange};
  }
`;

export const ListItem = styled.li`
  position: relative;
  text-decoration: none;
  font-weight: 400;
  line-height: 1.25;
  transition: all 200ms ease;

  &:hover {
    font-weight: bold;
  }

  & .active {
    font-weight: bold;
    color: ${(props) => props.theme.colors.themeOrange};
  }

  & .active::after {
    position: relative;
    font-weight: bold;
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    background-color: ${(props) => props.theme.colors.themeOrange};
    border-radius: 2px;
    bottom: -15px;
    left: 0;
  }
`;
