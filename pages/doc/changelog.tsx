import React, { ReactElement } from "react"
import styled from "styled-components"
import { Layout } from "../../admin/layouts"

const Container = styled.div`
  width: 100%;

  & .title {
    width: 100%;
    height: 50px;
    background-color: var(--bg-primary);
    border-radius: 5px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    font-size: 20px;
  }

  & .description {
    width: 100%;
    background-color: var(--bg-primary);
    border-radius: 5px;
    padding: 5px;
    margin-top: 5px;
  }

  & .im {
    color: dodgerblue;
    background-color: #8080802b;
  }
`

const ChangeLogPage = () => {
  return (
    <Container>
      <div className="title">ChangeLog</div>
      <div className="description">
        <span className="im">1.0.0</span>
      </div>
    </Container>
  )
}

export default ChangeLogPage

ChangeLogPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
