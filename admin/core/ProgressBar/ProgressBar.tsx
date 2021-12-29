import React, { forwardRef, Ref } from "react"
import { S_ProgressBar } from "./progressBar.styled"
import { ProgressBarProps } from "./progressBar.types"
import CountUp from "react-countup"

const ProgressBar = forwardRef((props: ProgressBarProps, ref: Ref<HTMLDivElement>) => {
  const { percent = 0, showCounUp = true } = props
  return (
    <S_ProgressBar {...props} ref={ref}>
      <div className="progressBarStyled__container">
        <div className="progressBarStyled__progress" />
      </div>
      {showCounUp && (
        <div className="progressBarStyled__percent">
          <CountUp start={0} end={percent!} duration={1} /> %
        </div>
      )}
    </S_ProgressBar>
  )
})

export default ProgressBar

ProgressBar.displayName = "Progressbar"
