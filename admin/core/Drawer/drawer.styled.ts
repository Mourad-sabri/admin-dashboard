import styled from "styled-components"
import { DrawerProps } from "./drawer.types"

export const S_Drawer = styled.div<DrawerProps>`
  /*  */
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: all 0.2s ease-in-out;
  z-index: 10;

  & .drawerStyled__drawer {
    background-color: var(--bg-primary);
    z-index: 200;
    box-shadow: 1px 0px 7px rgba(0, 0, 0, 0.5);
    position: absolute;
    top: ${(p) => (p.postion !== "bottom" ? 0 : "")};
    bottom: ${(p) => (p.postion !== "top" ? 0 : "")};
    left: ${(p) => (p.postion !== "right" ? 0 : "")};
    right: ${(p) => (p.postion !== "left" ? 0 : "")};
    width: ${(p) => (p.postion === "top" || p.postion === "bottom" ? "100%" : "250px")};
    height: ${(p) => (p.postion === "top" || p.postion === "bottom" ? "250px" : "")};

    transform: ${(p) => (p.postion === "left" ? "translateX(-100%)" : "")};
    transform: ${(p) => (p.postion === "top" ? "translateY(-100%)" : "")};
    transform: ${(p) => (p.postion === "right" ? "translateX(100%)" : "")};
    transform: ${(p) => (p.postion === "bottom" ? "translateY(100%)" : "")};
    transition: transform 0.3s ease-out;
  }

  &.exit {
    opacity: 0;
  }

  &.enter-done {
    opacity: 1;
    pointer-events: visible;
  }

  &.enter-done .drawerStyled__drawer {
    transform: translateX(0);
  }

  &.exit .drawerStyled__drawer {
    transform: ${(p) => (p.postion === "left" ? "translateX(-100%)" : "")};
    transform: ${(p) => (p.postion === "top" ? "translateY(-100%)" : "")};
    transform: ${(p) => (p.postion === "right" ? "translateX(100%)" : "")};
    transform: ${(p) => (p.postion === "bottom" ? "translateY(100%)" : "")};
  }
  /*  */
`
S_Drawer.displayName = "DrawerStyled"
