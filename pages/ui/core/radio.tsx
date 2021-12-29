import React, { Fragment, ReactElement } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import Radio from "../../../admin/core/Radio/Radio"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
`

const radioCode = (code: string) => `
import styled from "styled-components"
import Radio from "../../../asmaa/core/Radio/Radio"


const Container = styled.div\`
  display: flex;
\`



function RadioComponent() {
    return (
        ${code}
    )
}

`

const radioApi = [
  { title: "label", value: "string", default: "none" },
  { title: "name", value: "string", default: "none" },
  { title: "disabeld", value: "boolean", default: "false" },
]

const RadioPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Radio </title>
      </Head>
      <ComponentsDocs title="Radio" renderCode={radioCode}>
        <Container>
          <form>
            <Radio label="option 1" name="Radio" />
            <Radio label="option 2" name="Radio" />
            <Radio label="option 3" name="Radio" />
            <Radio label="option 4" name="Radio" />
            <Radio label="option 5" name="Radio" />
          </form>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={radioApi} />
    </Fragment>
  )
}

export default RadioPage

RadioPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
