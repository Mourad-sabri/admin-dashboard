import React, { Fragment, ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import { useMediaQuery } from "../../../admin/hooks/useMediaQuery/useMediaQuery"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  & .value {
    width: 100%;
  }

  & .title {
    text-decoration: underline;
  }
`

const code = () => `
import styled from "styled-components"
import { useMediaQuery } from "../../../asmaa/hooks/useMediaQuery/useMediaQuery"

const Container = styled.div\`
  & .value {
    width: 100%;
  }

  & .title {
    text-decoration: underline;
  }
\`

function MediaQuery() {
    const mediaQueryBreakPoint = {
        sm: 770,
        md: 1010,
        lg: 1100,
        xl: 1200,
      }
    
      const { sm, md, xl, lg } = useMediaQuery(mediaQueryBreakPoint)
    
    return (
        <Container>
        change window size to update values
        <div className="value">
          <div className="title">mediaQuery BreakPoints</div>
          <div>sm : {mediaQueryBreakPoint.sm} </div>
          <div>md : {mediaQueryBreakPoint.md} </div>
          <div>lg : {mediaQueryBreakPoint.lg} </div>
          <div>xl : {mediaQueryBreakPoint.xl} </div>
        </div>
        <div className="value">
          <div className="title">mediaQuery values</div>
          <div>sm : {sm} </div>
          <div>md : {md} </div>
          <div>lg : {lg} </div>
          <div>xl : {xl} </div>
        </div>
      </Container>
    )
}
`

const api = [
  { title: "sm", value: "number", default: "none" },
  { title: "md", value: "number", default: "none" },
  { title: "lg", value: "number", default: "none" },
  { title: "xl", value: "number", default: "none" },
]

const UseMediaQueryPage = () => {
  const mediaQueryBreakPoint = {
    sm: 770,
    md: 1010,
    lg: 1100,
    xl: 1200,
  }

  const { sm, md, xl, lg } = useMediaQuery(mediaQueryBreakPoint)

  return (
    <Fragment>
      <Head>
        <title> useMediaQuery </title>
      </Head>
      <ComponentsDocs title="useMediaQuery" renderCode={code}>
        <Container>
          change window size to update values
          <div className="value">
            <div className="title">mediaQuery BreakPoints</div>
            <div>sm : {mediaQueryBreakPoint.sm} </div>
            <div>md : {mediaQueryBreakPoint.md} </div>
            <div>lg : {mediaQueryBreakPoint.lg} </div>
            <div>xl : {mediaQueryBreakPoint.xl} </div>
          </div>
          <div className="value">
            <div className="title">mediaQuery values</div>
            <div>sm : {`${sm}`} </div>
            <div>md : {`${md}`} </div>
            <div>lg : {`${lg}`} </div>
            <div>xl : {`${xl}`} </div>
          </div>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={api} />
    </Fragment>
  )
}

export default UseMediaQueryPage

UseMediaQueryPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
