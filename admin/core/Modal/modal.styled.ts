import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { ModalProps } from "./modal.types"

export const S_Modal = styled.div<ModalProps>`
  /*  */
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.3);
  ${flexCenter}
  opacity: 0;
  transition: all 0.2s ease-in-out;
  pointer-events: none;
  z-index: 10;

  & .modalStyled__content {
    width: 500px;
    min-height: 100px;
    background-color: var(--bg-primary);
    border-radius: 7px;
    transform: translateY(-200px);
    transition: all 0.17s ease-in-out;
  }

  &.exit {
    opacity: 0;
  }

  &.enter-done {
    opacity: 1;
    pointer-events: visible;
  }

  &.enter-done .modalStyled__content {
    transform: translateY(0);
  }

  &.exit .modalStyled__content {
    transform: translateY(200px);
  }

  /*  */
`

S_Modal.displayName = "ModalStyled"
