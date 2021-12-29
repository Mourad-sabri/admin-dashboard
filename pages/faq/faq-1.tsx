import Head from "next/head"
import { Fragment, ReactElement } from "react"
import Accordion from "../../admin/core/Accordion/Accordion"
import { Layout } from "../../admin/layouts"

import { S_FaqPage } from "../../admin/pages/Faqs/faq.styled"

const FaqPage = () => {
  return (
    <Fragment>
      <Head>
        <title> Faqs 1 </title>
      </Head>
      <S_FaqPage>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
        <Accordion title="is This Template built with typescript">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur illo tempora sit ad eligendi veniam numquam dolorum incidunt, repellat sint
          similique quidem, molestias atque. Aperiam cupiditate, ipsam, sunt at iusto quasi non id consequuntur deleniti, fugiat aliquid officiis
          repellendus qui animi. Quis tempore iste mollitia sint distinctio voluptatibus totam doloremque odit rem maxime? Nemo, et maiores debitis
          harum tenetur facere modi nam! Quisquam ipsam deleniti accusamus laudantium. Sunt magnam eaque sapiente eligendi ex ipsa expedita deserunt
          fugit omnis tempore! Eligendi, maxime laborum? Nulla, itaque dolore vel provident molestias deserunt minima saepe placeat dicta
          necessitatibus facilis laboriosam ab at? Commodi, facere.
        </Accordion>
      </S_FaqPage>
    </Fragment>
  )
}

export default FaqPage

FaqPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
