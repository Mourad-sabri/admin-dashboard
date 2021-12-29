import { condenseNumber } from "@shopify/condense-number"
import React, { Children } from "react"
import { v4 } from "uuid"
import Tab from "../../core/Tabs/Tab"
import TabsContainer from "../../core/Tabs/TabsContainer"
import { S_ChartContainerTabs } from "./chartContainer.styled"
import { ChartContainerTabsProps, ChartTabProps } from "./chartContainer.types"

const ChartContainerTabs = (props: ChartContainerTabsProps) => {
  // props
  const { children } = props
  return (
    <S_ChartContainerTabs>
      <TabsContainer className="chartContainerTabsStyled">
        {Children.map(children, (child, i) => {
          return (
            <Tab key="i" title={child?.props.title}>
              {child}
            </Tab>
          )
        })}
      </TabsContainer>
    </S_ChartContainerTabs>
  )
}

export default ChartContainerTabs

export const ChartTab = (props: ChartTabProps) => {
  const { children, cards } = props
  return (
    <div className="chartContainerTabsStyled__chartContainer">
      <div className="chartContainerTabsStyled__cardsContainer">
        {cards?.map((card, i) => {
          return (
            <div key={v4()} className="chartContainerTabsStyled__cards">
              <div className="chartContainerTabsStyled__card-title"> {card.title} </div>
              <div className="chartContainerTabsStyled__card-value"> {condenseNumber(card.value!, "en", { maxPrecision: 2 })} </div>
            </div>
          )
        })}
      </div>
      <div className="chartContainerTabsStyled__chart"> {children} </div>
    </div>
  )
}
