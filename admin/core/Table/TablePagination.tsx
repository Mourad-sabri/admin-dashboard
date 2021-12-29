import React from "react"
import { ChevronDoubleLeft, ChevronDoubleRight, ChevronLeft, ChevronRight } from "react-bootstrap-icons"
import Button from "../Buttons/Button"
import { dataTablePaginationProps } from "./table.types"

const TablePagination = (props: dataTablePaginationProps) => {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
    pageListSize = [10, 100, 200],
  } = props
  return (
    <div className="tableSTyled__pagination">
      <div className="tableStyled__buttons">
        <Button size="sm" icon={<ChevronDoubleLeft />} onClick={() => gotoPage(0)} disabled={!canPreviousPage} />
        <Button size="sm" icon={<ChevronLeft />} onClick={() => previousPage()} disabled={!canPreviousPage} />
        <Button size="sm" icon={<ChevronRight />} onClick={() => nextPage()} disabled={!canNextPage} />
        <Button size="sm" icon={<ChevronDoubleRight />} onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage} />
      </div>
      <div className="tableStyled__pageSizeSelect">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value))
          }}
        >
          {pageListSize.map((o) => {
            return (
              <option value={o} key={o}>
                show {o}
              </option>
            )
          })}
        </select>
      </div>
      <div className="tableStyled__pageIndex">
        page {pageIndex + 1} of {pageOptions.length}
      </div>
    </div>
  )
}

export default TablePagination
