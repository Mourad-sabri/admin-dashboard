import Head from "next/head"
import { Fragment, ReactElement } from "react"
import { ComponentsApi, ComponentsDocs } from "../../../helpers"
import styled from "styled-components"
import DateInput from "../../../admin/core/DateInput/DateInput"
import { Layout } from "../../../admin/layouts"

const Container = styled.div`
  display: flex;
  justify-content: space-between;

  & .input {
    width: 200px;
    flex-shrink: 0;
  }

  & .input-range {
    width: 300px;
  }

  & .input-multi-date {
    width: 100%;
  }
`

const dateInputCode = (code: string) => `

import styled from "styled-components"
import DateInput from "../../../asmaa/core/DateInput/DateInput"


const Container = styled.div\`
  display: flex;
  justify-content: space-between;

  & .input {
    width: 200px;
    flex-shrink: 0;
  }

  & .input-range {
    width: 300px;
  }

  & .input-multi-date {
    width: 100%;
  }
\`


function DateInputComponent() {
return (
  ${code}
)
}
`

const dateInputApi = [
  { title: "intent", value: "primary, scondary, error, success", default: "none" },
  { title: "value", value: "Date", default: "none" },
  { title: "options", value: "object", default: "none" },
  { title: "size", value: "sm, md, lg, xl", default: "md" },
]

const DateInputPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Date Input</title>
      </Head>
      <ComponentsDocs title="DateInput" renderCode={dateInputCode}>
        <Container>
          <DateInput className="input" value={new Date()} />
          <DateInput className="input" intent="primary" value={new Date()} />
          <DateInput className="input" intent="secondary" value={new Date()} />
          <DateInput className="input" intent="error" value={new Date()} />
          <DateInput className="input" intent="success" value={new Date()} />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="DateInput Size" renderCode={dateInputCode}>
        <Container>
          <DateInput className="input" value={new Date()} size="sm" />
          <DateInput className="input" value={new Date()} size="md" />
          <DateInput className="input" value={new Date()} size="lg" />
          <DateInput className="input" value={new Date()} size="xl" />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="DateInput Range" renderCode={dateInputCode}>
        <Container>
          <DateInput
            className="input-range"
            value={new Date()}
            size="sm"
            options={{
              mode: "range",
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="DateInput multi date" renderCode={dateInputCode}>
        <Container>
          <DateInput
            className="input-multi-date"
            value={new Date()}
            size="sm"
            options={{
              mode: "multiple",
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsDocs title="DateInput time" renderCode={dateInputCode}>
        <Container>
          <DateInput
            className="input"
            value={new Date()}
            size="sm"
            options={{
              mode: "time",
            }}
          />
        </Container>
      </ComponentsDocs>
      <ComponentsApi api={dateInputApi} />
    </Fragment>
  )
}

export default DateInputPage

DateInputPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
