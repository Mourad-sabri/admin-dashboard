import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { DividerProps } from "./divider.types"

export const S_Divider = styled.div<DividerProps>`
  /*  */
  height: 15px;
  width: 100%;
  font-size: 13px;
  ${flexCenter}
  margin-top: ${(p) => (p.spaceTop ? p.spaceTop : 0)}px;
  margin-bottom: ${(p) => (p.spaceBottom ? p.spaceBottom : 0)}px;

  & .dividerStyled__div {
    width: 100%;
    border-top: 1.7px solid var(--text-color);
  }

  & .dividerStyled__title {
    flex-shrink: 0;
    padding: 0 3px;
  }
  /*  */
`

S_Divider.displayName = "DividerStyled"
