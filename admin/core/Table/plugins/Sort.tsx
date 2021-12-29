import React from "react"
import { SortDown, SortUp } from "react-bootstrap-icons"
import { HeaderGroup } from "react-table"

export const TableSort = ({ column }: { column: HeaderGroup }) => {
  return (
    <span
      {...column.getSortByToggleProps()}
      className={`tableStyled__sortIconContainer ${column.isSorted ? "tableStyled__sortIconContainer-isSorted" : ""}`}
    >
      {column.isSortedDesc ? <SortDown /> : <SortUp />}
    </span>
  )
}
