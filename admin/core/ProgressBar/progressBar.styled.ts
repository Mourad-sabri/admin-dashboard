import styled, { keyframes } from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { ProgressBarProps } from "./progressBar.types"

const animation = keyframes`

0% {
   opacity:0.4
}

50% {
    opacity: 0.6;
}

100% {
    opacity: 1;
}

`

const animationWidth = (props: ProgressBarProps) => keyframes`

0% {
   width: 0%;
}

100% {
    width: ${props.percent};
}
`

export const S_ProgressBar = styled.div<ProgressBarProps>`
  /*  */
  width: 100%;
  ${flexCenter}
  & .progressBarStyled__container {
    width: 100%;
    border: 2px solid ${(p) => (p.intent ? p.theme.colors[p.intent] : p.color ? p.color : "gray")};
    height: 10px;
    border-radius: 4px;
  }

  & .progressBarStyled__progress {
    width: ${(p) => p.percent || 0}%;
    background-color: ${(p) => (p.intent ? p.theme.colors[p.intent] : p.color ? p.color : "gray")};
    height: 100%;
    transition: width 1s ease-in-out;
    animation: ${(p) => animationWidth(p)} 1s ease-in-out, ${(p) => (p.animation ? animation : "")} 2s ease-in-out infinite alternate;
  }

  & .progressBarStyled__percent {
    height: 20px;
    width: 55px;
    flex-shrink: 0;
    margin-left: 10px;
    color: var(--text-color);
  }
  /*  */
`

S_ProgressBar.displayName = "ProgressBarStyled"
