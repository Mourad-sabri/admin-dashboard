import React, { forwardRef, Ref } from "react"
import { S_StaticsCard } from "./staticsCard.styled"
import { StaticsCardProps } from "./staticsCard.types"
import { condenseNumber } from "@shopify/condense-number"

const StaticsCard = forwardRef((props: StaticsCardProps, ref: Ref<HTMLDivElement>) => {
  // props

  const { title, icon, valueIcon, tag, children, value, cardStyle = "style-1", maxPrecision = 2, roundingRule = "down", render } = props

  return (
    <S_StaticsCard {...props} ref={ref}>
      <div className="staticsCardStyled__content">
        <div className="staticsCardStyled__title">
          {title}
          {icon && <span className="staticsCardStyled__icon">{icon}</span>}
        </div>
        <div className="staticsCardStyled__value">
          {valueIcon && <span className="staticsCardStyled__iconValue">{valueIcon}</span>}
          {render ? render(value) : condenseNumber(value, "en", { maxPrecision, roundingRule })}
        </div>
        {tag && cardStyle === "style-1" && <div className="staticsCardStyled__tag">{tag}</div>}
      </div>
      <div className="staticsCardStyled__statics">{children}</div>
    </S_StaticsCard>
  )
})

StaticsCard.displayName = "StaticsCard"

export default StaticsCard
