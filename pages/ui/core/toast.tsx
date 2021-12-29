import React, { Fragment, ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import Button from "../../../admin/core/Buttons/Button"
import styled from "styled-components"
import Toast from "../../../admin/core/Toast/Toast"
import { InfoCircle } from "react-bootstrap-icons"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
  overflow-x: auto;
  & button {
    flex-shrink: 0;
    width: 170px;
    margin-right: 5px;
    margin-top: 5px;
  }
`

const toastCode = () => `
import Button from "../../../asmaa/core/Buttons/Button"
import styled from "styled-components"
import Toast from "../../../asmaa/core/Toast/Toast"
import { InfoCircle } from "react-bootstrap-icons"

const Container = styled.div\`
  display: flex;
  overflow-x: auto;
  & button {
    flex-shrink: 0;
    width: 170px;
    margin-right: 5px;
    margin-top: 5px;
  }
\`

function ToastComponent() {
    type ToastPosition = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right"

    const [open, setOpen] = useState(false)
    const [postition, setPostition] = useState<ToastPosition>("top")
  
    function openToast(__position: ToastPosition) {
      setPostition(__position)
      setOpen(true)
    }
  
    useEffect(() => {
      const Timeid = setTimeout(() => {
        setOpen(false)
      }, 2500)
  
      return () => clearTimeout(Timeid)
    }, [open])

    
    return (
        <Container>
        <Button onClick={() => openToast("top")}> top </Button>
        <Button onClick={() => openToast("bottom-left")}> top-left </Button>
        <Button onClick={() => openToast("bottom-right")}> top-right </Button>
        <Button onClick={() => openToast("bottom")}> bottom </Button>
        <Button onClick={() => openToast("bottom-left")}> bottom-left </Button>
        <Button onClick={() => openToast("top-right")}> bottom-right </Button>

        <Toast
          showToast={open}
          position={postition}
          intent="success"
          message=" Lorem ipsum, dolor sit amet consectetur adipisicing elit."
          icon={<InfoCircle />}
          onClose={() => setOpen(false)}
        />
      </Container>
    )
}

`

const toastApi = [
  { title: "showToast", value: "boolean", default: "false" },
  { title: "position", value: "top | top-left | top-right | bottom | bottom-left | bottom-right", default: "top" },
  { title: "intent", value: "primary | secondary | error | success", default: "none" },
  { title: "message", value: "string", default: "none" },
  { title: "icon", value: "jsx", default: "none" },
  { title: "onClose", value: "function", default: "none" },
]

const ToastPage = () => {
  type ToastPosition = "top" | "top-left" | "top-right" | "bottom" | "bottom-left" | "bottom-right"

  const [open, setOpen] = useState(false)
  const [postition, setPostition] = useState<ToastPosition>("top")

  function openToast(__position: ToastPosition) {
    setPostition(__position)
    setOpen(true)
  }

  useEffect(() => {
    const Timeid = setTimeout(() => {
      setOpen(false)
    }, 2500)

    return () => clearTimeout(Timeid)
  }, [open])

  return (
    <Fragment>
      <Head>
        <title>Toast</title>
      </Head>

      <ComponentsDocs title="Toast" renderCode={toastCode}>
        <Container>
          <Button onClick={() => openToast("top")}> top </Button>
          <Button onClick={() => openToast("bottom-left")}> top-left </Button>
          <Button onClick={() => openToast("bottom-right")}> top-right </Button>
          <Button onClick={() => openToast("bottom")}> bottom </Button>
          <Button onClick={() => openToast("bottom-left")}> bottom-left </Button>
          <Button onClick={() => openToast("top-right")}> bottom-right </Button>

          <Toast
            showToast={open}
            position={postition}
            intent="success"
            message=" Lorem ipsum, dolor sit amet consectetur adipisicing elit."
            icon={<InfoCircle />}
            onClose={() => setOpen(false)}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={toastApi} />
    </Fragment>
  )
}

export default ToastPage

ToastPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
