import styled from "styled-components"
import { RadioProps } from "./radio.types"

export const S_RadioButton = styled.label<RadioProps>`
  & .radioButtonStyled__input {
    display: none;
  }
  border: 1px solid var(--text-color);
  height: 30px;

  & .radioButtonStyled__button {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 3px;
  }

  border-right: none;

  & .radioButtonStyled__input:checked + .radioButtonStyled__button {
    background-color: green;
    color: white;
    border-color: green;
  }
  &:first-child {
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
  }
  &:last-child {
    border-top-right-radius: 5px;
    border-bottom-right-radius: 5px;
    border-right: 1px solid var(--text-color);
  }
`
export const S_RadioButtonGroup = styled.div`
  display: flex;
`
