import Head from "next/head"
import { Fragment, ReactElement } from "react"
import styled from "styled-components"
import Portal from "../../../admin/core/Portal/Portal"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const Container = styled.div``
const PortalCode = () => `

// pages/_documnent.tsx


import Document, { Html, Head, Main, NextScript } from "next/document"

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <body>
        <Main />
        <NextScript />
        <div id="selectorID" />
        </body>
      <Html>
    )
  }
}

************************************************************************************
  // pages/index.tsx 

import Portal from "../../../asmaa/core/Portal/Portal"

function PortalComponent() {
  return (
    <Portal selector="#selectorID" >
      <div>
        render children into a DOM node that exists outside the DOM hierarchy of the parent component
      </div>
    </Portal>
  )
}
`

const portalApi = [
  { title: "selector", value: "string", default: "none" },
  { title: "children", value: "jsx", default: "none" },
]

const PortalPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Portal</title>
      </Head>

      <ComponentsDocs title="Portal" renderCode={PortalCode}>
        <Container>
          Portals provide a first-class way to render children into a DOM node that exists outside the DOM hierarchy of the parent component.
          <div> {`and Thanks to  " <Portal/> " you can use this feature easily in nextjs application `} </div>
          make sure to add div tag with id attr to use it with portal , look at example in code section
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={portalApi} />
    </Fragment>
  )
}

export default PortalPage

PortalPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
