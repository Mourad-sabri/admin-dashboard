import styled, { css } from "styled-components"
import { flexCenter } from "../../../styles/styles"

export const S_CheckBox = styled.label<any>`
  /*  */
  & .checkboxStyled__input {
    display: none;
  }

  & .checkboxStyled__label {
    position: relative;
    margin-left: 35px;
  }

  & .checkboxStyled__label::before {
    content: " ";
    position: absolute;
    width: 18px;
    height: 18px;
    border: 1px solid var(--text-color);
    left: -25px;
    border-radius: 5px;

    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  }

  & .checkboxStyled__input:checked + .checkboxStyled__label::before {
    background-color: ${(p) => (p.color ? p.color : "green")};
    content: "✓";
    ${flexCenter}
    color: white;
    font-size: 17px;
    font-weight: 900;
  }

  opacity: ${(p) => (p.disabled ? 50 : 100)}%;

  ${(p) =>
    p.disabled
      ? css`
          cursor: not-allowed;
        `
      : null}/*  */
/*  */
`

S_CheckBox.displayName = "CheckBoxStyled"
