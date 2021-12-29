import { ReactElement, Ref } from "react"
import { TableInstance, UseTableHooks } from "react-table"

// the Datatable may look very complicated some times if you have any questions you can contact us any time

export interface DataTableProps {
  data: any[] // table data
  columns: any[] // table columns
  pageListSize?: number[]
  width?: string
  height?: string
  onRowSelected?: (selectedRows?: any[]) => void
  visibleColumns?: (hook?: UseTableHooks) => any[]
  pagination?: (props?: any) => JSX.Element
  plugin?: UseTableHooks[] // table hooks plugin
  defaultColumn?: Object
  renderRows?: (props?: any, ref?: Ref<HTMLDivElement>) => JSX.Element // render rows with other config ex: virtualized rows
  tableHeader?: (props?: TableInstance) => ReactElement // custom table header
  footer?: (instance: TableInstance) => JSX.Element // custom table footer
}

export interface dataTablePaginationProps extends TableInstance {
  pageListSize?: any[]
}
