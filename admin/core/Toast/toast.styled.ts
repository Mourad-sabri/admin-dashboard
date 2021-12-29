import styled, { css } from "styled-components"
import { ToastProps } from "./toast.types"

export const S_Toast = styled.div<any>`
  /*  */
  min-width: 300px;
  min-height: 35px;
  background-color: ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--bg-secondary)")};
  color: ${(p) => (p.intent ? "white" : "var(--text-color)")};
  border-radius: ${(p) => p.theme.rounded.sm};
  z-index: 100;
  display: flex;
  position: fixed;
  align-items: center;
  max-width: 500px;
  padding: 3px 2px;
  font-size: 14px;
  transition: transform 0.2s ease-in-out;
  ${(p) => {
    const { position } = p
    switch (position) {
      case "top":
        return css`
          top: 10px;
          left: 50%;
          transform: translate(-50%);
        `
        break
      case "top-left":
        return css`
          top: 10px;
          left: 10px;
        `
        break
      case "top-right":
        return css`
          top: 10px;
          right: 10px;
        `
        break

      case "bottom":
        return css`
          bottom: 10px;
          left: 50%;
          transform: translate(-50%);
        `
        break
      case "bottom-left":
        return css`
          bottom: 10px;
          left: 10px;
        `
        break
      case "bottom-right":
        return css`
          bottom: 10px;
          right: 10px;
        `
        break

      default:
        return css`
          top: 10px;
          left: 50%;
          transform: translate(-50%);
        `
        break
    }
  }}

  & .toastStyled__icon {
    width: 30px;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-shrink: 0;
    font-size: 20px;
  }

  & .toastStyled__removeButton {
    font-size: 25px;
    width: 30px;
    justify-content: center;
    height: 100%;
    display: flex;
    flex-shrink: 0;

    &:hover {
      opacity: 60%;
    }
  }

  & .toastStyled__button {
    color: inherit;
    padding: 2px 5px;
    border-radius: ${(p) => p.theme.rounded.sm};
    box-shadow: 0 0 0px 1.5px;
    margin-left: 9px;
  }

  & .toastStyled__message {
    text-align: justify;
  }

  &.enter,
  &.exit {
    ${(p) => {
      switch (p.position) {
        case "top":
          return css`
            transform: translateY(-200px);
          `
          break
        case "top-right":
          return css`
            transform: translateX(200px);
          `
          break
        case "top-left":
          return css`
            transform: translateX(-200px);
          `
          break
        case "bottom":
          return css`
            transform: translateY(200px);
          `
          break

        case "bottom-right":
          return css`
            transform: translateX(200px);
          `
          break
        case "bottom-left":
          return css`
            transform: translateX(-200px);
          `
          break

        default:
          return css`
            transform: translateY(-200px);
          `
          break
      }
    }}
  }
  /*  */
`

S_Toast.displayName = "ToastStyled"
