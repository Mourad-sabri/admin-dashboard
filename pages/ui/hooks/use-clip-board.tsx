import React, { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import { ComponentsDocs, ComponentsApi } from "../../../helpers"
import Button from "../../../admin/core/Buttons/Button"
import Input from "../../../admin/core/Inputs/BaseInput"
import { useClipBoard } from "../../../admin/hooks/useClipBoard/useClipBoard"
import { Clipboard } from "react-bootstrap-icons"
import { useForceUpdate } from "../../../admin/hooks/useForceUpdate/useForceUpdate"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  user-select: none;
  & button {
    width: 70px;
    margin-left: 10px;
  }

  & .value {
    border: 1px solid var(--text-color);
  }
`

const code = () => `
import styled from "styled-components"
import { useClipBoard } from "../../../asmaa/hooks/useClipBoard/useClipBoard"
import { Clipboard } from "react-bootstrap-icons"

const Container = styled.div\`
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  user-select: none;
  & button {
    width: 70px;
    margin-left: 10px;
  }

  & .value {
    border: 1px solid var(--text-color);
  }
\`

function ThemeMode() {
    const [value, setValue] = useState("click to copy this text ")
    const elRef = useClipBoard({
      text: () => value,
    })

  return (
        <Container>
          <div className="value">{value} </div>
          <Button ref={elRef} icon={<Clipboard />} />
        </Container>
     )
}
`

const api = [
  { title: "text", value: "function", default: "none" },
  { title: "action", value: "cut | copy", default: "copy" },
]

const UseClickOutsidePage = () => {
  const [value, setValue] = useState("click to copy this text ")
  const elRef = useClipBoard({
    text: () => value,
  })

  return (
    <Fragment>
      <Head>
        <title> useClickOutside </title>
      </Head>
      <ComponentsDocs title="useModeTheme hook" renderCode={code}>
        <Container>
          <div className="value">{value} </div>
          <Button ref={elRef} icon={<Clipboard />} />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default UseClickOutsidePage

UseClickOutsidePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
