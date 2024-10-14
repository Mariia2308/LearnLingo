import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 8px;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 20px;
  padding: 32px 0;
`;

export const Label = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.28571;
  color: ${(props) => props.theme.colors.textHoverColor};
`;

export const StyledSelect = styled.select`
  border-radius: 14px;
  padding: 12px 16px 12px 18px;
  width: 221px;
  height: 48px;
  outline: none;
  border: none;

  background-color: white;
  transition: all 250ms ease;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.themeOrange};
  }
`;

export const FilterBtn = styled.button`
  border: 1px solid ${(props) => props.theme.colors.themeOrange};
  border-radius: 12px;
  background-color: white;
  padding: 15px;

  color: ${(props) => props.theme.colors.themeOrange};
  font-size: 16px;
  font-weight: bold;

  transition: all 250ms ease;

  &:hover {
    color: black;
    background-color: transparent;
  }
`;
