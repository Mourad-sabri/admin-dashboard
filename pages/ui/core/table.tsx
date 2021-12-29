import Head from "next/head"
import { Fragment, ReactElement } from "react"
import styled from "styled-components"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import faker from "faker"
import DataTable from "../../../admin/core/Table/Table"

import { selectionTable } from "../../../admin/core/Table/selection"
import { useFilters, usePagination, useRowSelect, useSortBy } from "react-table"
import { TableSort } from "../../../admin/core/Table/plugins/Sort"
import { TableFilter } from "../../../admin/core/Table/plugins/Filter"
import TablePagination from "../../../admin/core/Table/TablePagination"
import { VirtualizedTable } from "../../../admin/core/Table/VirtualizedTable"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  & .title {
    min-height: 70px;
  }
`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

const data2 = Array(5000)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

const renderSimpleTableCode = () => `

  const Container = styled.div\`
  & .title {
    min-height: 70px;
  }
\`

const columns = [
    { Header: "Order N°", accessor: "orderNumber" },
    { Header: "Product Name", accessor: "productName" },
    { Header: "Product Price", accessor: "productPrice" },
    { Header: "status", accessor: "status" },
  ]

  const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

 function Table() {
     return (
        <Container>
            <DataTable
            data={data}
            columns={columns}
            />
      </Container>
     )
 } 


  `

const renderSortableTableCode = () => `
import { TableSort } from "../../../asmaa/core/Table/plugins/Sort"
import {  useRowSelect, useSortBy } from "react-table"
import DataTable from "../../../asmaa/core/Table/Table"
import { selectionTable } from "../../../asmaa/core/Table/selection"

const Container = styled.div\`
& .title {
  min-height: 70px;
}
\`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

function Table() {
   return (
      <Container>
      <Datatable
            data={data}
            columns={columns}
            plugin={[useSortBy, useRowSelect]}
            defaultColumn={{
                Sort: TableSort,
            }}
            visibleColumns={(col) => {
                return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
                })
            }}
          />
    </Container>
   )
} 

`

const renderSelectionTableCode = () => `
import {  useRowSelect } from "react-table"
import DataTable from "../../../asmaa/core/Table/Table"
import { selectionTable } from "../../../asmaa/core/Table/selection"

const Container = styled.div\`
& .title {
  min-height: 70px;
}
\`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

function Table() {
   return (
      <Container>
      <DataTable
      data={data2}
      columns={columns}
      plugin={[useFilters, useSortBy, usePagination, useRowSelect]}
      defaultColumn={{
        Sort: TableSort,
        Filter: TableFilter,
      }}
      visibleColumns={(col) => {
        return col.push((__columns: any) => {
          return [selectionTable(), ...__columns]
        })
      }}
      renderRows={(instance, ref) => {
        return <VirtualizedTable {...instance} ref={ref} />
      }}
    />
    </Container>
   )
} 



`

const renderFilterTableCode = () => `

import { TableSort } from "../../../asmaa/core/Table/plugins/Sort"
import {  useRowSelect, useSortBy, useFilters } from "react-table"
import DataTable from "../../../asmaa/core/Table/Table"
import { selectionTable } from "../../../asmaa/core/Table/selection"
import { TableFilter } from "../../../asmaa/core/Table/plugins/Filter"

const Container = styled.div\`
& .title {
  min-height: 70px;
}
\`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

function Table() {
   return (
      <Container>
      <DataTable
            data={data}
            columns={columns}
            plugin={[useFilters, useSortBy, useRowSelect]}
            defaultColumn={{
                Sort: TableSort,
                Filter: TableFilter,
            }}
            visibleColumns={(col) => {
                return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
                })
            }}
          />
    </Container>
   )
} 

`

const renderPaginationTableCode = () => `
import { TableSort } from "../../../asmaa/core/Table/plugins/Sort"
import {  useRowSelect, useSortBy, useFilters, usePagination } from "react-table"
import DataTable from "../../../asmaa/core/Table/Table"
import { selectionTable } from "../../../asmaa/core/Table/selection"
import { TableFilter } from "../../../asmaa/core/Table/plugins/Filter"
import TablePagination from "../../../asmaa/core/Table/TablePagination"


const Container = styled.div\`
& .title {
  min-height: 70px;
}
\`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

function Table() {
   return (
      <Container>
           <DataTable
                data={data}
                columns={columns}
                plugin={[useFilters, useSortBy, usePagination, useRowSelect]}
                defaultColumn={{
                    Sort: TableSort,
                    Filter: TableFilter,
                }}
                visibleColumns={(col) => {
                    return col.push((__columns: any) => {
                    return [selectionTable(), ...__columns]
                    })
                }}
                width="280px"
                pagination={(instance) => <TablePagination {...instance} />}
                />
    </Container>
   )
} 
`

const renderVirtualiezdTableCode = () => `
import { TableSort } from "../../../asmaa/core/Table/plugins/Sort"
import {  useRowSelect, useSortBy, useFilters } from "react-table"
import DataTable from "../../../asmaa/core/Table/Table"
import { selectionTable } from "../../../asmaa/core/Table/selection"
import { TableFilter } from "../../../asmaa/core/Table/plugins/Filter"
import { VirtualizedTable } from "../../../asmaa/core/Table/VirtualizedTable"


const Container = styled.div\`
& .title {
  min-height: 70px;
}
\`

const columns = [
  { Header: "Order N°", accessor: "orderNumber" },
  { Header: "Product Name", accessor: "productName" },
  { Header: "Product Price", accessor: "productPrice" },
  { Header: "status", accessor: "status" },
]

const data = Array(3000)
  .fill(true)
  .map(() => {
    return {
      orderNumber: faker.finance.account(7),
      productName: faker.commerce.productName(),
      productPrice: faker.commerce.price(),
      status: "paid",
    }
  })

function Table() {
   return (
      <Container>
      <DataTable
      data={data2}
      columns={columns}
      plugin={[useFilters, useSortBy, usePagination, useRowSelect]}
      defaultColumn={{
        Sort: TableSort,
        Filter: TableFilter,
      }}
      visibleColumns={(col) => {
        return col.push((__columns: any) => {
          return [selectionTable(), ...__columns]
        })
      }}
      renderRows={(instance, ref) => {
        return <VirtualizedTable {...instance} ref={ref} />
      }}
          />
    </Container>
   )
} 
`

const DataTableApi = [
  { title: "data", value: "Array", default: "none" },
  { title: "columns", value: "Array", default: "none" },
  { title: "visibleColumns", value: "Array", default: "none" },
  { title: "plugin", value: "Object", default: "none" },
  { title: "renderRows", value: "function", default: "none" },
  { title: "defaultColumn", value: "object", default: "none" },
  { title: "pageListSize", value: "number[]", default: "none" },
  { title: "onRowSelected", value: "function", default: "none" },
  { title: "tableHeader", value: "function", default: "none" },
  { title: "footer", value: "function", default: "none" },
]

const TablePage = () => {
  return (
    <Fragment>
      <Head>
        <title>Data Table</title>
      </Head>
      <ComponentsDocs title="simple Table" renderCode={renderSimpleTableCode}>
        <Container>
          <div className="title">
            <div>because the Data Table one Of the Most Important component in any app we built fast, responsive and easy to customize Table</div>
            <div>let's start form simple Table until we build an advanced one</div>
            <div>note: this dataTable depend on plugins because built with react-table library which allow us to build customizable dataTable</div>
          </div>
          <DataTable data={data} columns={columns} />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="add selection" renderCode={renderSelectionTableCode}>
        <Container>
          <div className="title">
            <div>to add selection you need to import 2 things useRowSelect plugin and TableSelection check code </div>
          </div>
          <DataTable
            data={data}
            columns={columns}
            plugin={[useRowSelect]}
            visibleColumns={(col) => {
              return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
              })
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="add sorting" renderCode={renderSortableTableCode}>
        <Container>
          <div className="title">
            <div>to add sorting you need to import 2 things useSortBy plugin and TableSort check code </div>
          </div>
          <DataTable
            data={data}
            columns={columns}
            plugin={[useSortBy, useRowSelect]}
            defaultColumn={{
              Sort: TableSort,
            }}
            visibleColumns={(col) => {
              return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
              })
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="add filter" renderCode={renderFilterTableCode}>
        <Container>
          <div className="title">
            <div>to add filter you need to import 2 things useFilters plugin and TableFilter check code </div>
          </div>
          <DataTable
            data={data}
            columns={columns}
            plugin={[useFilters, useSortBy, useRowSelect]}
            defaultColumn={{
              Sort: TableSort,
              Filter: TableFilter,
            }}
            visibleColumns={(col) => {
              return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
              })
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="add Pagination" renderCode={renderPaginationTableCode}>
        <Container>
          <div className="title">
            <div>to add Pagination you need to import 2 things usePagination plugin and TablePagination check code </div>
          </div>
          <DataTable
            data={data}
            columns={columns}
            plugin={[useFilters, useSortBy, usePagination, useRowSelect]}
            defaultColumn={{
              Sort: TableSort,
              Filter: TableFilter,
            }}
            visibleColumns={(col) => {
              return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
              })
            }}
            width="280px"
            pagination={(instance) => <TablePagination {...instance} />}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="add Virtualization" renderCode={renderVirtualiezdTableCode}>
        <Container>
          <div className="title">
            <div>now with the prebuilt virtualization Component you can render up to 100 000 row without any problem in performance </div>
            <div>to add virtualization you need to import VirtualizedTable Component and pass table instance to it check code </div>
          </div>
          <DataTable
            data={data2}
            columns={columns}
            plugin={[useFilters, useSortBy, usePagination, useRowSelect]}
            defaultColumn={{
              Sort: TableSort,
              Filter: TableFilter,
            }}
            visibleColumns={(col) => {
              return col.push((__columns: any) => {
                return [selectionTable(), ...__columns]
              })
            }}
            renderRows={(instance, ref) => {
              return <VirtualizedTable {...instance} ref={ref} />
            }}
            height="300px"
          />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={DataTableApi} />
    </Fragment>
  )
}

export default TablePage

TablePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
