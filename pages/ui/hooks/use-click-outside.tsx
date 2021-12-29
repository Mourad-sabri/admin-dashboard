import React, { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import { ComponentsDocs, ComponentsApi } from "../../../helpers"
import { useClickOutside } from "../../../admin/hooks/useClickOutside/useClickOutside"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color);
  margin: auto;
  user-select: none;
`

const code = () => `

import { useClickOutside } from "../../../asmaa/hooks/useClickOutsideClose/useClickOutside"
import styled from "styled-components"


const Container = styled.div\`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--text-color);
  margin: auto;
  user-select: none;
\`

function ClickOutside() {
  const [count, setCount] = useState(0)

  const elRef = useClickOutsideClose<any>(() => {
    setCount(count + 1)
  })

  return (
    <Container ref={elRef}>you clicked outside this div {count} times</Container>
  )
}
`

const api = [{ title: "props", value: "function", default: "none" }]

const UseClickOutsidePage = () => {
  const [count, setCount] = useState(0)

  const elRef = useClickOutside<any>(() => {
    setCount(count + 1)
  })

  return (
    <Fragment>
      <Head>
        <title> useClickOutside </title>
      </Head>
      <ComponentsDocs title="useClickOutside hook" renderCode={code}>
        <Container ref={elRef}>you clicked outside this div {count} times</Container>
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default UseClickOutsidePage

UseClickOutsidePage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
