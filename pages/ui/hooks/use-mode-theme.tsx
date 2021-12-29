import React, { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import { ComponentsDocs, ComponentsApi } from "../../../helpers"
import Button from "../../../admin/core/Buttons/Button"
import { useModeTheme } from "../../../admin/hooks/useModeTheme/useModeTheme"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  user-select: none;
`

const code = () => `

import { useModeTheme } from "../../../asmaa/hooks/useModeTheme/useModeTheme"
import styled from "styled-components"


const Container = styled.div\`
  width: 300px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: auto;
  user-select: none;
\`

function ThemeMode() {
  const toggleThemeMode = useModeTheme()

  return (
    <Container>
    <Button onClick={toggleThemeMode}>toggle theme mode</Button>
  </Container>
  )
}
`

const api = [{ title: "props", value: "function", default: "none" }]

const UseClickOutsidePage = () => {
  const { togglethemeMode } = useModeTheme()
  return (
    <Fragment>
      <Head>
        <title> useClickOutside </title>
      </Head>
      <ComponentsDocs title="useModeTheme hook" renderCode={code}>
        <Container>
          <Button onClick={togglethemeMode}>toggle theme mode</Button>
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
