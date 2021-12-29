import styled from "styled-components"
import { flexCenter } from "../../../styles/styles"

const S_TableFlexLayout = styled.div<any>`
  /*  */
  min-width: 100%;
  & .tableStyled__table {
    min-width: 100px;
    height: ${(p) => p.height};
    border: 1px solid var(--bg-secondary);
    overflow: auto;
    position: relative;
    border-radius: 5px;
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
    ::-webkit-scrollbar {
      width: 10px;
      height: 10px;
      border-left: 1px solid var(--bg-secondary);
      border-top: 1px solid var(--bg-secondary);
    }

    ::-webkit-scrollbar-thumb {
      background-color: gray;
      border-radius: 11px;
    }
  }

  & .tableStyled__thead {
    width: 100%;
    position: sticky;
    top: 0;
    z-index: 1;
  }

  & .tableStyled__tr {
    :last-child {
      & .tableStyled__td {
        border-bottom: none;
      }
    }
  }

  & .tableStyled__th {
    background-color: var(--bg-secondary);
    height: 35px;
  }

  & .tableStyled__td {
    padding: 5px;
  }

  & .tableStyled__th,
  .tableStyled__td {
    border-right: 2px solid var(--bg-secondary);
    border-bottom: 2px solid var(--bg-secondary);
    padding: 0 5px;
    ${flexCenter}

    :last-child {
      border-right: none;
    }
  }

  & .tableStyled__tableSort,
  .tableStyled__tableFilter {
    width: 30px;
    flex-shrink: 0;
  }

  .tableStyled__tableFilter {
    ${flexCenter}
  }

  & .tableStyled__headertitle {
    width: 100%;
  }

  & .tableStyled__sortIconContainer {
    display: none;
  }

  & .tableStyled__th:hover .tableStyled__sortIconContainer {
    display: flex;
  }

  & .tableStyled__sortIconContainer-isSorted {
    display: flex;
  }

  & .tableSTyled__pagination {
    border: 1px solid var(--bg-secondary);
    border-top: none;
    border-bottom-left-radius: ${(p) => p.theme.rounded.sm};
    border-bottom-right-radius: ${(p) => p.theme.rounded.sm};
    height: 40px;
    ${flexCenter}
  }

  & .tableStyled__buttons {
    display: flex;
    & button {
      margin-right: 3px;
    }
  }

  & .tableStyled__pageSizeSelect {
    & select {
      color: var(--text-color);
      outline: none;
      border: none;
      height: 30px;
      border-radius: ${(p) => p.theme.rounded.sm};

      background-color: var(--bg-secondary);
    }
    margin: 0 5px;
  }

  & .tableStyled__pageIndex {
    ${flexCenter}
    margin: 0 5px;
  }

  & .tableStyled__header {
    border: 1px solid var(--bg-secondary);
    border-bottom: none;
    min-height: 30px;
  }
`

export { S_TableFlexLayout as TableFlexLayout }

S_TableFlexLayout.displayName = "TableLayoutStyled"
