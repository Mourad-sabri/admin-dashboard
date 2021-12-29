import Head from "next/head"
import { Fragment, ReactElement } from "react"
import Divider from "../../../admin/core/Dividers/Divider"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const dividerCode = (code: string) => `
import Divider from "../../../asmaa/core/Dividers/Divider"

function DividerComponent {
    return (
        ${code}
    )
}
`

const dividerApi = [
  { title: "title", value: "string", default: "none" },
  { title: "spaceTop", value: "number", default: "0" },
  { title: "spaceBottom", value: "number", default: "0" },
  { title: "position", value: "left, center , right", default: "left" },
]

const DividerPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Divider</title>
      </Head>
      <ComponentsDocs title="Divider" renderCode={dividerCode}>
        <>
          <Divider />
          <Divider title="title" spaceTop={20} />
          <Divider title="title" spaceTop={30} postiton="center" />
          <Divider title="title" spaceTop={30} postiton="right" />
        </>
      </ComponentsDocs>
      <ComponentsApi api={dividerApi} />
    </Fragment>
  )
}

export default DividerPage

DividerPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
