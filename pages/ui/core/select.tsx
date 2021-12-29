import Head from "next/head"
import { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Select from "../../../admin/core/Select/Select"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import faker from "faker"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  & .multi-select {
    width: 500px;
  }
`

const productsName = Array(20)
  .fill(true)
  .map(() => {
    return {
      value: faker.commerce.productName(),
      label: faker.commerce.productName(),
    }
  })

const colors = Array(20)
  .fill(true)
  .map(() => {
    return {
      value: faker.vehicle.color(),
      label: faker.vehicle.color(),
    }
  })

const renderSelectCode = (code: string) => `
  import styled from "styled-components"
  import Select from "../../../asmaa/core/Select/Select"

  const Container = styled.div\`

\`
  
    
const productsName = Array(20)
.fill(true)
.map(() => {
  return {
    value: faker.commerce.productName(),
    label: faker.commerce.productName(),
  }
})

  function  SelectInput() {
    const [value, setValue] = useState("")

     return (
         ${code}
     )
     
  }

  `

const renderMultiSelectCode = (code: string) => `
  import styled from "styled-components"
  import Select from "../../../asmaa/core/Select/Select"

  const Container = styled.div\`
  & .multi-select {
    width: 500px;
  }
\`


const colors = Array(20)
  .fill(true)
  .map(() => {
    return {
      value: faker.vehicle.color(),
      label: faker.vehicle.color(),
    }
  }
  


  function  SelectInput() {
    //   default value shoud be Array
    const [multiValues, setMultiValues] = useState([])

     return (
         ${code}
     )
     
  }

  `

const selectApi = [
  { title: "value", value: "string | array", default: "string" },
  { title: "multi", value: "boolean", default: "false" },
  { title: "intent", value: "primary | secondary | error | success", default: "none" },
  { title: "size", value: "sm | md | lg | xl", default: "md" },
  { title: "icon", value: "jsx", default: "none" },
  { title: "rightIcon", value: "jsx", default: "none" },
  { title: "isLoading", value: "boolean", default: "false" },
]

const SelectPage = () => {
  const [value, setValue] = useState()
  const [multiValues, setMultiValues] = useState([])

  return (
    <Fragment>
      <Head>
        <title>Select</title>
      </Head>
      <ComponentsDocs title="Select" renderCode={renderSelectCode}>
        <Container>
          <Select options={productsName} value={value} handleChange={(v: any) => setValue(v)} />
        </Container>
      </ComponentsDocs>

      <ComponentsDocs title="Multi Select" renderCode={renderMultiSelectCode}>
        <Container>
          <Select className="multi-select" options={colors} multi value={multiValues} handleChange={(v: any) => setMultiValues(v)} />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={selectApi} />
    </Fragment>
  )
}

export default SelectPage

SelectPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
