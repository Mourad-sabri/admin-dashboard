import React, { Fragment, ReactElement } from "react"
import Head from "next/head"
import Button from "../../../admin/core/Buttons/Button"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import { Mic } from "react-bootstrap-icons"
import { Layout } from "../../../admin/layouts"

const StyledJSX = styled.div`
  & .buttons {
    display: flex;
    & button {
      margin-right: 10px;
      flex-shrink: 0;
    }
  }
`

const buttonsCode = `    
import Button from "../../../asmaa/core/Buttons/Button"

     <div className="buttons">
        <Button> button </Button>
     </div>
 `

const buttonsCodeIntent = `    
import Button from "../../../asmaa/core/Buttons/Button"


<div className="buttons">
    <Button> button </Button>
    <Button intent="error"> button </Button>
    <Button intent="primary"> button </Button>
    <Button intent="secondary"> button </Button>
    <Button intent="success"> button </Button>
</div>

`

const buttonCodeSize = `
import Button from "../../../asmaa/core/Buttons/Button"

<div className="buttons">
  <Button size="sm"> button </Button>
  <Button size="md"> button </Button>
  <Button size="lg"> button </Button>
  <Button size="xl"> button </Button>
</div>
`

const buttonCodeRounded = `
import Button from "../../../asmaa/core/Buttons/Button"

<div className="buttons">
  <Button rounded="sm"> button </Button>
  <Button rounded="md"> button </Button>
  <Button rounded="lg"> button </Button>
  <Button rounded="xl"> button </Button>
</div>
`

const buttonCodeIcons = `
import Button from "../../../asmaa/core/Buttons/Button"
import { Mic } from "react-bootstrap-icons"

<div className="buttons">
    <Button rounded="sm" icon={<Mic />} />
    <Button rounded="md" icon={<Mic />} />
    <Button rounded="full" icon={<Mic />} />
    <Button rounded="sm" icon={<Mic />}>
      button
    </Button>
    <Button rounded="sm" rigthIcon={<Mic />}>
      button
    </Button>
</div>
`

const buttonCodeVariant = `
import Button from "../../../asmaa/core/Buttons/Button"

<div className="buttons">
  <Button variant="outlined"> button </Button>
  <Button intent="error" variant="outlined">
    button
  </Button>
  <Button intent="primary" variant="outlined">
    button
  </Button>
  <Button intent="secondary" variant="outlined">
    button
  </Button>
  <Button intent="success" variant="outlined">
    button
  </Button>
  <Button variant="text"> button </Button>
  <Button intent="error" variant="text">
    button
  </Button>
  <Button intent="primary" variant="text">
    button
  </Button>
  <Button intent="secondary" variant="text">
    button
  </Button>
  <Button intent="success" variant="text">
    button
  </Button>
</div>
`

const buttonApi = [
  { title: "variant", value: `contained , outlined , text ` },
  { title: "intent", value: `primary , secondary , error , success ` },
  { title: "rounded", value: `sm , md , lg , xl , full` },
  { title: "size", value: `sm , md , lg , xl ` },
  { title: "isLoading", value: `boolean` },
  { title: "disabled", value: `boolean` },
  { title: "icon", value: `JSX` },
  { title: "rightIcon", value: `JSX` },
]

const Buttons = () => {
  return (
    <Fragment>
      <Head>
        <title> Buttons </title>
      </Head>
      <StyledJSX>
        <ComponentsDocs title="Buttons" code={buttonsCode}>
          <div className="buttons">
            <Button> button </Button>
            <Button isLoading> button </Button>
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Buttons Intent" code={buttonsCodeIntent}>
          <div className="buttons">
            <Button> button </Button>
            <Button intent="error"> button </Button>
            <Button intent="primary"> button </Button>
            <Button intent="secondary"> button </Button>
            <Button intent="success"> button </Button>
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Buttons Variants" code={buttonCodeVariant}>
          <div className="buttons">
            <Button variant="outlined"> button </Button>
            <Button intent="error" variant="outlined">
              button
            </Button>
            <Button intent="primary" variant="outlined">
              button
            </Button>
            <Button intent="secondary" variant="outlined">
              button
            </Button>
            <Button intent="success" variant="outlined">
              button
            </Button>
            <Button variant="text"> button </Button>
            <Button intent="error" variant="text">
              button
            </Button>
            <Button intent="primary" variant="text">
              button
            </Button>
            <Button intent="secondary" variant="text">
              button
            </Button>
            <Button intent="success" variant="text">
              button
            </Button>
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Buttons Size" code={buttonCodeSize}>
          <div className="buttons">
            <Button size="sm"> button </Button>
            <Button size="md"> button </Button>
            <Button size="lg"> button </Button>
            <Button size="xl"> button </Button>
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Buttons rounded" code={buttonCodeRounded}>
          <div className="buttons">
            <Button rounded="sm"> button </Button>
            <Button rounded="md"> button </Button>
            <Button rounded="lg"> button </Button>
            <Button rounded="xl"> button </Button>
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Buttons Icons" code={buttonCodeIcons}>
          <div className="buttons">
            <Button rounded="sm" icon={<Mic />} />
            <Button rounded="md" icon={<Mic />} />
            <Button rounded="full" icon={<Mic />} />
            <Button rounded="sm" icon={<Mic />}>
              button
            </Button>
            <Button rounded="sm" rigthIcon={<Mic />}>
              button
            </Button>
          </div>
        </ComponentsDocs>
        <ComponentsApi title="Button Api" api={buttonApi} />
      </StyledJSX>
    </Fragment>
  )
}

export default Buttons

Buttons.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
