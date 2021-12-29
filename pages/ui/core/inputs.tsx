import React, { Fragment, ReactElement } from "react"
import Head from "next/head"
import styled from "styled-components"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import Input from "../../../admin/core/Inputs/BaseInput"
import { Search } from "react-bootstrap-icons"
import { Layout } from "../../../admin/layouts"

const JsxStyled = styled.div`
  & .inputs-container {
    width: 100%;
    display: flex;
  }

  & .input {
    width: 200px;
    margin-right: 10px;
    flex-shrink: 0;
  }

  & .full-width {
    width: 100%;
  }
`

const inputCodeloading = (code: string) => `
import Input from "../../../asmaa/core/Inputs/BaseInput"
import styled from "styled-components"

const JsxStyled = styled.div'
  & .inputs-container {
    width: 100%;
    display: flex;
  }

  & .input {
    width: 200px;
    margin-right: 10px;
    flex-shrink:0
  }

  & .full-width {
    width: 100%;
  }
'

<JsxStyled>
  ${code}
</JsxStyled>

`

const InputApi = [
  { title: "intent", value: `primary , secondary , error , success `, default: "none" },
  { title: "rounded", value: `sm , md , lg , xl `, default: "sm" },
  { title: "size", value: `sm , md , lg , xl `, default: "md" },
  { title: "isLoading", value: `boolean`, default: "false" },
  { title: "disabled", value: `boolean`, default: "false" },
  { title: "icon", value: `JSX`, default: "none" },
  { title: "rightIcon", value: `JSX`, default: "none" },
]

const InputsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Inputs</title>
      </Head>
      <JsxStyled>
        <ComponentsDocs title="Inputs" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" placeholder="default" />
          </div>
        </ComponentsDocs>
        <ComponentsDocs title="Inputs intent" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" intent="primary" placeholder="primary" />
            <Input className="input" intent="secondary" placeholder="secondary" />
            <Input className="input" intent="success" placeholder="success" />
            <Input className="input" intent="error" placeholder="error" />
          </div>
        </ComponentsDocs>
        <ComponentsDocs title="Inputs loading" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" placeholder="default" isLoading />
          </div>
        </ComponentsDocs>
        <ComponentsDocs title="Inputs size" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" placeholder="sm" size="sm" />
            <Input className="input" placeholder="md" size="md" />
            <Input className="input" placeholder="lg" size="lg" />
            <Input className="input" placeholder="xl" size="xl" />
          </div>
        </ComponentsDocs>
        <ComponentsDocs title="Inputs rounded" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" placeholder="sm" rounded="sm" />
            <Input className="input" placeholder="md" rounded="md" />
            <Input className="input" placeholder="lg" rounded="lg" />
          </div>
        </ComponentsDocs>

        <ComponentsDocs title="Inputs with icons" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input" placeholder="icon" size="sm" icon={<Search />} />
            <Input className="input" placeholder="right icon" size="sm" rightIcon={<Search />} />
          </div>
        </ComponentsDocs>
        <ComponentsDocs title="Inputs full width" renderCode={(code) => inputCodeloading(code)}>
          <div className="inputs-container">
            <Input className="input full-width" placeholder="icon" size="sm" icon={<Search />} />
          </div>
        </ComponentsDocs>
        <ComponentsApi title="Input Api" api={InputApi} />
      </JsxStyled>
    </Fragment>
  )
}

export default InputsPage

InputsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
