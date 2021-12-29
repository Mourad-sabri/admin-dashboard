import styled from "styled-components"

export const S_ChartToolTip = styled.div`
  /*  */
  min-height: 50px;
  min-width: 100px;
  background-color: var(--bg-secondary);
  color: var(--text-color);
  padding: 5px;
  border-radius: ${(p) => p.theme.rounded.sm};

  & .tooltip {
    width: 100%;
    min-height: 30px;
    display: flex;
  }

  & .tooltip-name {
    margin-right: 5px;
  }

  & .tooltip-label {
    width: 100%;
    min-height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /*  */
`
