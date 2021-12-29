import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import LoadingSpinner from "../LoadingSpinners/CircleLoadingSpinner"
import { InputProps } from "./inputs.types"

export const S_InputWrapper = styled.div<InputProps>`
  /*  */
  position: relative;
  height: ${(p) => p.theme.size[p.size!]};
  font-size: ${(p) => p.theme.inputfontSize[p.size!]};
  color: ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
  opacity: ${(p) => (p.disabled ? "50%" : "")};

  & .inputStyled__input {
    font-size: inherit;
    width: 100%;
    height: 100%;
    position: relative;
    border: 1px solid ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
    position: relative;
    padding-left: ${(p) => (p.icon ? p.IconWidthSize : 3)}px;
    padding-right: ${(p) => (p.rightIcon && p.isLoading ? 30 + p.rigthIconSize! : p.rightIcon ? p.rigthIconSize : p.isLoading ? 30 : 3)}px;
    border-radius: ${(p) => p.theme.rounded[p.rounded!]};
    transition: box-shadow 0.2s ease-in-out, border 0.2s ease-in-out;
    color: var(--text-color);

    &:focus {
      box-shadow: 0 0 1px 1px ${(p) => (p.intent ? p.theme.colors[p.intent] : "dodgerblue")};
      border: 1px solid ${(p) => (p.intent ? p.theme.colors[p.intent] : "dodgerblue")};
    }

    &:disabled {
      opacity: 50%;
      cursor: not-allowed;
    }
    background-color: ${(p) => (p.disabled ? "var(--bg-secondary)" : "")};
  }

  & .inputStyled__icon {
    position: absolute;
    top: 0px;
    bottom: 0px;
    ${flexCenter}
    min-width: 30px;
    font-size: ${(p) => p.theme.fontSize[p.size!]};
  }

  & .inputStyled__iconsWrapper {
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    ${flexCenter}
    font-size: ${(p) => p.theme.fontSize[p.size!]};
  }

  & .inputStyled__loadingSpinner {
    width: 30px;
    height: 100%;
    ${flexCenter}
  }

  & .inputStyled__rightIcon {
    min-width: 30px;
    height: 100%;
    ${flexCenter}
    padding-right: 2px;
  }
  /*  */
`

export const S_InputLoadingSpinner = styled(LoadingSpinner)<InputProps>`
  /*  */
  width: ${(p) => p.theme.fontSize[p.size!]};
  height: ${(p) => p.theme.fontSize[p.size!]};
  /*  */
`

S_InputWrapper.displayName = "BaseInputStyled"

S_InputLoadingSpinner.displayName = "LoadingSpinnerStyled"
