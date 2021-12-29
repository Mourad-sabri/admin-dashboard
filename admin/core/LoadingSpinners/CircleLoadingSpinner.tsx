import React, { forwardRef } from "react"
import { S_Svg } from "./loadingSpinner.styled"
import { LoadingSplinnerProps } from "./loadingSpinner.types"

const LoadingSpinner = forwardRef((props: LoadingSplinnerProps, ref: any) => {
  return (
    <S_Svg ref={ref} {...props}>
      <svg viewBox="20 20 60 60">
        <circle cx="50" cy="50" r="25"></circle>
      </svg>
    </S_Svg>
  )
})

LoadingSpinner.displayName = "LoadingSpinner"

export default LoadingSpinner
