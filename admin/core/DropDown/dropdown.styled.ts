import styled from "styled-components"
import { DropDownItemProps, DropDownProps } from "./dropdown.types"

export const S_DropDown = styled.div<DropDownProps>`
  /*  */
  background-color: var(--bg-secondary);
  border-radius: ${(p) => p.theme.rounded.sm};
  /*  */
`

export const S_DropDownItem = styled.div<DropDownItemProps>`
  /*  */
  padding: 4px 7px;
  cursor: ${(p) => (p.disabeld ? " not-allowed" : "default")};
  display: flex;
  align-items: center;
  font-size: 16px;
  &:hover {
    background-color: var(--bg-default);
  }

  & .dropDownItemStyled__icon {
    margin-right: 5px;
  }
  &:first-child {
    border-top-left-radius: ${(p) => p.theme.rounded.sm};
    border-top-right-radius: ${(p) => p.theme.rounded.sm};
  }

  &:last-child {
    border-bottom-left-radius: ${(p) => p.theme.rounded.sm};
    border-bottom-right-radius: ${(p) => p.theme.rounded.sm};
  }

  opacity: ${(p) => (p.disabeld ? "50%" : "")};
  /*  */
`

S_DropDown.displayName = "DropDownStyled"

S_DropDownItem.displayName = "DropDownItemStyled"
