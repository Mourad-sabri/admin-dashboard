import styled from "styled-components"
import { ButtonsGroupProps } from "./buttonGroup.types"

export const S_ButtonGroup = styled.div<ButtonsGroupProps>`
  /*  */
  min-width: 10px;
  display: flex;

  & > button {
    border-radius: 0;
    :first-child {
      border-bottom-left-radius: ${(p) => p.theme.rounded[p.rounded!]};
      border-top-left-radius: ${(p) => p.theme.rounded[p.rounded!]};
    }
    :last-child {
      border-top-right-radius: ${(p) => p.theme.rounded[p.rounded!]};
      border-bottom-right-radius: ${(p) => p.theme.rounded[p.rounded!]};
    }
  }
  /*  */
`
