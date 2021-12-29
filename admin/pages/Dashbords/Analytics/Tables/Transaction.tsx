import { Fragment } from "react"
import DataTable from "../../../../core/Table/Table"
import faker from "faker"
import { sample, some } from "lodash"
import Tag from "../../../../core/Tags/Tag"
import DropDown from "../../../../core/DropDown/DropDown"
import DropDownItem from "../../../../core/DropDown/DropDownItem"
import Button from "../../../../core/Buttons/Button"
import { ThreeDotsVertical } from "react-bootstrap-icons"

// fake data

const columns = [
  { Header: "Recent Transaction", accessor: "recentTransaction", width: 200 },
  { Header: "Payment Method", accessor: "paymentMethod" },
  { Header: "Total Paid ($) ", accessor: "totalPaid" },
  {
    Header: "status",
    accessor: "status",

    Cell: ({ value }: { value: string }) => {
      return <Tag rounded="xl" title={value} intent={value === "paid" ? "success" : value === "failed" ? "error" : "primary"} />
    },
  },
]

function selectTransaction() {
  const transactions = [
    `Load Balancer lb-${faker.datatype.number(72373)}`,
    `mongodb db-${faker.datatype.number(72373)}`,
    `redis db-${faker.datatype.number(72373)}`,
    `mySQl db-${faker.datatype.number(72373)}`,
    `postgresSQl db-${faker.datatype.number(72373)}`,
  ]

  const data = sample(transactions)

  return data
}

function selectTransactionStatus() {
  const status = ["paid", "failed", "pending"]
  return sample(status)
}

const data = Array(10)
  .fill(true)
  .map(() => {
    return {
      recentTransaction: selectTransaction(),
      totalPaid: faker.datatype.number(8363),
      paymentMethod: `****-*****-****-${faker.finance.mask(4)}`,
      status: selectTransactionStatus(),
    }
  })

export const TransactionTable = () => {
  return (
    <Fragment>
      <DataTable
        columns={columns}
        data={data}
        visibleColumns={(col) => {
          const renderDropDown = {
            Header: () => null,
            Cell: () => {
              return (
                <DropDown components={<Button icon={<ThreeDotsVertical />} variant="text" />} placement="left-start">
                  <DropDownItem> transaction info </DropDownItem>
                  <DropDownItem> update status </DropDownItem>
                </DropDown>
              )
            },
            width: 20,
          }

          return col.push((cols: any) => {
            return [...cols, renderDropDown]
          })
        }}
        footer={() => <div className="dashboard__tableFooter">show More Transactions</div>}
      />
    </Fragment>
  )
}
