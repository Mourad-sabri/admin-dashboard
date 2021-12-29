import styled from "styled-components"
import { RadioProps } from "./radio.types"

export const S_Radio = styled.label<RadioProps>`
  /*  */
  position: relative;
  margin-left: 35px;
  & .radioStyled__input {
    display: none;
  }

  & .radioStyled__radio {
    padding: 2px;
    border: 1px solid black;
    width: 20px;
    height: 20px;
    position: absolute;
    border-radius: 9999px;
    left: -25px;
    top: 0px;
    background-color: transparent;
  }

  & .radioStyled__radio::before {
    content: "";
    width: 14px;
    height: 14px;
    position: absolute;
    border-radius: 9999px;
    background: green;
    transform: scale(0);
    display: block;
    transition: transform 0.2s ease-in-out;
  }

  & .radioStyled__input:checked + .radioStyled__radio::before {
    transform: scale(1);
  }

  opacity: ${(p) => (p.disabled ? 50 : 100)}%;
  text-decoration: ${(p) => (p.disabled ? "line-through" : "")};
  /*  */
`

S_Radio.displayName = "RadioStyled"
