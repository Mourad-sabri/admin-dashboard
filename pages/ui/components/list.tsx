import Head from "next/head"
import { Fragment, ReactElement } from "react"

import faker from "faker"

import { inRange } from "lodash"
import ProgressBar from "../../../admin/core/ProgressBar/ProgressBar"
import { List } from "../../../admin/components/List/List"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import { Layout } from "../../../admin/layouts"

const data = Array(7)
  .fill(true)
  .map(() => {
    return {
      name: faker.commerce.productName(),
      value: faker.datatype.number(100),
      url: faker.image.fashion(30, 30),

      renderValue: (value: any) => {
        //@ts-ignore

        // return <ProgressBar percent={value} intent={value < 30 ? "error" : inRange(value, 30, 50) ? "primary" : "success"} />
        return value
      },
      //@ts-ignore
      renderBox: ({ url }: { url: string }) => {
        // return (
        //   <div
        //     style={{
        //       width: "60px",
        //       height: "100%",
        //       padding: "7px",
        //     }}
        //   >
        //     <img
        //       src={url}
        //       alt=""
        //       style={{
        //         width: "100%",
        //         height: "100%",
        //         borderRadius: 5,
        //       }}
        //     />
        //   </div>
        // )
        return url
      },
    }
  })

const code = () => `
  
import { inRange } from "lodash"
import ProgressBar from "../../../asmaa/core/ProgressBar/ProgressBar"
import { List } from "../../../asmaa/components/List/List"


const data = Array(7)
  .fill(true)
  .map(() => {
    return {
      name: faker.commerce.productName(),
      value: faker.datatype.number(100),
      url: faker.image.fashion(30, 30),
      renderValue: (value: any) => {
        return <ProgressBar percent={value} intent={value < 30 ? "error" : inRange(value, 30, 50) ? "primary" : "success"} />
      },
      renderBox: ({ url }: { url: string }) => {
        return (
          <div
            style={{
              width: "60px",
              height: "100%",
              padding: "7px",
            }}
          >
            <img
              src={url}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 5,
              }}
            />
          </div>
        )
      },
    }
  })


  function RenderList() {
      return (
        <List valueTitle="In stock (%) " name="Products" displayShowMore data={data} />
      )
  }

  `

const api = [
  { title: "valueTitle", value: "string", default: "none" },
  { title: "name", value: "string", default: "none" },
  { title: "displayShowMore", value: "boolean", default: "false" },
  { title: "data", value: "Array", default: "none" },
  { title: "onRowClick", value: "function", default: "none" },
  { title: "showMoreProps", value: "object", default: "none" },
  { title: "show", value: "number", default: "none" },
]

const ListPage = () => {
  return (
    <Fragment>
      <Head>
        <title>List</title>
      </Head>
      <ComponentsDocs title="List" renderCode={code}>
        <List valueTitle="In stock (%) " name="Products" displayShowMore data={data} />
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default ListPage

ListPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
