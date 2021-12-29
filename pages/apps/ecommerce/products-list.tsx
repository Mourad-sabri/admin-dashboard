import React, { Fragment, ReactElement } from "react"
import DataTable from "../../../admin/core/Table/Table"
import { Layout } from "../../../admin/layouts"
import faker from "faker"
import { useFilters, useGlobalFilter, usePagination, useRowSelect } from "react-table"
import TablePagination from "../../../admin/core/Table/TablePagination"
import Button from "../../../admin/core/Buttons/Button"
import { ThreeDotsVertical } from "react-bootstrap-icons"
import DropDown from "../../../admin/core/DropDown/DropDown"
import DropDownItem from "../../../admin/core/DropDown/DropDownItem"
import { DataTableHeader } from "../../../admin/apps/ecommerce/TableHeader"
import { TableFilter } from "../../../admin/core/Table/plugins/Filter"
import { selectionTable } from "../../../admin/core/Table/selection"
import { S_ProductContainer } from "../../../admin/apps/ecommerce/ecommerceApps.styled"
import Head from "next/head"

const RenderProduct = (value: any) => {
  return (
    <S_ProductContainer>
      <div className="imgContainer">
        <img src={value.productImg} alt="img" className="img" />
      </div>
      <div className="content">
        <div className="product-title"> {value.productTitle} </div>
        <div className="product-dep"> {value.productDep} </div>
      </div>
    </S_ProductContainer>
  )
}

const columns = [
  {
    Header: "Product",
    accessor: "product",
    Cell: ({ value }: any) => <RenderProduct {...value} />,
    width: 400,
  },
  { Header: "Price", accessor: "price" },
  { Header: "Quantity", accessor: "quantity" },
  { Header: "Stock", accessor: "stock" },
]

const data = Array(20)
  .fill(true)
  .map(() => {
    return {
      product: {
        productTitle: faker.commerce.productName(),
        productDep: faker.commerce.department(),
        productImg: faker.image.fashion(50, 50),
      },
      price: faker.commerce.price(),
      quantity: faker.datatype.number(3837),
      stock: "inStock",
    }
  })

const Productslist = () => {
  return (
    <Fragment>
      <Head>
        <title> Product List </title>
      </Head>
      <DataTable
        data={data}
        columns={columns}
        height="480px"
        plugin={[useFilters, useGlobalFilter, usePagination, useRowSelect]}
        pagination={(instance) => <TablePagination {...instance} />}
        tableHeader={(instance: any) => <DataTableHeader {...instance} />}
        defaultColumn={{
          Filter: TableFilter,
        }}
        visibleColumns={(col) => {
          const RowsdropDown = {
            Header: () => null,
            Cell: () => {
              return (
                //@ts-ignore
                <DropDown placement="right" components={<Button size="sm" icon={<ThreeDotsVertical />} />}>
                  <DropDownItem> Remove </DropDownItem>
                  <DropDownItem> Update </DropDownItem>
                  <DropDownItem> Add Quantity </DropDownItem>
                </DropDown>
              )
            },
            width: 30,
          }
          return col.push((__columns: any) => {
            return [selectionTable(), ...__columns, RowsdropDown]
          })
        }}
      />
    </Fragment>
  )
}

export default Productslist

Productslist.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
