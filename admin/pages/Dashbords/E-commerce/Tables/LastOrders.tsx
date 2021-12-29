import React from "react"
import DataTable from "../../../../core/Table/Table"
import faker from "faker"
import TextEllipsis from "../../../../core/TextEllipsis/TextEllipsis"

// fake data
const columns = [
  {
    Header: "Most Sold Products This week",
    accessor: "productImg",
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
            <TextEllipsis>{value.desc}</TextEllipsis>
          </div>
        </div>
      )
    },
  },
  { Header: "Orders", accessor: "Orders", width: 30 },
  { Header: "revenue ($)", accessor: "revenue", width: 30 },
]

const image = faker.image.fashion(50, 50)

// fake data

const data = Array(7)
  .fill(true)
  .map(() => {
    return {
      productImg: {
        img: faker.image.fashion(50, 50),
        title: faker.commerce.productName(),
        desc: faker.commerce.productDescription(),
      },
      Orders: faker.datatype.number(30386),
      revenue: faker.datatype.number(88276),
    }
  })

export const LastOrders = () => {
  return (
    <div className="dashboard__lastOrders">
      <DataTable
        columns={columns}
        data={data}
        footer={() => {
          return <div className="dashboard__tableFooter"> show More </div>
        }}
      />
    </div>
  )
}
