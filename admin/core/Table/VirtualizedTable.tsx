import React, { forwardRef, Fragment } from "react"
import { TableInstance } from "react-table"
import { useVirtual } from "react-virtual"

export const VirtualizedTable = forwardRef((props: TableInstance, ref: any) => {
  const { rows, prepareRow } = props

  const { totalSize, virtualItems } = useVirtual({
    parentRef: ref,
    size: rows.length,
  })
  return (
    <div
      style={{
        position: "relative",
        height: totalSize,
      }}
    >
      {virtualItems.map((virtualItem) => {
        const row = rows[virtualItem.index]
        prepareRow(row)
        return (
          <div
            className="tableStyled__tr"
            {...row.getRowProps({
              style: {
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: virtualItem.size,
                transform: `translateY(${virtualItem.start}px)`,
              },
            })}
          >
            {row.cells.map((cell: any) => {
              return (
                <div className="tableStyled__td" {...cell.getCellProps()}>
                  {cell.render("Cell")}
                </div>
              )
            })}
          </div>
        )
      })}
    </div>
  )
})
