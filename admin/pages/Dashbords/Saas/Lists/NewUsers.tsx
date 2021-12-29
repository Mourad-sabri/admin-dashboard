import React from "react"
import { List } from "../../../../components/List/List"
import faker from "faker"
import Avatar from "../../../../core/Avatar/Avatar"
import Button from "../../../../core/Buttons/Button"
import { css } from "styled-components"
import { Eye, ListNested, Mic } from "react-bootstrap-icons"

const container = css`
  width: 100%;
  height: 100%;
  border: 1px solid black;
`
// fake data

const data = Array(6)
  .fill(true)
  .map(() => {
    return {
      name: `${faker.name.firstName()} ${faker.name.lastName()}`,
      url: faker.internet.avatar(),
      renderBox: (p: any) => <Avatar size="md" src={p.url} name={p.name} />,
      renderValue: () => {
        return (
          <>
            <Button icon={<Eye />} variant="text" style={{ marginRight: 1 }} />
          </>
        )
      },
    }
  })

export const NewUsers = () => {
  return (
    <div className="Dashboard__newUser">
      <List name="New Users" data={data} displayShowMore />
    </div>
  )
}
