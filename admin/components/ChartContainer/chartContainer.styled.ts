import styled from "styled-components"
import { bgTransition, BoxShadow, flexCenter } from "../../../styles/styles"

export const S_ChartContainer = styled.div`
  /*  */
  width: 100%;
  height: 350px;
  border-radius: ${(p) => p.theme.rounded.sm};
  background-color: var(--bg-primary);
  margin-top: 5px;
  ${BoxShadow} // apply box-shadow
  ${bgTransition} // apply transiton for bg color change

  & .chartContainerStyled__header {
    width: 100%;
    height: 70px;
    display: flex;
  }

  & .chartContainerStyled__chart {
    width: 100%;
    height: calc(100% - 70px);
  }

  & .chartContainerStyled__title {
    width: 50%;
    height: 100%;
    ${flexCenter}
    justify-content: flex-start;
    padding-left: 30px;
    font-size: 23px;
  }

  & .chartContainerStyled__component {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .chartContainerStyled__icon {
    display: flex;
    margin-left: 7px;
    font-size: 17px;
    margin-top: 5px;
  }
  /*  */
`

export const S_ChartContainerTabs = styled.div`
  /*  */
  margin-top: 7px;

  & .chartContainerTabsStyled__chartContainer {
    min-height: 400px;
    width: 100%;
  }

  & .chartContainerTabsStyled__chart {
    height: 300px;
    width: 100%;
  }
  & .chartContainerTabsStyled__cardsContainer {
    min-height: 100px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
  }

  & .chartContainerTabsStyled__cards {
    ${bgTransition}
    height: 100px;
    width: 200px;
    margin-right: 3px;
    background-color: var(--bg-primary);
    border-radius: ${(p) => p.theme.rounded.sm};
  }

  & .chartContainerTabsStyled__card-title {
    width: 100%;
    height: 50px;
    ${flexCenter}
    font-size: 23px;
  }

  & .chartContainerTabsStyled__card-value {
    width: 100%;
    height: 50px;
    ${flexCenter}
    font-size: 23px;
  }
  /*  */
`

S_ChartContainer.displayName = "ChartContainerStyled"

S_ChartContainerTabs.displayName = "ChartContainerTabsStyled"
