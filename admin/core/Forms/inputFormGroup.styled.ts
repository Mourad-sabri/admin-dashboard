import styled from "styled-components"
import { InputFormGroupProps } from "./inputFormGroup.types"

export const S_InputFormGroup = styled.div<InputFormGroupProps>`
  /*  */
  min-height: 10px;
  min-width: 10px;
  margin-top: 7px;

  & .formGroup__label {
    margin-left: 3px;
    font-size: 15px;
  }

  & .formGroup__input {
    margin-top: 5px;
  }

  & .formGroup__errorMessage {
    margin-top: 4px;
    margin-left: 3px;
    color: ${(p) => p.theme.colors.error};
    font-size: 14px;
  }
  /*  */
`
