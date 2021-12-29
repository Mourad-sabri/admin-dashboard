import Head from "next/head"
import { Fragment, ReactElement } from "react"
import styled from "styled-components"
import CircleProgress from "../../../admin/core/CircleProgress/CircleProgress"
import ProgressBar from "../../../admin/core/ProgressBar/ProgressBar"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const Container = styled.div`
  display: flex;
  & div {
    margin-right: 10px;
  }
`

const progressBarCode = (code: string) => `
import styled from "styled-components"
import CircleProgress from "../../../asmaa/core/CircleProgress/CircleProgress"
import ProgressBar from "../../../asmaa/core/ProgressBar/ProgressBar   

const Container = styled.div\`
  display: flex;
  & div {
    margin-right: 10px;
  }
\`

function ProgressBar() { 
 return (
   ${code}
)
}
`

const ProgressBarApi = [
  { title: "percent", value: "number", default: "0" },
  { title: "intent", value: "primary, secondary, error, success", default: "none" },
  { title: "size (circle ProgressBar) ", value: "number", default: "100" },
]

const CircleProgressPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Circle Progress </title>
      </Head>
      <ComponentsDocs title="Progressbar" renderCode={progressBarCode}>
        <div>
          <ProgressBar percent={30} />
          <ProgressBar percent={70} intent="primary" />
          <ProgressBar percent={20} intent="secondary" />
          <ProgressBar percent={100} intent="error" />
          <ProgressBar percent={50} intent="success" />
        </div>
      </ComponentsDocs>
      <ComponentsDocs title="Circle ProgressBar" renderCode={progressBarCode}>
        <Container>
          <CircleProgress percent={30} />
          <CircleProgress percent={70} />
          <CircleProgress percent={20} />
          <CircleProgress percent={10} />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={ProgressBarApi} />
    </Fragment>
  )
}

export default CircleProgressPage

CircleProgressPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
