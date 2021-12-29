import Head from "next/head"
import { Fragment, ReactElement, useState } from "react"
import styled from "styled-components"
import Button from "../../../admin/core/Buttons/Button"
import Drawer from "../../../admin/core/Drawer/Drawer"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"

const Container = styled.div`
  display: flex;
  & button {
    flex-shrink: 0;
    width: 100px;
  }
  justify-content: space-between;
`

const DrawerCode = (code: string) => `
import styled from "styled-components"
import Button from "../../../asmaa/core/Buttons/Button"
import Drawer from "../../../asmaa/core/Drawer/Drawer"

const Container = styled.div\`
  display: flex;
  & button {
    flex-shrink: 0;
    width: 100px;
  }
  justify-content: space-between;
\`

function DrawerComponent() {
    const [isOpen, setIsOpen] = useState(false)
    const [postion, setPostition] = useState<"right" | "top" | "bottom" | "left">("right")
  
    function openDrawer(potions: "right" | "top" | "bottom" | "left") {
      setPostition(potions)
      setIsOpen(true)
    }
  
   return (
       ${code}
   )

}
`

const DrawerApi = [
  { title: "isOpen", value: "boolean", default: "false" },
  { title: "children", value: "jsx", default: "none" },
  { title: "postion", value: "top | right | bottom | left", default: "right" },
  { title: "onClose", value: "function", default: "none" },
  { title: "allowClickOutisdeClose", value: "boolean", default: "false" },
]

const DrawerPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [postion, setPostition] = useState<"right" | "top" | "bottom" | "left">("right")

  function openDrawer(potions: "right" | "top" | "bottom" | "left") {
    setPostition(potions)
    setIsOpen(true)
  }

  return (
    <Fragment>
      <Head>
        <title>drawer</title>
      </Head>
      <ComponentsDocs title="Drawer" renderCode={DrawerCode}>
        <Container>
          <Button onClick={() => openDrawer("left")}> left </Button>
          <Button onClick={() => openDrawer("right")}> right </Button>
          <Button onClick={() => openDrawer("top")}> top </Button>
          <Button onClick={() => openDrawer("bottom")}> bottom </Button>
          <Drawer isOpen={isOpen} postion={postion} allowClickOutisdeClose onClose={() => setIsOpen(false)}></Drawer>
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={DrawerApi} />
    </Fragment>
  )
}

export default DrawerPage

DrawerPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
