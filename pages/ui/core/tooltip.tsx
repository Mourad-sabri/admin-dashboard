import React, { Fragment, ReactElement, useEffect, useState } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import Tooltip from "../../../admin/core/Tooltip/Tooltip"
import Button from "../../../admin/core/Buttons/Button"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
  & .select {
    border: none;
    background-color: var(--bg-secondary);
    color: var(--text-color);
    outline: none;
    border-radius: 5px;
  }
  & button {
    margin-left: 30px;
  }
`

const tooltipCode = (code: string) => `
import React, { useState } from "react"
import styled from "styled-components"
import Tooltip from "../../../asmaa/core/Tooltip/Tooltip"
import Button from "../../../asmaa/core/Buttons/Button"



const Container = styled.div\`
  display: flex;
  & .select {
    border: none;
    background-color: var(--bg-secondary);
    color: var(--text-color);
    outline: none;
    border-radius: 5px;
  }
  & button {
    margin-left: 30px;
  }
\`


function ShowTooltip()  {
    const [placement, setPlacement] = useState<any>("top")

    return (
        ${code}
    )
}


`

const tooltipApi = [
  { title: "content", value: "string", default: "none" },
  { title: "placement", value: "string", default: "right" },
  { title: "children", value: "jsx", default: "none" },
  { title: "trigger", value: "string", default: "hover" },
]

const TooltipPage = () => {
  const [placement, setPlacement] = useState<any>("right")

  return (
    <Fragment>
      <Head>
        <title>Tooltip</title>
      </Head>

      <ComponentsDocs title="Toolltip" renderCode={tooltipCode}>
        <Container>
          <select className="select" onChange={(e) => setPlacement(e.target.value)} value={placement}>
            <option value="top">top</option>
            <option value="top-start">top-start</option>
            <option value="top-end">top-end</option>
            <option value="bottom">bottom</option>
            <option value="bottom-start">bottom-start</option>
            <option value="bottom-end">bottom-end</option>
            <option value="left">left</option>
            <option value="left-start">left-start</option>
            <option value="left-end">left-end</option>
            <option value="right">right</option>
            <option value="right-start">right-start</option>
            <option value="right-end">right-end</option>
          </select>
          <Tooltip content="tooltip content" placement={placement}>
            <Button size="sm" intent="primary">
              hover
            </Button>
          </Tooltip>
          <Tooltip content="tooltip content" placement={placement} trigger="click">
            <Button size="sm" intent="primary">
              click
            </Button>
          </Tooltip>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={tooltipApi} />
    </Fragment>
  )
}

export default TooltipPage

TooltipPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
