import Head from "next/head"
import { Fragment, ReactElement } from "react"
import { InfoCircle } from "react-bootstrap-icons"
import styled from "styled-components"
import Alerts from "../../../admin/core/Alerts/Alerts"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const Container = styled.div`
  & .alert {
    margin-top: 5px;
  }
`

const alertCode = (code: string) => `
import Alerts from "../../../asmaa/core/Alerts/Alerts"
import styled from "styled-components"

const Container = styled.div'
  &  .alert {
    margin-top: 5px;
  }
'


function ALert()  {
    return (
        <Container>
           ${code}
        </Container>
    )
}
`

const AlertApi = [
  { title: "message", value: "string", default: "none" },
  { title: "icon", value: "jsx", default: "none" },
  { title: "intent", value: "primary , secondary, error, success", default: "none" },
]

const AlertPage = () => {
  return (
    <Fragment>
      <Head>
        <title>alert</title>
      </Head>
      <Container>
        <ComponentsDocs title="ALerts" renderCode={alertCode}>
          <>
            <Alerts icon={<InfoCircle />} message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima?" />
            <Alerts
              intent="primary"
              className="alert"
              icon={<InfoCircle />}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima?"
            />
            <Alerts
              intent="secondary"
              className="alert"
              icon={<InfoCircle />}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima?"
            />
            <Alerts
              intent="error"
              className="alert"
              icon={<InfoCircle />}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima?"
            />
            <Alerts
              intent="success"
              className="alert"
              icon={<InfoCircle />}
              message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, minima?"
            />
          </>
        </ComponentsDocs>
      </Container>
      <ComponentsApi api={AlertApi} />
    </Fragment>
  )
}

export default AlertPage

AlertPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
