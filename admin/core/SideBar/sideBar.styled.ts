import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { SideBarItemProps, SideBarProps } from "./sideBar.types"

export const S_SideBar = styled.div<SideBarProps>`
  /*  */
  width: ${(p) => (p.isOpen ? "230px" : "50px")};
  height: 100%;
  padding: 5px 2px;
  transition: width 0.3s ease-in-out;
  flex-shrink: 0;

  & .sideBarStyled__container {
    border: 1px solid ${(p) => (p.border ? "var(--text-color)" : "transparent")};
    height: 100%;
    border-radius: ${(p) => p.theme.rounded.sm};
    padding: 0 3px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 5px;
    }
  }

  & .sideBarStyled__subMenu {
    padding-left: 23px;
  }

  & .ReactCollapse--collapse {
    transition: height 200ms;
  }
  /*  */
`

export const S_SideBarItem = styled.div<SideBarItemProps>`
  /*  */
  & .sideBarStyled__item {
    width: 100%;
    height: 35px;
    display: flex;
    margin-top: 2px;
    cursor: default;
    border-radius: ${(p) => p.theme.rounded.sm};
    &:hover {
      background-color: var(--bg-secondary);
    }
    background-color: ${(p) => (p.isActive ? "var(--bg-secondary)" : "")};
  }

  & .sideBarStyled__icon {
    height: 100%;
    ${flexCenter}
    flex-shrink: 0;
    transition: width 0.2s ease-in-out;
  }

  & .sideBarStyled__title {
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: start;
    padding-left: 3px;
    transition: display 0.4s ease-in-out;
  }
`

export const S_SideBarItemsContainer = styled.div`
  min-width: 100px;
  min-height: 10px;
  max-height: 250px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 11px;
  }

  & ${S_SideBarItem} {
    & .sideBarStyled__item {
      padding-left: 10px;
      padding-right: 10px;
      & :hover {
        background-color: var(--bg-primary);
      }
    }
  }
`

S_SideBar.displayName = "SideBarStyled"

S_SideBarItem.displayName = "SideBarItemStyled"
