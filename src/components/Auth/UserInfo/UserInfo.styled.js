import styled from "styled-components";

export const Greeting = styled.p`
  font-weight: bold;
  font-size: 24px;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserName = styled.span`
  color: ${(props) => props.theme.colors.themeOrange};
`;

export const LogOutBtn = styled.button`
  padding: 14px 14px;
  border-radius: 12px;
  background-color: black;
  font-weight: 700;
  line-height: 1.25;
  /* color: ${(props) => props.theme.colors.themeOrange}; */
  color: white;
  border: none;
  /* background-color: transparent; */
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.themeOrange};
  }
`;
