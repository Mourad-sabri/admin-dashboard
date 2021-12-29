import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { AlertModalProps } from "./alertModal.type"

export const S_AlertModal = styled.div<AlertModalProps>`
  /*  */
  padding: 5px;

  & .alertModalStyled__container {
    display: flex;
  }

  & .alertModalStyled__icon {
    font-size: 30px;
    ${flexCenter}
    width: 50px;
    flex-shrink: 0;
    color: ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
  }

  & .alertModalstyled__message {
    max-height: 300px;
    overflow-y: auto;
  }

  & .alertModalStyled__buttons {
    ${flexCenter}
    justify-content: flex-end;
    margin-top: 5px;
  }

  & .alertModalStyled__cancelButton {
    margin-right: 10px;
  }
  /*  */
`

S_AlertModal.displayName = "ALertModalStyled"
