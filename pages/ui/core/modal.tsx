import React, { Fragment, ReactElement, useState } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import Button from "../../../admin/core/Buttons/Button"
import Modal from "../../../admin/core/Modal/Modal"
import { Layout } from "../../../admin/layouts"

const modalCode = (code: string) => `
import Button from "../../../asmaa/core/Buttons/Button"
import Modal from "../../../asmaa/core/Modal/Modal"

function ModalComponent() {
    const [open, setOpen] = useState(false)
    return (
        ${code}
    )
}
`

const modalApi = [
  { title: "show", value: "boolean", default: "false" },
  { title: "onClose", value: "function", default: "none" },
  { title: "children", value: "jsx", default: "none" },
  { title: "clickOutsideClose", value: "boolean", default: "true" },
]

const ModalPage = () => {
  const [open, setOpen] = useState(false)
  return (
    <Fragment>
      <Head>
        <title> Modal </title>
      </Head>
      <ComponentsDocs title="Modal" renderCode={modalCode}>
        <Fragment>
          <Button onClick={() => setOpen(!open)}>open modal</Button>
          <Modal show={open} onClose={() => setOpen(false)}>
            <div
              style={{
                padding: 7,
              }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias tenetur facere illum repellat et, sunt modi rerum quisquam minus
              optio incidunt odit, distinctio commodi culpa tempora possimus, exercitationem recusandae. Autem omnis, quaerat reprehenderit debitis
              dicta, sequi delectus, sit at voluptate beatae repellendus odio totam cum dolore pariatur! Impedit commodi sint vel, maxime quos soluta
              illo temporibus voluptates nisi alias quibusdam debitis iure hic consequatur, obcaecati eos voluptatum. Voluptas blanditiis atque
              voluptates? Labore, inventore debitis. Et, animi excepturi at minus eos voluptates ea reprehenderit, velit odio enim eius nobis numquam
              corrupti ut. Odio tenetur iste mollitia atque recusandae quo! Labore, et.
            </div>
          </Modal>
        </Fragment>
      </ComponentsDocs>
      <ComponentsApi api={modalApi} />
    </Fragment>
  )
}

export default ModalPage

ModalPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
