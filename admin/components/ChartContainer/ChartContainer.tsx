import React from "react"
import { Forward } from "react-bootstrap-icons"
import Button from "../../core/Buttons/Button"
import DateInput from "../../core/DateInput/DateInput"
import { S_ChartContainer } from "./chartContainer.styled"
import { ChartContainerProps } from "./chartContainer.types"

export const ChartContainer = (props: ChartContainerProps) => {
  // props
  const { children, title, icon, component, style, className } = props
  return (
    <S_ChartContainer style={style} className={className}>
      <div className="chartContainerStyled__header">
        <div className="chartContainerStyled__title">
          {title}
          {icon && <span className="chartContainerStyled__icon">{icon}</span>}
        </div>
        <div className="chartContainerStyled__component">{component}</div>
      </div>
      <div className="chartContainerStyled__chart"> {children} </div>
    </S_ChartContainer>
  )
}
