import Head from "next/head"
import { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import AlertModal from "../../../admin/core/AlertModal/AlertModal"
import Button from "../../../admin/core/Buttons/Button"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import data from "faker"
import { CreditCard } from "react-bootstrap-icons"
import { Layout } from "../../../admin/layouts"

const Container = styled.div``

const alertModalCode = (code: string) => `

import { CreditCard } from "react-bootstrap-icons"
import AlertModal from "../../../asmaa/core/AlertModal/AlertModal"
import Button from "../../../asmaa/core/Buttons/Button"

const [showAlert, setShowAlert] = useState(false)


function ModalAlert() {
    return (
        ${code}
    )
}
`

const modalApi = [
  { title: "title", value: "string", default: "none" },
  { title: "intent", value: "primary , secondary , error , success", default: "none" },
  { title: "actionButtonTitle", value: "string", default: "none" },
  { title: "onClose", value: "function", default: "none" },
  { title: "show", value: "boolean", default: "false" },
  { title: "actionButtonProps", value: "object", default: "none" },
  { title: "cancelButtonProps", value: "object", default: "none" },
  { title: "children", value: "string", default: "none" },
  { title: "message", value: "string", default: "none" },
]

const AlertModalPage = () => {
  const [showAlert, setShowAlert] = useState(false)

  return (
    <Fragment>
      <Head>
        <title> Alert Modal </title>
      </Head>
      <ComponentsDocs title="alert modal" renderCode={(code) => alertModalCode(code)}>
        <Container>
          <Button onClick={() => setShowAlert(true)}>open</Button>
          <AlertModal show={showAlert} icon={<CreditCard />} intent="success" onClose={() => setShowAlert(false)} actionButtonTitle="pay">
            <span> {data.finance.transactionDescription()}</span>
          </AlertModal>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={modalApi} />
    </Fragment>
  )
}

export default AlertModalPage

AlertModalPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
