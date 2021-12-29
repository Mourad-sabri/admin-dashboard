import styled, { keyframes } from "styled-components"
import { LoadingSplinnerProps } from "./loadingSpinner.types"

export const rotate = keyframes`
  from {
      transform:rotate(0deg)
  }
  to {
    transform:rotate(360deg)
  }
`

//

export const color = keyframes`
 100% , 0% {
      color:green;
  }
  25% {
    color:blue:
  }
  50% {
    color:orange
  }
  75% {
    color:yellow
  }
`

export const dash = keyframes`
  0% {
    stroke-dasharray: 1,200;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89,200;
    stroke-dashoffset: -150;
  }
`

export const S_Svg = styled.div<LoadingSplinnerProps>`
  height: ${(p) => (p.height ? p.height : 35)}px;
  width: ${(p) => (p.width ? p.width : 35)}px;
  & svg {
    animation: ${rotate} 1s linear infinite;
  }

  & circle {
    /*  */
    animation: ${color} 6s ease-in-out infinite, ${dash} 1.5s ease-in-out infinite;
    fill: none;
    stroke: var(--text-color);
    stroke: ${(p) => (p.color ? p.color : "")};
    stroke-width: 5;
    stroke-linecap: round;
    /*  */
  }
`
