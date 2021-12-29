import styled from "styled-components"
import { ButtonProps } from "./button.types"
import { darken } from "polished"
import LoadingSpinner from "../LoadingSpinners/CircleLoadingSpinner"
import { flexCenter } from "../../../styles/styles"

export const S_Button = styled.button<ButtonProps>`
  /*  */
  ${flexCenter}
  min-width: 30px;
  user-select: none;
  white-space: nowrap;

  /* apply  variant styling only if the intent color provided otherwise use default styling  */

  background-color: ${(p) => {
    const { intent, variant } = p
    if (intent && variant === "contained") {
      return p.theme.colors[p.intent!]
    } else if (intent) {
      return "transparent"
    } else if (variant === "contained") {
      return "var(--bg-secondary)"
    } else {
      return "transparent"
    }
  }};

  /* apply white color if the intent color provided && apply intent color if the variant == "outlined" or "text" otherwise inherit body color  */

  color: ${(p) => (p.intent && p.variant === "contained" ? "white" : p.intent ? p.theme.colors[p.intent] : "inherit")};
  border: 1.5px solid
    ${(p) => {
      const { intent, variant } = p
      if (intent && variant === "text") {
        return "transparent"
      } else if (intent) {
        return p.theme.colors[p.intent!]
      } else if (variant === "text") {
        return "transparent"
      } else {
        return "var(--bg-secondary)"
      }
    }};

  height: ${(p) => p.theme.size[p.size!]};
  font-size: ${(p) => p.theme.fontSize[p.size!]};
  border-radius: ${(p) => p.theme.rounded[p.rounded!]};
  padding: 3px 5px;
  color: rgba(orange, 1);

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    background-color: ${(p) =>
      p.variant !== "contained" && p.intent
        ? `${p.theme.colors[p.intent]}17`
        : p.intent && p.variant === "contained"
        ? `${darken(0.1, p.theme.colors[p.intent])}`
        : ``};

    opacity: ${(p) => (!p.intent ? "80%" : "")};
  }

  box-shadow: ${(p) => (p.variant !== "text" ? `0 0 2px 0.5px ${p.intent ? `${p.theme.colors[p.intent]}70` : "var(--bg-secondary)29"}` : "")};

  transition: background-color 0.2s ease-in-out;

  &:disabled {
    opacity: 50%;
    cursor: not-allowed;
  }

  & .buttonStyled__loading {
    height: 100%;
    ${flexCenter}
  }

  & .buttonStyled__left-icon {
    height: 100%;
    ${flexCenter}
  }

  & .buttonStyled__right-icon {
    height: 100%;
    ${flexCenter}
  }

  & .buttonStyled__title {
    ${flexCenter}
    width: 100%;
    margin: 0 5px;
    color: inherit;
  }

  /*  */
`

export const S_LoadingSpinner = styled(LoadingSpinner)<ButtonProps>`
  /*  */
  width: ${(p) => (p.size === "sm" ? 20 : p.size === "xl" ? 30 : p.size === "lg" ? 25 : 23)}px;
  height: ${(p) => (p.size === "sm" ? 20 : p.size === "xl" ? 30 : p.size === "lg" ? 25 : 23)}px;
  /* override stroke color */
  & > svg > circle {
    stroke: ${(p) => (p.intent && p.variant === "contained" ? "white" : p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
  }
  /*  */
`

S_Button.displayName = "ButtonStyled"

S_LoadingSpinner.displayName = "LoadingSpinnerStyled"
