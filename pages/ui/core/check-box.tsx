import Head from "next/head"
import { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import CheckBox from "../../../admin/core/CheckBox/Checkbox"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const Container = styled.div`
  display: flex;
`

const checkBoxCode = (code: string) => `
import styled from "styled-components"
import CheckBox from "../../../asmaa/core/CheckBox/Checkbox"




const Container = styled.div\`
  display: flex;
\`


function CheckBoxInput() {

  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)
  const [checked4, setChecked4] = useState(true)
  const [checked5, setChecked5] = useState(true)


  return (
    ${code}
  )
}
`

const checkBoxApi = [
  { title: "label", value: "string", default: "none" },
  { title: "color", value: "string", default: "green" },
]

const CheckBoxPage = () => {
  const [checked1, setChecked1] = useState(true)
  const [checked2, setChecked2] = useState(true)
  const [checked3, setChecked3] = useState(true)
  const [checked4, setChecked4] = useState(true)
  const [checked5, setChecked5] = useState(true)
  return (
    <Fragment>
      <Head>
        <title>Checkbox</title>
      </Head>
      <ComponentsDocs title="checkbox" renderCode={checkBoxCode}>
        <Container>
          <CheckBox label="checkbox " />
          <CheckBox label="checkbox 1" checked={checked1} onChange={(e) => setChecked1(e.target.checked)} />
          <CheckBox label="checkbox 2" checked={checked2} onChange={(e) => setChecked2(e.target.checked)} color="orange" disabled />
          <CheckBox label="checkbox 3" checked={checked3} onChange={(e) => setChecked3(e.target.checked)} color="blue" />
          <CheckBox label="checkbox 4" checked={checked4} onChange={(e) => setChecked4(e.target.checked)} color="gray" />
          <CheckBox label="checkbox 5" checked={checked5} onChange={(e) => setChecked5(e.target.checked)} color="gold" />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={checkBoxApi} />
    </Fragment>
  )
}

export default CheckBoxPage

CheckBoxPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
