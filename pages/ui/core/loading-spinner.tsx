import React, { Fragment, ReactElement } from "react"

import Head from "next/head"
import styled from "styled-components"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import LoadingSpinner from "../../../admin/core/LoadingSpinners/CircleLoadingSpinner"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
  & div {
    margin-right: 30px;
  }
`

const loadingSpinnerCode = (code: string) => `
import styled from "styled-components"
import LoadingSpinner from "../../../asmaa/core/LoadingSpinners/CircleLoadingSpinner"

const Container = styled.div\`
  display: flex;
  & div {
    margin-right: 30px;
  }
\`


function LoadinSpinnersComponent() {
    return (
        ${code}
    )
}

`

const loadingSpinnerApi = [
  { title: "width", value: "number", default: "30" },
  { title: "height", value: "number", default: "30" },
  { title: "color", value: "string", default: "none" },
]

const LoadingSpinnerPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Loading Spinner</title>
      </Head>

      <ComponentsDocs title="Loading Spinner" renderCode={loadingSpinnerCode}>
        <Container>
          <LoadingSpinner width={20} height={20} />
          <LoadingSpinner width={30} height={30} color="green" />
          <LoadingSpinner width={40} height={40} color="blue" />
          <LoadingSpinner width={50} height={50} color="orange" />
          <LoadingSpinner width={60} height={60} color="gray" />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={loadingSpinnerApi} />
    </Fragment>
  )
}

export default LoadingSpinnerPage

LoadingSpinnerPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
