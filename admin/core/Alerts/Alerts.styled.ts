import styled, { css } from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { AlertsProps } from "./Alerts.types"

const outlined = (intent: string) => css``

const contained = (intent: string) => css``

export const S_Alerts = styled.div<AlertsProps>`
  /*  */
  padding: 5px;
  width: 100%;
  min-height: 40px;
  border-radius: ${(p) => p.theme.rounded.sm};
  /* background-color: ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--bg-secondary)")};
  color: ${(p) => (p.intent ? "white" : "var(--text-color)")}; */
  display: flex;
  align-items: center;
  font-size: 14px;

  ${(p) => {
    const { variant, intent, theme } = p
    switch (variant) {
      case "contained":
        return css`
          background-color: ${intent ? theme.colors[intent] : "var(--bg-secondary)"};
          color: ${intent ? "white" : "var(--text-color)"};
        `
        break

      case "outlined":
        return css`
          background-color: transparent;
          color: ${intent ? theme.colors[intent] : "var(--text-color)"};
          border: 1px solid ${theme.colors[intent!]};
        `
      default:
        return css`
          background-color: ${intent ? theme.colors[intent] : "var(--bg-secondary)"};
          color: ${intent ? "white" : "var(--text-color)"};
        `
        break
    }
  }}

  & .alertsStyled__icon {
    width: 30px;
    height: 100%;
    ${flexCenter}
    font-size: 20px;
    color: inherit;
    flex-shrink: 0;
  }

  & .alertsStyled__removeIcon {
    width: 30px;
    height: 100%;
    ${flexCenter}
    font-size: 25px;
    flex-shrink: 0;
  }

  & .alertsStyled__message {
    width: 100%;
  }

  opacity: 1;

  &.exit {
    opacity: 0;
    transition: all 0.3s ease-in-out;
  }

  &.exit-done {
    opacity: 0;
  }
  /*  */
`

S_Alerts.displayName = "AlertStyled"
