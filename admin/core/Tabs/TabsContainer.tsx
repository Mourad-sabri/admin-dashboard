import { Children, forwardRef, Ref, useState } from "react"
import { S_TabsContainer } from "./tabs.styled"
import { TabsContainerProps } from "./tabs.types"

const TabsContainer = forwardRef((props: TabsContainerProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { children } = props

  const [tabKey, setTabKey] = useState<any>(0)

  return (
    <S_TabsContainer ref={ref} {...props}>
      <div className="tabsContainerStyled__Tabs">
        {Children.map(children, (child, i) => {
          return (
            <div
              onClick={() => setTabKey(i)}
              style={tabKey === i ? { borderBottom: "3px solid green" } : undefined}
              key={i}
              className="tabsContainerStyled__TabsTitle"
            >
              <span> {child!.props.icon} </span>
              <span>{child!.props.title}</span>
            </div>
          )
        })}
      </div>
      <div className="tabsContainerStyled__TabsContentContainer">
        {Children.map(children, (child, i) => {
          if (i === tabKey) {
            return child
          }
        })}
      </div>
    </S_TabsContainer>
  )
})

TabsContainer.displayName = "TabsContainer"

export default TabsContainer
