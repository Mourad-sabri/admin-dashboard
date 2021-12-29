import React, { forwardRef } from "react"
import { NameType, Payload, ValueType } from "recharts/types/component/DefaultTooltipContent"
import { ContentType } from "recharts/types/component/Tooltip"

import { v4 } from "uuid"

import { S_ChartToolTip } from "./tools.styled"

export const CustomChartToolTip = (props: any) => {
  const { active, payload, label, renderLabel } = props
  if (active && payload && payload.length) {
    return (
      <S_ChartToolTip>
        {renderLabel ? renderLabel(props) : <div className="tooltip-label">{label}</div>}
        <div>
          {payload.map((data: Payload<ValueType, NameType>) => {
            return (
              <div className="tooltip" key={v4()}>
                <div className="tooltip-name"> {data.name} : </div>
                <div className="tooltip-value"> {data.value} </div>
              </div>
            )
          })}
        </div>
      </S_ChartToolTip>
    )
  }
  return null
}
