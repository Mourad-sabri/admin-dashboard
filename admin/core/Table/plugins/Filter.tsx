import React, { Fragment } from "react"
import { Funnel, FunnelFill } from "react-bootstrap-icons"
import { HeaderGroup } from "react-table"
import Input from "../../Inputs/BaseInput"
import Tooltip from "../../Tooltip/Tooltip"

export const TableFilter = ({ column, placeHolder }: { column: HeaderGroup; placeHolder?: (lenght: number) => string }) => {
  const { canFilter, preFilteredRows, filterValue, setFilter } = column!

  const rowsCount = preFilteredRows.length

  const renderFilterInput = (
    <Input
      value={filterValue || ""}
      onChange={(e) => {
        setFilter(e.target.value)
      }}
      placeholder={placeHolder ? placeHolder(rowsCount) : `Search ${rowsCount} records `}
      style={{ backgroundColor: "var(--bg-primary)" }}
    />
  )

  return (
    <Fragment>
      {canFilter ? (
        <Tooltip content={renderFilterInput} padding="0" placement="bottom" trigger="click" interactive>
          {filterValue ? <FunnelFill /> : <Funnel />}
        </Tooltip>
      ) : null}
    </Fragment>
  )
}
