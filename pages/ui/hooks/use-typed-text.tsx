import React, { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Head from "next/head"
import { ComponentsDocs, ComponentsApi } from "../../../helpers"
import { useTypedText } from "../../../admin/hooks/useTypedText/useTypedText"
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

import { useTypedText } from "../../../asmaa/hooks/useTypedText/useTypedText"
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
    const elRef = useTypedText({
        strings: ["animated text"],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
      })

  return (
    <Container>
    <span ref={elRef}></span>
  </Container>
  )
}
`

const api = [
  { title: "strings", value: "strings[]", default: "none" },
  { title: "typeSpeed", value: "number", default: "50" },
  { title: "backSpeed", value: "number", default: "50" },
  { title: "loop", value: "boolean", default: "false" },
  { title: "loopCount", value: "number", default: "none" },
  { title: "onComplete", value: "function", default: "none" },
  { title: "onDestroy", value: "function", default: "none" },
  { title: "onReset", value: "function", default: "none" },
  { title: "onStart", value: "function", default: "none" },
  { title: "onStop", value: "function", default: "none" },
  { title: "onStringTyped", value: "function", default: "none" },
  { title: "onTypingPaused", value: "function", default: "none" },
  { title: "onTypingResumed", value: "function", default: "none" },
  { title: "startDelay", value: "number", default: "none" },
  { title: "smartBackspace", value: "boolean", default: "false" },
  { title: "shuffle", value: "boolean", default: "false" },
  { title: "backDelay", value: "number", default: "none" },
  { title: "showCursor", value: "boolean", default: "true" },
]

const UseTypedTextPage = () => {
  const elRef = useTypedText({
    strings: ["animated text"],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
  })

  return (
    <Fragment>
      <Head>
        <title> useClickOutside </title>
      </Head>
      <ComponentsDocs title="UseTypedText hook" renderCode={code}>
        <Container>
          <span ref={elRef}></span>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default UseTypedTextPage

UseTypedTextPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
