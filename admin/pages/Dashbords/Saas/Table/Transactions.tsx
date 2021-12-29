import React from "react"
import DataTable from "../../../../core/Table/Table"
import faker from "faker"
import { sample } from "lodash"
import TextEllipsis from "../../../../core/TextEllipsis/TextEllipsis"
import { useFilters, usePagination, useSortBy } from "react-table"
import { TableSort } from "../../../../core/Table/plugins/Sort"
import { TableFilter } from "../../../../core/Table/plugins/Filter"
import TablePagination from "../../../../core/Table/TablePagination"
import Tag from "../../../../core/Tags/Tag"
import DropDown from "../../../../core/DropDown/DropDown"
import DropDownItem from "../../../../core/DropDown/DropDownItem"
import Button from "../../../../core/Buttons/Button"
import { ThreeDotsVertical } from "react-bootstrap-icons"
// fake data

const columns = [
  { Header: "Transactions", accessor: "transaction", width: 200 },
  { Header: "User", accessor: "user" },
  { Header: "Date", accessor: "date" },
  { Header: "Amount", accessor: "amount" },
  { Header: "Payment Method", accessor: "paymentMethod" },
  {
    Header: "Payment Info",
    accessor: "paymentInfo",
    Cell: ({ value }: { value: string }) => {
      if (value === "creditCard--visa" || value === "creditCard--masterCard") {
        return `****-****-****-${faker.finance.mask(4)}`
      } else if (value === "paypal") {
        return <TextEllipsis>{faker.internet.email()}</TextEllipsis>
      } else {
        return `${faker.finance.routingNumber()}`
      }
    },
  },
  {
    Header: "Status",
    accessor: "status",
    Cell: ({ value }: { value: string }) => {
      return <Tag title={value} intent={value === "transferd" ? "success" : value === "failed" ? "error" : "primary"} />
    },
  },
]

function getPaymentMethod() {
  const methods = ["creditCard--visa", "creditCard--masterCard", "paypal", "bank Transfer"]
  return sample(methods)
}

function getStatus() {
  const status = ["transfered", "pending", "failed"]
  return sample(status)
}

const data = Array(50)
  .fill(true)
  .map(() => {
    const payment = getPaymentMethod()
    return {
      transaction: faker.finance.account(),
      user: `${faker.name.firstName()} ${faker.name.lastName()}`,
      date: `${faker.date.past().toISOString().split("T")[0]}`,
      amount: faker.finance.amount(),
      paymentMethod: payment,
      paymentInfo: payment,
      status: getStatus(),
    }
  })

export const Transactions = () => {
  return (
    <div className="Dashboard__transactions">
      <DataTable
        columns={columns}
        data={data}
        plugin={[useFilters, usePagination]}
        defaultColumn={{
          Filter: TableFilter,
        }}
        pagination={(props) => <TablePagination {...props} />}
        pageListSize={[10, 50, 70]}
        visibleColumns={(col) => {
          const renderDropDown = {
            Header: () => null,
            Cell: () => {
              return (
                <DropDown components={<Button icon={<ThreeDotsVertical />} variant="text" />} placement="left-start">
                  <DropDownItem> transaction info </DropDownItem>
                  <DropDownItem> cancel transaction </DropDownItem>
                </DropDown>
              )
            },
            width: 20,
          }

          return col.push((cols: any) => {
            return [...cols, renderDropDown]
          })
        }}
        height="455px"
      />
    </div>
  )
}
