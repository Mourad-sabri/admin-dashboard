import styled from "styled-components"
import { bgTransition } from "../../../styles/styles"

export const S_CircleProgressCard = styled.div`
  /*  */
  width: 100%;
  height: 270px;
  background-color: var(--bg-primary);
  border-radius: ${(p) => p.theme.rounded.sm};
  margin-top: 10px;
  ${bgTransition}

  & .cardStyled__card-header {
    width: 100%;
    height: 50px;
    display: flex;
  }

  & .cardStyled__card-header-title {
    width: calc(100% - 50px);
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .cardStyled__card-header-component {
    width: 50px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
  }

  & .cardStyled__card-progress {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  /*  */
`

S_CircleProgressCard.displayName = "ProgressBarCardStyled"
