import styled from "styled-components";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const BtnLogin = styled.button`
  padding: 20px 0;
  font-weight: 700;
  line-height: 1.25;
  color: ${(props) => props.theme.colors.textColor};
  border: none;
  background-color: transparent;
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.themeOrange};
  }
`;

export const BtnReg = styled.button`
  padding: 20px 0;
  font-weight: 700;
  line-height: 1.25;
  color: white;
  border: none;
  background-color: transparent;
  transition: all 250ms ease;

  &:hover {
    color: ${(props) => props.theme.colors.themeOrange};
  }
`;

export const SvgLogin = styled.svg`
  fill: none;
  stroke: ${(props) => props.theme.colors.themeOrange};
`;

export const AuthList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 14px;
`;

export const AuthContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const RegLi = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;

  border-radius: 12px;
  padding: 14px 39px;
  width: 166px;
  height: 48px;
  cursor: pointer;

  background: ${(props) => props.theme.colors.textColor};
`;

export const LoginModal = styled(Modal)`
  overflow-y: scroll;
  position: relative;
  border-radius: 30px;
  max-width: 565px;
  min-height: 505px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 64px;
  border: 1px solid ${(props) => props.theme.colors.themeOrange};
`;

export const RegModal = styled(Modal)`
  overflow-y: scroll;
  position: relative;
  border-radius: 30px;
  max-width: 565px;
  min-height: 599px;
  background-color: white;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  transform: translate(-50%, -50%);
  padding: 64px;
  border: 1px solid ${(props) => props.theme.colors.themeOrange};
`;
