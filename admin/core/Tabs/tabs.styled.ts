import styled from "styled-components"
import { bgTransition, flexCenter } from "../../../styles/styles"
import { TabsContainerProps } from "./tabs.types"

export const S_TabsContainer = styled.div<TabsContainerProps>`
  /*  */
  width: 100%;
  min-height: 30px;

  & .tabsContainerStyled__Tabs {
    height: 35px;
    width: 100%;
    border: 1px solid var(--bg-secondary);
    border-bottom: none;
    display: flex;
    background-color: var(--bg-secondary);
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    overflow-x: auto;
    ${bgTransition}

    &::-webkit-scrollbar {
      height: 5px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }
  }

  & .tabsContainerStyled__TabsContentContainer {
    width: 100%;
    min-height: 50px;
    border: 1px solid var(--bg-secondary);
    border-top: none;
    padding: 10px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }

  & .tabsContainerStyled__TabsTitle {
    padding: 3px 7px;
    ${flexCenter}
    cursor: default;
    user-select: none;
    min-width: 50px;
    flex-shrink: 0;
    & span {
      display: flex;
      align-items: center;
    }
  }
  /*  */
`

S_TabsContainer.displayName = "TabsContainerStyled"
