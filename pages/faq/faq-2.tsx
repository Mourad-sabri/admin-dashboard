import Head from "next/head"
import { Fragment, ReactElement } from "react"
import Accordion from "../../admin/core/Accordion/Accordion"
import { Layout } from "../../admin/layouts"
import { Faq } from "../../admin/pages/Faqs/Faq"
import { S_FaqPage } from "../../admin/pages/Faqs/faq.styled"

const FaqPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Faq </title>
      </Head>
      <S_FaqPage>
        <div className="faq_container">
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
          <Faq title=" Lorem ipsum dolor sit, amet consectetur adipisicing elit.">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint incidunt quis impedit excepturi quidem velit a assumenda sunt, nam, nisi
            itaque dicta recusandae mollitia deleniti illo inventore, cupiditate consequatur amet?
          </Faq>
        </div>
      </S_FaqPage>
    </Fragment>
  )
}

export default FaqPage

FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
