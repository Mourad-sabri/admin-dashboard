import React, { Fragment, ReactElement } from "react"
import styled from "styled-components"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import Accordion from "../../../admin/core/Accordion/Accordion"
import { Layout } from "../../../admin/layouts"

const accordionCode = (code: string) => `
import Accordion from "../../../asmaa/core/Accordion/Accordion"

${code}

`

const accordionApi = [
  { title: "title", value: "string", default: "" },
  { title: "icon", value: "jsx", default: "" },
  { title: "children", value: "string , jsx", default: "" },
]

const AccordionPage = () => {
  return (
    <Fragment>
      <Head>
        <title> accordion </title>
      </Head>

      <ComponentsDocs title="Accordion" renderCode={(code) => accordionCode(code)}>
        <>
          <Accordion title="Accordion 1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis velit possimus eligendi nam numquam quos corrupti laboriosam facere
            quaerat commodi doloremque fuga magnam voluptatum, quod fugit mollitia consectetur accusantium minus.
          </Accordion>
          <Accordion title="Accordion 2">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis velit possimus eligendi nam numquam quos corrupti laboriosam facere
            quaerat commodi doloremque fuga magnam voluptatum, quod fugit mollitia consectetur accusantium minus.
          </Accordion>
          <Accordion title="Accordion 3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis velit possimus eligendi nam numquam quos corrupti laboriosam facere
            quaerat commodi doloremque fuga magnam voluptatum, quod fugit mollitia consectetur accusantium minus.
          </Accordion>
        </>
      </ComponentsDocs>
      <ComponentsApi api={accordionApi} />
    </Fragment>
  )
}

export default AccordionPage

AccordionPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
