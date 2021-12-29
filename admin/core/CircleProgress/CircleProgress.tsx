import React, { forwardRef, Ref } from "react"
import { S_CircleProgress } from "./circleProgress.styled"
import { CircleProgressProps } from "./circleProgress.types"
import CountUp from "react-countup"

const CircleProgress = forwardRef((props: CircleProgressProps, ref: Ref<HTMLDivElement>) => {
  // props
  const { percent = 0, size = 130, countUp = true } = props
  return (
    <S_CircleProgress {...props} percent={percent} size={size} ref={ref}>
      <svg viewBox="20 20 60 60">
        <circle cx="50" cy="50" r="27" className="CircleProgressBar__circle2" />
        <circle cx="50" cy="50" r="27" className="CircleProgressBar__circle1" />
      </svg>
      {countUp && (
        <span className="CircleProgressBar__percent">
          <CountUp start={0} end={percent} duration={2} /> %
        </span>
      )}
    </S_CircleProgress>
  )
})

CircleProgress.displayName = "CircleProgress"

export default CircleProgress
