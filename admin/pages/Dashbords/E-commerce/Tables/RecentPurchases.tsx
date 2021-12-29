import React from "react"
import DataTable from "../../../../core/Table/Table"
import faker from "faker"
import Tag from "../../../../core/Tags/Tag"
import { Check, ThreeDotsVertical } from "react-bootstrap-icons"
import Button from "../../../../core/Buttons/Button"
import DropDown from "../../../../core/DropDown/DropDown"
import DropDownItem from "../../../../core/DropDown/DropDownItem"

// fake data
const columns = [
  {
    Header: "Recent Purchases",
    accessor: "recentPurchases",
    Cell: ({ value }: any) => {
      return (
        <div style={{ width: "100%", display: "flex", height: "100%", cursor: "default" }}>
          <div style={{ width: 50, height: "100%", display: "flex", alignItems: "center" }}>
            <img src={value.img} alt="" style={{ width: "50px", height: "50px", borderRadius: 5 }} />
          </div>
          <div
            style={{
              width: "calc(100% - 50px)",
              height: "100%",
              padding: 6,
            }}
          >
            <div
              style={{
                textDecoration: "underline",
              }}
            >
              {value.title}
            </div>
            <div>{value.desc}</div>
          </div>
        </div>
      )
    },
    width: 200,
  },
  {
    Header: "Price",
    accessor: "price",
  },
  {
    Header: "Payement Method",
    accessor: "payementMethod",
  },

  {
    Header: "Status",
    accessor: "status",

    Cell: ({ value }: { value: string }) => {
      return <Tag icon={<Check />} title={value} rounded="xl" intent={value === "paid" ? "success" : value === "failed" ? "error" : "primary"} />
    },
  },
]

// fake data

const data = Array(7)
  .fill(true)
  .map(() => {
    return {
      recentPurchases: {
        img: faker.image.fashion(50, 50),
        title: faker.commerce.productName(),
        desc: faker.commerce.department(),
      },
      price: faker.commerce.price(),
      payementMethod: `****-****-****-${faker.finance.mask(4)}`,
      status: `paid`,
    }
  })

export const RecentPurchases = () => {
  return (
    <>
      <DataTable
        data={data}
        columns={columns}
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
      />
    </>
  )
}
