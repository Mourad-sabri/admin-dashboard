import React from "react"
import { S_CircleProgressCard } from "./circleProgressCard.styled"
import { CircleProgressCardProps } from "./circleProgressCard.types"

const CircleProgressCard = (props: CircleProgressCardProps) => {
  const { title, component, children, className, style } = props
  return (
    <S_CircleProgressCard className={className} style={style}>
      <div className="cardStyled__card-header">
        <div className="cardStyled__card-header-title">{title} </div>
        <div className="cardStyled__card-header-component">{component}</div>
      </div>
      <div className="cardStyled__card-progress">{children}</div>
    </S_CircleProgressCard>
  )
}

export default CircleProgressCard
