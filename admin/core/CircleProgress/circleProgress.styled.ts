import styled, { keyframes } from "styled-components"
import { CircleProgressProps } from "./circleProgress.types"

const animation = (p: CircleProgressProps) => keyframes`

0% {
    stroke-dasharray: 470;
    stroke-dashoffset: -470; 
}

100% {
    stroke-dasharray: 470;
    stroke-dashoffset: -${p.percent! * 1.68 + 470}
}

`

export const S_CircleProgress = styled.div<CircleProgressProps>`
  /*  */
  height: ${(p) => p.size}px;
  width: ${(p) => p.size}px;
  position: relative;

  & .CircleProgressBar__circle1 {
    /*  */

    fill: none;
    stroke: green;
    stroke-width: 4;
    stroke-linecap: round;
    animation: ${(p) => animation(p)} 2s ease-in-out forwards;
    z-index: 100;
    /*  */
  }

  & .CircleProgressBar__percent {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: ${(p) => p.size! / 6}px;
    font-weight: 900;
  }

  & .CircleProgressBar__circle2 {
    stroke: var(--bg-secondary);
    fill: none;
    stroke-width: 4;
    z-index: -3;
  }
  /*  */
`

S_CircleProgress.displayName = "CircleProgressStyled"
