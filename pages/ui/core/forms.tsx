import React, { Fragment, ReactElement, useState } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import { FormGroup } from "../../../admin/core/Forms/FormGroup"
import { InputFormGroup } from "../../../admin/core/Forms/InputFormGroup"
import Button from "../../../admin/core/Buttons/Button"
import * as yup from "yup"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  & .btn {
    margin-top: 10px;
  }

  & .values {
    margin-top: 10px;
  }
`

const formCode = (code: string) => `

import styled from "styled-components"
import { FormGroup } from "../../../asmaa/core/Forms/FormGroup"
import { InputFormGroup } from "../../../asmaa/core/Forms/InputFormGroup"
import Button from "../../../asmaa/core/Buttons/Button"

const Container = styled.div\`
& .btn {
  margin-top: 10px;
}

& .values {
  margin-top: 10px;
}
\`


function Forms() {

    const [values, setValues] = useState({
        email: "",
        password: "",
      })
    
      const formValues = {
        email: "",
        password: "",
      }
    

    return (
        ${code}
    )
}

`

const formValidationCode = (code: string) => `

import styled from "styled-components"
import { FormGroup } from "../../../asmaa/core/Forms/FormGroup"
import { InputFormGroup } from "../../../asmaa/core/Forms/InputFormGroup"
import Button from "../../../asmaa/core/Buttons/Button"

const Container = styled.div\`
& .btn {
  margin-top: 10px;
}

& .values {
  margin-top: 10px;
}
\`


function Forms() {

    const [values, setValues] = useState({
        email: "",
        password: "",
      })
    
      const formValues = {
        email: "",
        password: "",
      }
    
      
  const schemaValidation = yup.object().shape({
    email: yup.string().email("enter valid email").required("email is required"),
    password: yup.string().required("password is required"),
  })

    return (
        <Container>
        <FormGroup initialValues={formValues} onSubmit={(values) => setValues(values)} validationSchema={schemaValidation}>
          <InputFormGroup name="email" label="Email" />
          <InputFormGroup name="password" label="Password" />
          <Button className="btn"> submit </Button>
        </FormGroup>
        <div className="values">
          <pre>{JSON.stringify(values)}</pre>
        </div>
      </Container>
    )
}

`

const FormApi = [
  { title: "name (required) ", value: "string", default: "none" },
  { title: "label", value: "string", default: "none" },
  { title: "initialValues (FormGroup) ", value: "object", default: "none" },
  { title: "onSubmit (FormGroup) ", value: "function", default: "none" },
]

const FormsPage = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const formValues = {
    email: "",
    password: "",
  }

  const schemaValidation = yup.object().shape({
    email: yup.string().email("enter valid email").required("email is required"),
    password: yup.string().required("password is required"),
  })

  return (
    <Fragment>
      <Head>
        <title>Forms</title>
      </Head>
      <ComponentsDocs title="forms" renderCode={formCode}>
        <Container>
          <div className="title">to build form you need to wrap all InputformGroup with FormGroup and set inital values</div>
          {/* to build form you need to wrap all InputformGroup with FormGroup and set inital values */}
          <FormGroup initialValues={formValues} onSubmit={(values) => setValues(values)}>
            <InputFormGroup name="email" label="Email" />
            <InputFormGroup name="password" label="Password" />
            <Button className="btn"> submit </Button>
          </FormGroup>
          <div className="values">
            <pre>{JSON.stringify(values)}</pre>
          </div>
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="forms with validation" renderCode={formValidationCode}>
        <Container>
          <FormGroup initialValues={formValues} onSubmit={(values) => setValues(values)} validationSchema={schemaValidation}>
            <InputFormGroup name="email" label="Email" />
            <InputFormGroup name="password" label="Password" />
            <Button className="btn"> submit </Button>
          </FormGroup>
          <div className="values">
            <pre>{JSON.stringify(values)}</pre>
          </div>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={FormApi} />
    </Fragment>
  )
}

export default FormsPage

FormsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
