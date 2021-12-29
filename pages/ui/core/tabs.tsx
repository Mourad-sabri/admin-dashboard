import Head from "next/head"
import { Fragment, ReactElement } from "react"
import Tab from "../../../admin/core/Tabs/Tab"
import TabsContainer from "../../../admin/core/Tabs/TabsContainer"
import { Layout } from "../../../admin/layouts"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import RadioPage from "./radio"

const tabsCode = (code: string) => `
import Tab from "../../../asmaa/core/Tabs/Tab"
import TabsContainer from "../../../asmaa/core/Tabs/TabsContainer"

function Tabs() {
    return (
        ${code}
    )
}
`

const tabsApi = [
  { title: "children (TabsContainer) ", value: "jsx[]", default: "none" },
  { title: "title (tab) ", value: "string", default: "none" },
  { title: "children (tab) ", value: "jsx | string", default: "none" },
]

const TabsPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Tabs</title>
      </Head>
      <ComponentsDocs title="Tabs" renderCode={tabsCode}>
        <TabsContainer>
          <Tab title="tab 1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores asperiores quibusdam inventore beatae nam, deserunt tempora
            impedit rem quis quas sapiente nemo, voluptas ipsa vero harum velit possimus. Quidem.
          </Tab>
          <Tab title="tab 2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores asperiores quibusdam inventore beatae nam, deserunt tempora
            impedit rem quis quas sapiente nemo, voluptas ipsa vero harum velit possimus. Quidem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Recusandae, dolores asperiores quibusdam inventore beatae nam, deserunt tempora impedit rem quis quas sapiente nemo, voluptas ipsa
            vero harum velit possimus. Quidem.
          </Tab>
          <Tab title="tab 3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores a</Tab>
          <Tab title="tab 4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores asperiores quibusdam inventore beatae nam, deserunt tempora
            impedit rem quis quas sapiente nemo, voluptas ipsa vero harum velit possimus. Quidem. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Recusandae, dolores asperiores quibusdam inventore beatae nam, deserunt tempora impedit rem quis quas sapiente nemo, voluptas ipsa
            vero harum velit possimus. Quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, dolores asperiores quibusdam
            inventore beatae nam, deserunt tempora impedit rem quis quas sapiente nemo, voluptas ipsa vero harum velit possimus. Quidem.
          </Tab>
        </TabsContainer>
      </ComponentsDocs>
      <ComponentsApi api={tabsApi} />
    </Fragment>
  )
}

export default TabsPage

TabsPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
