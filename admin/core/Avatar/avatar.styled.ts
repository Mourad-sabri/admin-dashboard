import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { AvatarGroupProps, AvatarProps } from "./avatar.types"

export const S_Avatar = styled.div<AvatarProps>`
  /*  */
  height: ${(p) => p.theme.size[p.size!]};
  width: ${(p) => p.theme.size[p.size!]};
  border-radius: 9999px;
  ${flexCenter}
  font-weight: 900;
  background-color: ${(p) => (p.backgroundColor ? p.backgroundColor : "orange")};
  color: ${(p) => (p.color ? p.color : "white")};
  cursor: default;
  & .avatarStyled__img {
    width: 100%;
    height: 100%;
    border-radius: 9999px;
  }
  /*  */
`

export const S_AvatarGroups = styled.div<AvatarGroupProps>`
  /*  */
  display: flex;
  position: relative;
  ${S_Avatar}:not(:first-child) {
    margin-left: -22px;
  }

  ${S_Avatar} {
    transition: transform 0.5s ease-in-out;
  }

  ${S_Avatar}:hover:not(:last-child) {
    transform: ${(p) => (p.interactive ? "translateY(-15px)" : "")};
  }
  /*  */
`
