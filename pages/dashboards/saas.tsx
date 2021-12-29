import React, { Fragment, ReactElement } from "react"
import { UsersData } from "../../admin/pages/Dashbords/Saas/Charts/UsersData"
import { NewUsers } from "../../admin/pages/Dashbords/Saas/Lists/NewUsers"
import { S_SaasPage } from "../../admin/pages/Dashbords/Saas/saas.styled"
import { SaasStaticsCard } from "../../admin/pages/Dashbords/Saas/StaticsCard/SaasStaticsCard"
import Head from "next/head"
import { WorkProgress } from "../../admin/pages/Dashbords/Saas/ProgressBar/WorkProgress"
import { SaasData } from "../../admin/pages/Dashbords/Saas/Charts/SaasData"
import { Transactions } from "../../admin/pages/Dashbords/Saas/Table/Transactions"
import { Layout } from "../../admin/layouts"

const Saas = () => {
  return (
    <Fragment>
      <Head>
        <title> Saas Dashboard </title>
      </Head>
      <S_SaasPage>
        <SaasStaticsCard />
        <div className="Dashboard__container">
          <NewUsers />
          <UsersData />
        </div>
        <WorkProgress />
        <SaasData />
        <Transactions />
        <footer className="Dashboard__footer">Asmaa all rights reserved © 2021</footer>
      </S_SaasPage>
    </Fragment>
  )
}

export default Saas

Saas.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
