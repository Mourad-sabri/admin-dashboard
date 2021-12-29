import React, { Fragment, ReactElement } from "react"
import Head from "next/head"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import Button from "../../../admin/core/Buttons/Button"
import styled from "styled-components"
import DropDown from "../../../admin/core/DropDown/DropDown"
import DropDownItem from "../../../admin/core/DropDown/DropDownItem"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
  padding-top: 20px;
  & button {
    flex-shrink: 0;
    width: 100px;
  }
  justify-content: space-between;
`

const DrawerCode = (code: string) => `
import Button from "../../../asmaa/core/Buttons/Button"
import styled from "styled-components"
import DropDown from "../../../asmaa/core/DropDown/DropDown"
import DropDownItem from "../../../asmaa/core/DropDown/DropDownItem"

const Container = styled.div\`
  display: flex;
  & button {
    flex-shrink: 0;
    width: 100px;
  }
  justify-content: space-between;
\`

function DrawerComponent() {
  

   return (
       ${code}
   )

}
`

const DropDownApi = [
  { title: "components", value: "jsx", default: "none" },
  { title: "placement", value: "left | top | bottom | right", default: "left" },
  { title: "children", value: "jsx[]", default: "none" },
  { title: "icon (dropdownItem) ", value: "jsx", default: "none" },
  { title: "children (dropDownItem)", value: "string", default: "none" },
]

const DropdownPage = () => {
  return (
    <Fragment>
      <Head>
        <title>DropDown</title>
      </Head>
      <ComponentsDocs title="DropDown" renderCode={DrawerCode}>
        <Container>
          <DropDown components={<Button> left </Button>} placement="left">
            <DropDownItem> link 1 </DropDownItem>
            <DropDownItem> link 2 </DropDownItem>
            <DropDownItem> link 3 </DropDownItem>
          </DropDown>
          <DropDown components={<Button> right </Button>} placement="right">
            <DropDownItem> link 1 </DropDownItem>
            <DropDownItem> link 2 </DropDownItem>
            <DropDownItem> link 3 </DropDownItem>
          </DropDown>
          <DropDown components={<Button> top </Button>} placement="top">
            <DropDownItem> link 1 </DropDownItem>
            <DropDownItem> link 2 </DropDownItem>
            <DropDownItem> link 3 </DropDownItem>
          </DropDown>
          <DropDown components={<Button> bottom </Button>} placement="bottom">
            <DropDownItem> link 1 </DropDownItem>
            <DropDownItem> link 2 </DropDownItem>
            <DropDownItem> link 3 </DropDownItem>
          </DropDown>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={DropDownApi} />
    </Fragment>
  )
}

export default DropdownPage

DropdownPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
