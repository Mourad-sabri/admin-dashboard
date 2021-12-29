import { Fragment, MutableRefObject, useEffect, useMemo, useRef, useState } from "react"
import { useFlexLayout, useTable } from "react-table"
import TextEllipsis from "../TextEllipsis/TextEllipsis"
import { TableFlexLayout } from "./table.styled"
import { DataTableProps } from "./table.types"

const DataTable = (props: DataTableProps) => {
  // props
  const {
    data,
    columns,
    plugin = [],
    defaultColumn,
    renderRows,
    width = "415px",
    height,
    visibleColumns,
    onRowSelected,
    pagination,
    pageListSize,
  } = props
  const { tableHeader, footer } = props

  const plugins = [useFlexLayout, ...plugin]

  // useTable
  const renderDefaumtConumns = useMemo(() => defaultColumn, [plugin])

  const instance = useTable(
    //@ts-ignore
    {
      data,
      columns,
      defaultColumn: renderDefaumtConumns,
      initialState: { pageIndex: 0, pageSize: pageListSize ? pageListSize[0] : 10 },
    },
    ...plugins,
    (hooks) => {
      if (visibleColumns) {
        visibleColumns(hooks.visibleColumns)
      }
    }
  )

  const { getTableProps, headerGroups, getTableBodyProps, rows, prepareRow, selectedFlatRows, page } = instance

  const parentRef = useRef() as MutableRefObject<HTMLDivElement>

  useEffect(() => {
    if (onRowSelected && selectedFlatRows) {
      onRowSelected(selectedFlatRows)
    }
  }, [selectedFlatRows])

  const [_rows, setRows] = useState(page || rows)

  useEffect(() => {
    if (pagination) {
      setRows(page)
    } else {
      setRows(rows)
    }
  }, [pagination, rows, page])

  return (
    <TableFlexLayout width={width} height={height}>
      {tableHeader && <div className="tableStyled__header">{tableHeader(instance)}</div>}
      <div className="tableStyled__table" {...getTableProps()} ref={parentRef}>
        <div className="tableStyled__thead" role="thead">
          {headerGroups.map((headerGroup) => {
            return (
              <div className="tableStyled__tr" {...headerGroup.getHeaderGroupProps({})}>
                {headerGroup.headers.map((col) => {
                  return (
                    <div className="tableStyled__th" {...col.getHeaderProps()}>
                      {/* render Header Title */}
                      <div className="tableStyled__headertitle">
                        <TextEllipsis style={{ display: "flex", justifyContent: "center" }}>{col.render("Header")}</TextEllipsis>
                      </div>
                      {/* reander Sort */}
                      {col.canSort ? <div className="tableStyled__tableSort">{col.render("Sort")}</div> : null}
                      {/* render Filter  */}
                      {col.canFilter ? <div className="tableStyled__tableFilter">{col.render("Filter")}</div> : null}
                    </div>
                  )
                })}
              </div>
            )
          })}
        </div>
        <div className="tableStyled__tbody" {...getTableBodyProps()}>
          {renderRows ? (
            renderRows({ rows: _rows, prepareRow }, parentRef)
          ) : (
            <>
              {_rows.map((row) => {
                prepareRow(row)
                return (
                  <div className="tableStyled__tr" {...row.getRowProps()}>
                    {row.cells.map((cell) => {
                      return (
                        <div className="tableStyled__td" {...cell.getCellProps({})}>
                          {cell.render("Cell")}
                        </div>
                      )
                    })}
                  </div>
                )
              })}
            </>
          )}
        </div>
      </div>
      <Fragment>{pagination ? pagination({ ...instance }) : null}</Fragment>
      <Fragment>{footer ? footer(instance) : null} </Fragment>
    </TableFlexLayout>
  )
}

export default DataTable
