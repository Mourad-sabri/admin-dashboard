import React from "react"
import { List } from "../../../../components/List/List"
import faker from "faker"
import ProgressBar from "../../../../core/ProgressBar/ProgressBar"
import { inRange } from "lodash"

// fake data

const data = Array(7)
  .fill(true)
  .map(() => {
    return {
      name: faker.commerce.productName(),
      value: faker.datatype.number(100),
      renderValue: (value: any) => {
        return <ProgressBar percent={value} intent={value < 30 ? "error" : inRange(value, 30, 50) ? "primary" : "success"} />
      },
    }
  })

export const ProductsStock = () => {
  return (
    <div className="dashboard__productsStock">
      <List valueTitle="In stock (%) " name="Products" displayShowMore data={data} />
    </div>
  )
}
