import styled, { css } from "styled-components"
import { flexCenter } from "../../../styles/styles"
import { SelectInputProps } from "./select.types"

export const S_Select = styled.div<SelectInputProps>`
  /*  */
  width: 300px;
  min-height: ${(p) => p.theme.size[p.size!]};
  border: 1px solid ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
  border-radius: ${(p) => p.theme.rounded.sm};
  display: flex;
  align-items: center;
  font-size: ${(p) => p.theme.inputfontSize[p.size!]};
  color: ${(p) => (p.intent ? p.theme.colors[p.intent] : "var(--text-color)")};
  opacity: ${(p) => (p.disabled ? "50%" : "")};
  border-radius: ${(p) => p.theme.rounded[p.rounded!]};
  ${(p: any) =>
    p.isFocus && !p.disabled
      ? css`
          box-shadow: 0 0 1px 1px ${(p: any) => (p.intent ? p.theme.colors[p.intent] : "dodgerblue")};
          border: 1px solid ${(p: any) => (p.intent ? p.theme.colors[p.intent] : "dodgerblue")};
        `
      : null}

  & .selectStyled__input {
    height: 100%;
    color: var(--text-color);

    transition: box-shadow 0.2s ease-in-out, border 0.2s ease-in-out;
    color: inherit;
  }

  & .selecteStyled__icon {
    height: 100%;
    ${flexCenter}
    min-width: 30px;
    font-size: ${(p) => p.theme.fontSize[p.size!]};
  }

  & .selectStyled__select {
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }

  & .inputStyled__loadingSpinner {
    width: 30px;
    height: 100%;
    justify-content: center;
    align-items: center;
    font-size: ${(p) => p.theme.fontSize[p.size!]};
  }

  & .selectStyled__InputContainer {
    /* width: 100%; */
    height: 100%;
    overflow: hidden;
    padding-left: 5px;
  }

  & .selectStyled__tags {
    min-width: 10px;
    height: 100%;
    border: 1px solid black;
    display: flex;
    flex-wrap: wrap;
  }
  /*  */
`

export const S_SelectOptionsList = styled.div`
  /*  */
  width: 100%;
  min-height: 30px;
  background-color: var(--bg-secondary);
  border-radius: 5px;
  max-height: 200px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 11px;
  }

  & .selectStyled__option {
    min-height: 30px;
    display: flex;
    align-items: center;
    padding-left: 7px;
    cursor: default;
  }
  & .selectStyled__icon {
    margin-right: 5px;
  }
  & .selectStyled__option[data-disabled="true"] {
  }

  & .selectStyled__no-options {
    width: 100%;
    height: 30px;
    ${flexCenter}
  }
  /*  */
`

S_Select.displayName = "Select"

S_SelectOptionsList.displayName = "Option"
