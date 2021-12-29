import styled from "styled-components"
import { BadgeProps } from "./badge.types"

export const S_Badge = styled.div<any>`
  /*  */
  position: relative;
  min-width: 10px;
  min-height: 10px;

  & .badgeStyled__badge {
    position: absolute;
    top: ${(p) => (p.top && !p.bottom ? p.top : "")}px;
    left: ${(p) => (p.left && !p.rigth ? p.left : "")}px;
    bottom: ${(p) => (p.bottom ? p.bottom : "")}px;
    right: ${(p) => (p.rigth ? p.rigth : "")}px;
    border-radius: ${(p) => (p.rounded !== "full" ? p.theme.rounded[p.rounded!] : "9999px")};
    padding: 1px;
    z-index: 5;
    background-color: orange;
    color: white;
    min-width: 10px;
    min-height: 10px;
    font-size: 13px;
  }
  /*  */
`
